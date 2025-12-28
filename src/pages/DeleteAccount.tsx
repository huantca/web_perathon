import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

const API_BASE = "https://backend.perathon.org/api/v1";

const LOCKOUT_KEY = "auth_lockout_info"; // { failed:number, lockedUntil:number }

function getLockInfo() {
  try {
    const raw = localStorage.getItem(LOCKOUT_KEY);
    if (!raw) return { failed: 0, lockedUntil: 0 };
    const parsed = JSON.parse(raw);
    return { failed: Number(parsed.failed) || 0, lockedUntil: Number(parsed.lockedUntil) || 0 };
  } catch {
    return { failed: 0, lockedUntil: 0 };
  }
}

function setLockInfo(info: { failed: number; lockedUntil: number }) {
  localStorage.setItem(LOCKOUT_KEY, JSON.stringify(info));
}

const TOKEN_KEY = "auth_token";

export default function DeleteAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [me, setMe] = useState<any>(null);

  const lockInfo = useMemo(getLockInfo, [token]);
  const now = Date.now();
  const isLocked = lockInfo.lockedUntil && now < lockInfo.lockedUntil;
  const remainingMs = Math.max(0, (lockInfo.lockedUntil || 0) - now);

  useEffect(() => {
    const t = localStorage.getItem(TOKEN_KEY);
    if (!t) {
      setMe(null);
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/user/me/`, {
          headers: { Authorization: `Bearer ${t}` },
        });
        if (res.ok) {
          const data = await res.json();
          setMe(data);
        } else if (res.status === 401) {
          localStorage.removeItem(TOKEN_KEY);
          setToken(null);
          setMe(null);
        }
      } catch (e: any) {
        console.error(e);
      }
    })();
  }, [token]);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) {
      toast({ title: "Bạn đã bị khóa tạm thời", description: "Vui lòng thử lại sau 5 phút." });
      return;
    }
    setLoading(true);
    
    try {
      const payload = { email: email.trim(), password };
      const res = await fetch(`${API_BASE}/auth/sign-in/account/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Try extract error message from backend shape
        let description = "Email hoặc mật khẩu không đúng.";
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const errBody = await res.json();
            if (errBody?.message) description = String(errBody.message);
            else if (errBody?.detail && typeof errBody.detail === "string") description = errBody.detail;
            else if (errBody?.data && typeof errBody.data === "object") {
              const firstKey = Object.keys(errBody.data)[0];
              const firstVal = firstKey ? errBody.data[firstKey] : undefined;
              if (Array.isArray(firstVal) && firstVal.length) description = String(firstVal[0]);
              else if (typeof firstVal === "string") description = firstVal;
            } else if (typeof errBody === "object") {
              const keys = Object.keys(errBody);
              const firstKey = keys[0];
              const firstVal = firstKey ? errBody[firstKey] : undefined;
              if (Array.isArray(firstVal) && firstVal.length) description = String(firstVal[0]);
              else if (typeof firstVal === "string") description = firstVal;
            }
          } else {
            const txt = await res.text();
            if (txt) description = txt;
          }
        } catch {}
        // handle lockout increments
        const nextFailed = (lockInfo.failed || 0) + 1;
        let lockedUntil = lockInfo.lockedUntil || 0;
        if (nextFailed >= 10) {
          lockedUntil = Date.now() + 5 * 60 * 1000; // 5 minutes
          toast({ title: "Quá số lần cho phép", description: "Bạn đã nhập sai 10 lần. Vui lòng thử lại sau 5 phút." });
        } else {
          toast({ title: "Đăng nhập thất bại", description });
        }
        setLockInfo({ failed: lockedUntil ? 0 : nextFailed, lockedUntil });
        return;
      }
      const body = await res.json();
      // Backend shape: { code, message, data: { access_token, refresh_token, ... } }
      const accessToken = body?.data?.access_token || body?.access_token || body?.token || body?.accessToken;
      if (!accessToken) {
        toast({ title: "Đăng nhập thất bại", description: "Thiếu access token từ máy chủ." });
        return;
      }
      localStorage.setItem(TOKEN_KEY, accessToken);
      setToken(accessToken);
      setLockInfo({ failed: 0, lockedUntil: 0 });
      toast({ title: "Đăng nhập thành công" });
    } catch (e: any) {
      toast({ title: "Lỗi kết nối", description: "Vui lòng thử lại sau." });
    } finally {
      setLoading(false);
    }
  };

  const onGoogleSignIn = () => {
    window.location.href = `${API_BASE}/auth/sign-in/google/`;
  };

  const onDelete = async () => {
    if (!token) {
      toast({ title: "Chưa đăng nhập", description: "Vui lòng đăng nhập trước." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/user/me/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast({ title: "Xóa tài khoản thành công" });
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setMe(null);
        navigate("/delete-account", { replace: true });
      } else if (res.status === 401) {
        toast({ title: "Phiên đăng nhập hết hạn", description: "Vui lòng đăng nhập lại." });
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setMe(null);
      } else {
        const txt = await res.text();
        toast({ title: "Xóa thất bại", description: txt || "Không thể xóa tài khoản." });
      }
    } catch (e: any) {
      toast({ title: "Lỗi kết nối", description: "Vui lòng thử lại sau." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!token ? (
          <Card>
            <CardHeader>
              <CardTitle>Đăng nhập để xóa tài khoản</CardTitle>
              <CardDescription>Nhập email và mật khẩu của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading || isLocked} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading || isLocked} />
                </div>
                {isLocked ? (
                  <p className="text-sm text-destructive">Bạn đã nhập sai quá 10 lần. Vui lòng thử lại sau {Math.ceil(remainingMs / 1000 / 60)} phút.</p>
                ) : null}
                <Button type="submit" disabled={loading || isLocked} className="w-full">
                  {loading ? "Đang xử lý..." : "Đăng nhập"}
                </Button>
                <div className="h-px bg-border" />
                <Button type="button" variant="outline" onClick={onGoogleSignIn} disabled={loading} className="w-full">
                  Đăng nhập với Google
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Xóa tài khoản</CardTitle>
              <CardDescription>
                {me ? (
                  <span>
                    Bạn đang đăng nhập dưới tên <b>{me?.email || me?.username || "tài khoản"}</b>.
                  </span>
                ) : (
                  <span>Đã đăng nhập.</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" disabled={loading} className="w-full">
                    Xóa tài khoản vĩnh viễn
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Bạn có chắc muốn xóa tài khoản?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Hành động này không thể hoàn tác. Tất cả dữ liệu liên quan sẽ bị xóa (nếu hệ thống hỗ trợ). Nhấn Xóa để tiếp tục.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Hủy</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} className="bg-destructive hover:bg-destructive/90">
                      Xóa
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button variant="secondary" onClick={() => { localStorage.removeItem(TOKEN_KEY); setToken(null); setMe(null); }} disabled={loading} className="w-full">
                Đăng xuất
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
