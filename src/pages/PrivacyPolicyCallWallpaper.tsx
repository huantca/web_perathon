import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const PrivacyPolicyCallWallpaper: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const langParam = searchParams.get('lang');
  const [language, setLanguage] = useState<'vi' | 'en'>(langParam === 'en' ? 'en' : 'vi');

  useEffect(() => {
    if (langParam === 'en' || langParam === 'vi') {
      setLanguage(langParam);
    }
  }, [langParam]);

  const switchLanguage = (lang: 'vi' | 'en') => {
    setLanguage(lang);
    setSearchParams({ lang });
  };

  const getTermsLink = () => {
    const path = location.pathname;
    if (path.includes('call-screen-ringtone')) return `/term-of-use-call-screen-ringtone?lang=${language}`;
    if (path.includes('call-screen')) return `/term-of-use-call-screen?lang=${language}`;
    if (path.includes('call-wallpaper')) return `/term-of-use-call-wallpaper?lang=${language}`;
    if (path.includes('custom-ringtones-call-theme')) return `/term-of-use-custom-ringtones-call-theme?lang=${language}`;
    return `/term-of-use-call-wallpaper?lang=${language}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      {/* Top Bar / Language Selector & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Link
            to={getTermsLink()}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {language === 'vi' ? '← Xem Điều khoản sử dụng' : '← View Terms of Use'}
          </Link>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => switchLanguage('vi')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              language === 'vi'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Tiếng Việt
          </button>
          <button
            type="button"
            onClick={() => switchLanguage('en')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              language === 'en'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {language === 'vi' ? (
        /* VIETNAMESE CONTENT */
        <div>
          <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
            Chính sách quyền riêng tư
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
            <p className="mb-4 leading-relaxed">
              Chính sách Quyền riêng tư này (“Chính sách”) được áp dụng cho ứng dụng di động <strong>Call Wallpaper</strong> trên Google Play Store và các kho ứng dụng di động (“Ứng dụng”).
            </p>
            <p className="mb-4 leading-relaxed">
              Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ văn bản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “ứng dụng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> là giải pháp toàn diện hỗ trợ người dùng cá nhân hóa trải nghiệm cuộc gọi, quản lý quay số thông minh và bảo vệ thiết bị khỏi các cuộc gọi làm phiền. Các tính năng nổi bật của ứng dụng bao gồm:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Chủ đề màn hình cuộc gọi (Call Screen Themes):</strong> Cung cấp kho hình nền cuộc gọi động sắc nét, video phong phú, ảnh động (Live Photos), bảng màu phong cách và cho phép tự chọn ảnh/video từ thư viện máy để cài đặt làm hình nền cuộc gọi đến và cuộc gọi đi.
              </li>
              <li>
                <strong>Nút nghe/từ chối cuộc gọi tùy biến (Call Buttons):</strong> Tùy chọn kiểu dáng, biểu tượng và hiệu ứng nút nhận cuộc gọi (vuốt, chạm, phong cách độc đáo).
              </li>
              <li>
                <strong>Viền đèn LED cuộc gọi (LED Border / Edge Lighting):</strong> Hiệu ứng viền sáng chạy dọc thân máy khi có cuộc gọi đến với tùy biến kích thước, tốc độ, góc bo viền, màu sắc đơn sắc hoặc chuyển màu (Gradient) và hiệu ứng xoay sống động.
              </li>
              <li>
                <strong>Cảnh báo đèn Flash &amp; Rung (Flash Alert):</strong> Nháy đèn flash camera và rung theo nhịp khi có cuộc gọi đến hoặc thông báo với các chế độ nhấp nháy tùy chỉnh.
              </li>
              <li>
                <strong>Kho nhạc chuông &amp; Âm thanh (Ringtone Collection):</strong> Nghe thử và cài đặt nhạc chuông cuộc gọi, âm báo tin nhắn, âm báo thức trực tiếp từ thư viện nhạc trực tuyến hoặc từ tệp âm thanh trên thiết bị của bạn.
              </li>
              <li>
                <strong>Sàng lọc cuộc gọi &amp; Chặn thư rác (Call Screening):</strong> Tích hợp dịch vụ sàng lọc cuộc gọi hệ thống (Telecom CallScreeningService), hỗ trợ thiết lập danh sách trắng (Whitelist), danh sách đen (Blacklist), quy tắc biểu thức chính quy (Regex Rules) và nhật ký cuộc gọi được sàng lọc (Cho phép, Tắt chuông, Chặn cuộc gọi làm phiền).
              </li>
              <li>
                <strong>Bàn phím quay số &amp; Danh bạ (Dialer &amp; Contacts):</strong> Tích hợp trình quay số cuộc gọi (InCallService), quản lý danh bạ và gán hình nền/nhạc chuông riêng biệt cho từng người liên hệ.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Chúng tôi cam kết tôn trọng tuyệt đối quyền riêng tư và bảo vệ dữ liệu cá nhân của người dùng theo nguyên tắc <strong>Ưu tiên xử lý trực tiếp trên thiết bị (On-Device Processing)</strong>. Bằng việc tải về, cài đặt và sử dụng Ứng dụng, bạn đồng ý với các nguyên tắc bảo vệ quyền riêng tư được nêu trong văn bản này.
            </p>
            <p className="mb-4 leading-relaxed">
              Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Nguyên tắc bảo mật &amp; Dữ liệu xử lý trên thiết bị (On-Device Processing)</h2>
            <p className="mb-4 leading-relaxed">
              Nguyên tắc cốt lõi của <strong>Call Wallpaper</strong> là bảo vệ thông tin nhạy cảm của bạn. Toàn bộ các tác vụ xử lý cuộc gọi, danh bạ và phương tiện cá nhân đều diễn ra cục bộ trực tiếp trên điện thoại của bạn:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li>
                <strong>Dữ liệu danh bạ (Contacts):</strong> Ứng dụng truy cập danh bạ để hiển thị thông tin người gọi, cho phép bạn gán hình nền hoặc nhạc chuông riêng cho từng liên hệ, và áp dụng quy tắc sàng lọc (Whitelist). <strong>Chúng tôi tuyệt đối KHÔNG sao lưu, KHÔNG tải danh bạ lên máy chủ từ xa và KHÔNG chia sẻ danh bạ của bạn cho bất kỳ bên thứ ba nào.</strong>
              </li>
              <li>
                <strong>Nhật ký cuộc gọi (Call Logs):</strong> Được sử dụng cục bộ để hiển thị lịch sử cuộc gọi gần đây trên bàn phím quay số và ghi nhận lịch sử các cuộc gọi bị chặn hoặc tắt chuông trong tính năng Sàng lọc cuộc gọi. Dữ liệu này chỉ lưu trên bộ nhớ máy của bạn.
              </li>
              <li>
                <strong>Quy tắc sàng lọc cuộc gọi (Screening Rules):</strong> Các danh sách chặn (Blacklist), danh sách cho phép (Whitelist) và quy tắc mẫu số điện thoại (Regex) do bạn thiết lập được lưu trữ an toàn trong bộ nhớ nội bộ của ứng dụng trên thiết bị và không bao giờ bị đồng bộ ra ngoài.
              </li>
              <li>
                <strong>Hình ảnh, video và âm thanh cá nhân:</strong> Khi bạn chọn ảnh hoặc video từ bộ sưu tập làm nền cuộc gọi, hoặc chọn bài hát trong máy làm nhạc chuông, toàn bộ tệp tin được xử lý trực tiếp trên thiết bị của bạn.
              </li>
              <li>
                <strong>Nội dung cuộc đàm thoại:</strong> Ứng dụng <strong>tuyệt đối KHÔNG ghi âm cuộc gọi, không nghe lén và không can thiệp vào luồng thoại</strong> giữa bạn và người gọi.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Quyền truy cập thiết bị (Device Permissions)</h2>
            <p className="mb-2">Để thực hiện đầy đủ các chức năng cá nhân hóa cuộc gọi, quay số và sàng lọc cuộc gọi theo tiêu chuẩn Android, ứng dụng có thể yêu cầu bạn cấp các quyền truy cập sau:</p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li>
                <strong>Quyền Đọc trạng thái điện thoại (READ_PHONE_STATE):</strong> Giúp ứng dụng phát hiện trạng thái cuộc gọi (đang đổ chuông, nhấc máy, kết thúc) theo thời gian thực để hiển thị giao diện màn hình cuộc gọi tùy biến, kích hoạt viền LED chạy quanh màn hình và khởi động đèn flash cảnh báo.
              </li>
              <li>
                <strong>Quyền Danh bạ (READ_CONTACTS &amp; WRITE_CONTACTS):</strong> Cho phép ứng dụng hiển thị tên, số điện thoại và ảnh liên hệ khi có cuộc gọi; hỗ trợ tính năng luôn cho phép các số trong danh bạ (Whitelist) trong bộ lọc cuộc gọi; và cho phép bạn thiết lập hình nền/nhạc chuông riêng cho từng liên hệ cũng như thêm/sửa liên hệ từ bàn phím quay số.
              </li>
              <li>
                <strong>Quyền Gọi điện &amp; Trả lời cuộc gọi (CALL_PHONE &amp; ANSWER_PHONE_CALLS):</strong> Cho phép người dùng thực hiện cuộc gọi trực tiếp từ bàn phím quay số của ứng dụng và bấm nút nhận cuộc gọi trên giao diện màn hình cuộc gọi tùy biến.
              </li>
              <li>
                <strong>Dịch vụ Sàng lọc cuộc gọi (BIND_SCREENING_SERVICE - CallScreeningService):</strong> Cho phép ứng dụng hoạt động như một Trình sàng lọc cuộc gọi mặc định (Default Call Screener), tự động kiểm tra số điện thoại gọi đến theo các quy tắc danh sách đen/trắng do bạn đặt ra để tự động từ chối hoặc tắt chuông cuộc gọi quấy rối.
              </li>
              <li>
                <strong>Dịch vụ Quản lý cuộc gọi (BIND_INCALL_SERVICE - InCallService):</strong> Cung cấp giao diện cuộc gọi đến và cuộc gọi đang diễn ra đầy đủ chức năng khi bạn chọn ứng dụng làm Trình quay số mặc định.
              </li>
              <li>
                <strong>Quyền Máy ảnh / Đèn Flash (CAMERA &amp; FLASHLIGHT):</strong> Dùng độc quyền để điều khiển đèn LED trợ sáng nhấp nháy khi có cuộc gọi đến (Call Flash Alert). Ứng dụng <strong>hoàn toàn không sử dụng camera để chụp ảnh hay quay phim trái phép</strong>.
              </li>
              <li>
                <strong>Quyền Rung (VIBRATE):</strong> Đồng bộ hiệu ứng rung theo nhịp điệu khi có cuộc gọi đến, kiểm tra thử đèn flash hoặc khi nhấn phím bấm quay số.
              </li>
              <li>
                <strong>Quyền Quản lý cài đặt âm thanh (MODIFY_AUDIO_SETTINGS):</strong> Điều chỉnh âm lượng nhạc chuông và quản lý chế độ loa ngoài trong khi đàm thoại.
              </li>
              <li>
                <strong>Quyền Thông báo (POST_NOTIFICATIONS):</strong> Hiển thị thông báo về cuộc gọi nhỡ, cuộc gọi đã bị chặn bởi bộ lọc và trạng thái hoạt động của dịch vụ nền (trên Android 13 trở lên).
              </li>
              <li>
                <strong>Quyền Kết nối mạng (INTERNET &amp; ACCESS_NETWORK_STATE):</strong> Tải danh mục hình nền cuộc gọi trực tuyến, tải nhạc chuông từ thư viện đám mây, phục vụ hiển thị quảng cáo và gửi báo cáo sự cố kỹ thuật ẩn danh.
              </li>
              <li>
                <strong>Quyền Hiển thị trên màn hình khóa &amp; Cửa sổ bật lên (Lock Screen &amp; Pop-up Windows):</strong> Cần thiết trên các thiết bị Android tùy biến (đặc biệt là Xiaomi, Redmi, HyperOS/MIUI) để cho phép giao diện cuộc gọi tùy biến hiển thị ngay cả khi màn hình đang khóa hoặc dưới dạng cửa sổ nổi khi bạn đang sử dụng ứng dụng khác.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Dịch vụ bên thứ ba &amp; Quảng cáo</h2>
            <p className="mb-2">Ứng dụng tích hợp các bộ công cụ phát triển phần mềm (SDK) uy tín theo tiêu chuẩn quốc tế:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Google Play Services &amp; Google Play Billing:</strong> Cung cấp hạ tầng nền tảng Android an toàn và xử lý các giao dịch nâng cấp gói VIP / Không quảng cáo.
              </li>
              <li>
                <strong>Google AdMob:</strong> Hiển thị quảng cáo (biểu ngữ, xen kẽ, có thưởng) nhằm duy trì cung cấp ứng dụng và kho tài nguyên miễn phí cho cộng đồng.
              </li>
              <li>
                <strong>Firebase Crashlytics &amp; Analytics:</strong> Ghi nhận các báo cáo sập ứng dụng kỹ thuật và số liệu phân tích tổng hợp ẩn danh nhằm liên tục nâng cao tính ổn định và khắc phục lỗi phát sinh.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              Các dịch vụ bên thứ ba nêu trên xử lý thông tin kỹ thuật theo <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chính sách Quyền riêng tư của Google</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Bảo vệ dữ liệu &amp; Quyền kiểm soát của người dùng</h2>
            <p className="mb-4 leading-relaxed">
              Chúng tôi cam kết <strong>không bán, không trao đổi và không thương mại hóa</strong> bất kỳ thông tin cá nhân nào của bạn.
            </p>
            <p className="mb-4 leading-relaxed">
              Bạn luôn nắm toàn quyền kiểm soát thiết bị và dữ liệu của mình:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bạn có thể bật hoặc tắt bất kỳ quyền truy cập nào (Danh bạ, Nhật ký cuộc gọi, Đèn flash, Thông báo) tại Cài đặt ứng dụng trên hệ điều hành điện thoại.</li>
              <li>Bạn có thể thay đổi ứng dụng gọi điện mặc định hoặc trình sàng lọc cuộc gọi mặc định về cài đặt gốc của hệ thống bất cứ lúc nào trong Cài đặt ứng dụng mặc định của máy.</li>
              <li>Bạn có thể xóa các quy tắc chặn, lịch sử cuộc gọi trong ứng dụng hoặc khôi phục nhạc chuông hệ thống trực tiếp trong menu Cài đặt.</li>
              <li>Khi bạn gỡ cài đặt ứng dụng, toàn bộ cấu hình chủ đề, danh sách chặn và dữ liệu tạm thời lưu trữ nội bộ sẽ được xóa sạch khỏi thiết bị.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Quyền riêng tư của trẻ em (COPPA &amp; GDPR-K)</h2>
            <p className="mb-4 leading-relaxed">
              Ứng dụng không hướng tới đối tượng trẻ em dưới 13 tuổi (hoặc độ tuổi tối thiểu theo quy định của quốc gia sở tại). Chúng tôi không cố ý thu thập dữ liệu định danh cá nhân của trẻ em. Nếu chúng tôi phát hiện dữ liệu của trẻ em dưới 13 tuổi được ghi nhận ngoài ý muốn, dữ liệu đó sẽ lập tức được loại bỏ khỏi hệ thống.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Thay đổi đối với Chính sách này</h2>
            <p className="mb-4 leading-relaxed">
              Chúng tôi có thể định kỳ cập nhật Chính sách Quyền riêng tư này để phản ánh các cải tiến tính năng mới hoặc tuân thủ các quy chuẩn pháp lý và chính sách cập nhật của Google Play. Mọi thay đổi sẽ có hiệu lực ngay khi được đăng tải công khai trên trang web này.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Thông tin liên hệ</h2>
            <p className="mb-4 leading-relaxed">
              Nếu bạn có bất kỳ thắc mắc, đề xuất hoặc phản hồi nào liên quan đến Chính sách Quyền riêng tư này, xin vui lòng liên hệ:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Đơn vị chủ quản:</strong> CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</li>
              <li><strong>Địa chỉ trụ sở:</strong> Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</li>
              <li><strong>Email hỗ trợ:</strong> <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a></li>
              <li><strong>Website chính thức:</strong> <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a></li>
            </ul>
          </section>
        </div>
      ) : (
        /* ENGLISH CONTENT */
        <div>
          <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              This Privacy Policy (“Policy”) governs the mobile application <strong>Call Wallpaper</strong> available on Google Play and related mobile app distribution channels (“Application”).
            </p>
            <p className="mb-4 leading-relaxed">
              The Application is owned and operated by <strong>PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED</strong> (registered in Vietnam as <em>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</em>), located at <strong>No. 94, Alley 77, Vo Nguyen Giap Road, Village 1, Son Dong Commune, Bac Ninh Province, Vietnam</strong>. Throughout this Policy, “Perathon”, “we”, “our”, or “us” refers to PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> is a comprehensive mobile personalization and telephony enhancement application designed to elevate your calling experience, smart dialing, and call protection. Core functionalities include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Call Screen Themes &amp; Wallpapers:</strong> Dynamic full-screen incoming and active call wallpapers, video caller screens, live photos, artistic color palettes, gradient styles, and custom photo/video backgrounds selected from your device gallery.
              </li>
              <li>
                <strong>Custom Call Buttons:</strong> Multiple stylish answer and decline button packs with animated and interactive touch/swipe designs.
              </li>
              <li>
                <strong>LED Border / Edge Lighting:</strong> Beautiful animated border lighting outlining your screen borders during incoming calls, with customizable speed, border size, corner radius, rotation, and custom colors or gradients.
              </li>
              <li>
                <strong>Flash Alert &amp; Vibration:</strong> Camera LED flash blinking alerts on incoming calls and notifications, featuring customizable flash speed, blinking modes, and synchronized vibration patterns.
              </li>
              <li>
                <strong>Ringtone &amp; Audio Library:</strong> Extensive catalog of high quality ringtones, trending sounds, and local audio selection with seamless one-tap setup as Phone Ringtone, Notification Tone, or Alarm Sound.
              </li>
              <li>
                <strong>Call Screening &amp; Spam Blocker:</strong> Telecom-powered call screening (CallScreeningService) featuring user-defined Whitelists, Blacklists, regular expression (Regex) pattern filters, configurable unmatched call behaviors (Allow, Silence, or Block), and detailed screening logs.
              </li>
              <li>
                <strong>Phone Dialer &amp; Contact Management:</strong> In-app keypad dialpad (InCallService), contact management, and contact-specific customization (assigning individual backgrounds and ringtones to specific people).
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              We uphold strict privacy standards and adhere strictly to an <strong>On-Device Processing</strong> design philosophy: sensitive user data is processed locally on your phone and never uploaded to remote servers. By downloading, installing, or using the Application, you accept the practices outlined in this Policy.
            </p>
            <p className="mb-4 leading-relaxed">
              If you have any questions or feedback, please contact us at: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. On-Device Processing &amp; Data Confidentiality</h2>
            <p className="mb-4 leading-relaxed">
              The fundamental principle of <strong>Call Wallpaper</strong> is that your communications, contacts, and personal media remain strictly private and under your control:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li>
                <strong>Contacts Data:</strong> Accessed locally to display caller identity, enable whitelist filtering in call screening, and allow assigning individual themes and ringtones to specific contacts. <strong>We NEVER upload your contacts to external servers, NEVER backup your address book remotely, and NEVER sell or share contact details with third parties.</strong>
              </li>
              <li>
                <strong>Call Logs:</strong> Read locally to render recent calls in the dialer keypad and record the screening outcome (allowed, silenced, or blocked) in Call Screening logs. This information stays entirely within your local device memory.
              </li>
              <li>
                <strong>Screening Rules:</strong> Whitelist entries, blacklist entries, and regex rules defined by you are stored securely in local app preferences on your device and are never transmitted to external cloud systems.
              </li>
              <li>
                <strong>Personal Media:</strong> Gallery photos, videos, and music files chosen as call wallpapers or custom ringtones are processed exclusively on your device storage.
              </li>
              <li>
                <strong>Call Conversations:</strong> The Application <strong>NEVER records calls, never listens to voice conversations, and has no audio surveillance capabilities</strong>.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Device Permissions &amp; How They Are Used</h2>
            <p className="mb-2">To perform caller theming, call screening, and phone dialer capabilities according to Android standards, the Application may request the following system permissions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li>
                <strong>Phone State (READ_PHONE_STATE):</strong> Detects real-time call states (ringing, off-hook, idle) to display the customized full-screen call UI, trigger edge LED border lights, and flash alerts.
              </li>
              <li>
                <strong>Call Log (READ_CALL_LOG):</strong> Displays recent call history on the dialer tab and records screening logs for incoming calls.
              </li>
              <li>
                <strong>Contacts (READ_CONTACTS &amp; WRITE_CONTACTS):</strong> Identifies callers with contact names and photos, allows always-allowing contacts in call screening (Whitelist), and enables you to assign customized backgrounds/ringtones to specific contacts or manage contacts directly.
              </li>
              <li>
                <strong>Phone Calls (CALL_PHONE &amp; ANSWER_PHONE_CALLS):</strong> Allows initiating phone calls from the in-app dialpad and answering incoming calls directly from the custom call screen.
              </li>
              <li>
                <strong>Call Screening Service (BIND_SCREENING_SERVICE - CallScreeningService):</strong> Integrates with Android Telecom framework to act as your Default Call Screener, automatically evaluating incoming numbers against your whitelist, blacklist, and regex rules to reject or silence spam callers.
              </li>
              <li>
                <strong>In-Call Service (BIND_INCALL_SERVICE - InCallService):</strong> Powers the incoming and active call interface when set as the Default Phone app / dialer.
              </li>
              <li>
                <strong>Camera &amp; Flashlight (CAMERA &amp; FLASHLIGHT):</strong> Used exclusively to trigger the blinking camera LED flash when receiving calls (Flash Alert). The camera lens is <strong>never accessed to take photos or record videos without explicit user direction</strong>.
              </li>
              <li>
                <strong>Vibration (VIBRATE):</strong> Drives rhythmic haptic feedback synchronized with incoming calls, flash tests, and dialpad touches.
              </li>
              <li>
                <strong>Audio Settings (MODIFY_AUDIO_SETTINGS):</strong> Adjusts call audio streams, speakerphone toggles, and ringtone volume levels.
              </li>
              <li>
                <strong>Post Notifications (POST_NOTIFICATIONS):</strong> Delivers alerts about blocked spam calls and ongoing background service status (Android 13+).
              </li>
              <li>
                <strong>Network Access (INTERNET &amp; ACCESS_NETWORK_STATE):</strong> Fetches online theme catalogs, downloads ringtones, serves ads, and sends anonymous crash diagnostics.
              </li>
              <li>
                <strong>Lock Screen &amp; Background Pop-up Display:</strong> Required on custom Android systems (especially Xiaomi, Redmi, HyperOS/MIUI) to allow showing caller screens on the lock screen and pop-up overlays over other running apps.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Third-Party Services &amp; Advertisements</h2>
            <p className="mb-2">The Application integrates industry-standard SDKs from trusted technology partners:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Google Play Services &amp; Google Play Billing:</strong> Powers secure Android platform integration and in-app purchase processing for VIP / Ad-free subscriptions.
              </li>
              <li>
                <strong>Google AdMob:</strong> Displays banner, interstitial, and rewarded ads to support ongoing development and keep the application accessible to all users.
              </li>
              <li>
                <strong>Firebase Crashlytics &amp; Analytics:</strong> Gathers aggregated, non-identifying telemetry to detect application crashes and optimize performance across diverse Android devices.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              These third-party providers process diagnostic data according to the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Data Retention &amp; User Control</h2>
            <p className="mb-4 leading-relaxed">
              We pledge <strong>never to sell, lease, or monetize</strong> your personal details or calling data.
            </p>
            <p className="mb-4 leading-relaxed">
              You retain total control over your device and preferences:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You can grant or revoke any permission (Contacts, Call Logs, Flashlight, Notifications) at any time via your device System Settings.</li>
              <li>You can reset your Default Phone app or Default Call Screener app back to system defaults at any time via Android Default Apps settings.</li>
              <li>You can clear call screening rules, delete customized themes, or reset ringtones directly within the application.</li>
              <li>Uninstalling the Application completely purges all local rules, cache, and theme settings from your device.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Children's Privacy (COPPA &amp; GDPR-K)</h2>
            <p className="mb-4 leading-relaxed">
              The Application is not directed toward children under 13 years of age (or the minimum legal age defined in your region). We do not knowingly collect personally identifiable information from children. If we discover inadvertent retention of data belonging to a child under 13, it will be promptly expunged.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Changes to This Privacy Policy</h2>
            <p className="mb-4 leading-relaxed">
              We may update this Privacy Policy periodically to reflect app updates or regulatory guidelines. Any modifications will take effect immediately upon posting on this page. We invite you to check back periodically to stay informed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions, comments, or inquiries regarding this Privacy Policy, please feel free to reach out to us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Company:</strong> PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED</li>
              <li><strong>Address:</strong> No. 94, Alley 77, Vo Nguyen Giap Road, Village 1, Son Dong Commune, Bac Ninh Province, Vietnam</li>
              <li><strong>Support Email:</strong> <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a></li>
              <li><strong>Official Website:</strong> <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a></li>
            </ul>
          </section>
        </div>
      )}

      <footer className="text-center text-sm text-gray-500 mt-12 border-t pt-4">
        &copy; {new Date().getFullYear()} CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicyCallWallpaper;
