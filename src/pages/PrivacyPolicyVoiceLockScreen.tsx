import React from 'react';

const PrivacyPolicyVoiceLockScreen: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
        Chính sách quyền riêng tư
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
        <p className="mb-4 leading-relaxed">
          Chính sách Quyền riêng tư này (“Chính sách”) được áp dụng cho ứng dụng di động <strong>Voice Lock Screen: Phone Lock</strong> trên Google Play Store và Apple App Store (“Ứng dụng”).
        </p>
        <p className="mb-4 leading-relaxed">
          Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ văn bản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “ứng dụng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Voice Lock Screen: Phone Lock</strong> là ứng dụng thông minh hỗ trợ bảo vệ và cá nhân hóa màn hình khóa thiết bị di động, cho phép người dùng mở khóa hoặc khóa điện thoại bằng khẩu lệnh giọng nói (Voice Unlock/Lock), mã số PIN bảo mật, vẽ mẫu hình (Pattern Lock), xác thực vân tay sinh trắc học (Fingerprint/Biometric), thiết lập câu hỏi bảo mật khôi phục và tùy biến giao diện hình nền màn hình khóa đa dạng.
        </p>
        <p className="mb-4 leading-relaxed">
          Chúng tôi coi trọng việc bảo vệ dữ liệu cá nhân và quyền riêng tư của bạn. Ứng dụng được thiết kế theo nguyên tắc ưu tiên xử lý dữ liệu trực tiếp trên thiết bị (On-Device Processing), tuyệt đối không thu thập, không bán và không lưu giữ các tệp ghi âm giọng nói hay mật khẩu cá nhân của bạn trên máy chủ từ xa. Bằng việc tải về và sử dụng Ứng dụng, bạn đồng ý với các nguyên tắc bảo mật được nêu trong văn bản này.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Nguyên tắc bảo mật trên thiết bị &amp; Lưu trữ dữ liệu xác thực (On-Device Security)</h2>
        <p className="mb-4 leading-relaxed">
          Nguyên tắc cốt lõi của <strong>Voice Lock Screen: Phone Lock</strong> là <strong>TẤT CẢ DỮ LIỆU XÁC THỰC MỞ KHÓA ĐƯỢC XỬ LÝ VÀ MÃ HÓA NỘI BỘ TRÊN THIẾT BỊ CỦA BẠN</strong>:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Mật khẩu giọng nói (Voice Password):</strong> Khi bạn thiết lập hoặc sử dụng tính năng mở khóa bằng giọng nói, ứng dụng sử dụng công cụ nhận dạng giọng nói tích hợp của hệ điều hành Android (Android SpeechRecognizer API) để đối chiếu trực tiếp trên máy. Cụm từ khẩu lệnh nhận diện được mã hóa bằng thuật toán phần cứng AES/GCM sử dụng khóa bảo mật từ hệ thống Android KeyStore và chỉ lưu trong bộ nhớ riêng tư của ứng dụng. Chúng tôi <strong>tuyệt đối không ghi âm ngầm, không tạo bản sao và không gửi dữ liệu âm thanh giọng nói của bạn về bất kỳ máy chủ nào</strong>.
          </li>
          <li>
            <strong>Mã PIN &amp; Mẫu hình khóa (PIN &amp; Pattern):</strong> Mã PIN số (4 chữ số hoặc 6 chữ số) được mã hóa AES/GCM thông qua Android KeyStore. Mẫu hình vẽ được băm bảo mật (one-way cryptographic hash) bằng thuật toán SHA-256 kèm chuỗi muối ngẫu nhiên (salt). Cả hai phương thức chỉ được lưu trữ an toàn trong vùng nhớ cục bộ của thiết bị.
          </li>
          <li>
            <strong>Xác thực vân tay / Sinh trắc học (Fingerprint / Biometric):</strong> Tính năng mở khóa bằng vân tay hoạt động hoàn toàn qua API hệ thống tiêu chuẩn (Android BiometricPrompt). Dữ liệu sinh trắc học được quản lý độc quyền bởi phần cứng bảo mật của thiết bị (TEE/Secure Element). Ứng dụng chỉ tiếp nhận kết quả xác thực thành công hoặc thất bại từ hệ điều hành và hoàn toàn không có quyền truy cập, không quét và không lưu trữ bất kỳ dấu vân tay nào.
          </li>
          <li>
            <strong>Câu hỏi bảo mật (Security Questions):</strong> Câu hỏi và câu trả lời bảo mật dùng để khôi phục mật khẩu khi quên chỉ được lưu trữ cục bộ trên thiết bị của bạn, giúp bạn chủ động lấy lại quyền truy cập mà không cần thông qua tài khoản trung gian.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Quyền truy cập thiết bị (Device Permissions)</h2>
        <p className="mb-2">Để thực hiện các chức năng khóa và mở khóa màn hình bảo mật, ứng dụng yêu cầu các quyền truy cập sau:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Quyền Micro / Ghi âm (RECORD_AUDIO &amp; FOREGROUND_SERVICE_MICROPHONE):</strong> Cho phép ứng dụng ghi nhận khẩu lệnh khi bạn chạm vào biểu tượng micro để thiết lập hoặc đọc khẩu lệnh mở khóa. Quyền này chỉ kích hoạt khi bạn chủ động thao tác và dừng lại ngay sau khi hoàn tất phiên nhận diện.
          </li>
          <li>
            <strong>Quyền Trạng thái cuộc gọi (READ_PHONE_STATE):</strong> Giúp ứng dụng phát hiện khi có cuộc gọi đến để tạm ẩn giao diện khóa hoặc ưu tiên hiển thị màn hình nhận cuộc gọi, đảm bảo bạn không bị lỡ hoặc gián đoạn cuộc gọi điện thoại. Quyền này không được sử dụng để đọc danh bạ hay nhật ký cuộc gọi.
          </li>
          <li>
            <strong>Quyền Hiển thị trên các ứng dụng khác (SYSTEM_ALERT_WINDOW):</strong> Cho phép ứng dụng hiển thị giao diện khóa màn hình phủ lên trên các ứng dụng khác khi thiết bị bật màn hình, bảo vệ an toàn cho thiết bị trước khi truy cập vào hệ thống.
          </li>
          <li>
            <strong>Quyền Dịch vụ chạy nền &amp; Khởi động cùng hệ thống (FOREGROUND_SERVICE, RECEIVE_BOOT_COMPLETED, WAKE_LOCK):</strong> Giúp dịch vụ giám sát trạng thái màn hình (LockService) hoạt động ổn định và tự động kích hoạt chế độ bảo vệ ngay sau khi điện thoại được khởi động lại.
          </li>
          <li>
            <strong>Quyền Thông báo (POST_NOTIFICATIONS):</strong> Hiển thị thông báo trạng thái hoạt động liên tục của dịch vụ bảo vệ màn hình trên thanh trạng thái (theo yêu cầu hệ điều hành Android đối với Dịch vụ tiền cảnh) và thông báo nhắc nhở tiện ích.
          </li>
          <li>
            <strong>Quyền Sinh trắc học (USE_BIOMETRIC / USE_FINGERPRINT):</strong> Cho phép xác thực mở khóa nhanh thông qua cảm biến vân tay của thiết bị.
          </li>
          <li>
            <strong>Quyền Rung (VIBRATE):</strong> Cung cấp phản hồi xúc giác khi bấm phím số hoặc khi mở khóa thành công / thất bại.
          </li>
          <li>
            <strong>Quyền Kết nối mạng (INTERNET &amp; ACCESS_NETWORK_STATE):</strong> Cần thiết để hiển thị quảng cáo, kết nối dịch vụ Google Play Billing (nâng cấp gói Premium) và ghi nhận báo cáo lỗi kỹ thuật ẩn danh.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Dịch vụ bên thứ ba &amp; Quảng cáo</h2>
        <p className="mb-2">Ứng dụng sử dụng một số dịch vụ kỹ thuật tiêu chuẩn từ các nhà cung cấp uy tín:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Google Play Services &amp; Google Play Billing:</strong> Cung cấp hạ tầng dịch vụ Android và xử lý giao dịch mua gói cao cấp (Premium) an toàn.</li>
          <li><strong>Google AdMob:</strong> Hiển thị quảng cáo (biểu ngữ, xen kẽ, tương tác) nhằm duy trì cung cấp ứng dụng miễn phí cho người dùng.</li>
          <li><strong>Firebase Crashlytics &amp; Firebase Analytics:</strong> Ghi nhận báo cáo lỗi sự cố kỹ thuật và dữ liệu thống kê ẩn danh nhằm phân tích hiệu năng, cải thiện độ mượt và tăng cường độ ổn định của ứng dụng trên các dòng thiết bị.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Chính sách của các dịch vụ bên thứ ba này tuân thủ <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chính sách Quyền riêng tư của Google</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Bảo mật dữ liệu &amp; Quyền kiểm soát của người dùng</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi áp dụng các tiêu chuẩn mã hóa phần cứng an toàn (Android KeyStore AES-GCM / SHA-256) để bảo vệ toàn vẹn thông tin mở khóa trên máy của bạn. Chúng tôi cam kết <strong>không bán, không trao đổi và không chia sẻ</strong> bất kỳ dữ liệu cá nhân nào của bạn với bất kỳ bên thứ ba nào.
        </p>
        <p className="mb-4 leading-relaxed">
          Bạn có toàn quyền thay đổi hoặc xóa bỏ mật khẩu giọng nói, mã PIN, mẫu hình và câu hỏi bảo mật bất kỳ lúc nào trực tiếp trong menu Cài đặt của Ứng dụng. Khi bạn gỡ cài đặt Ứng dụng, toàn bộ dữ liệu cấu hình và khóa bảo mật lưu trữ cục bộ sẽ tự động bị xóa hoàn toàn khỏi bộ nhớ thiết bị.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Quyền riêng tư của trẻ em (COPPA)</h2>
        <p className="mb-4 leading-relaxed">
          Ứng dụng của chúng tôi không hướng tới đối tượng trẻ em dưới 13 tuổi (hoặc độ tuổi giới hạn tương ứng theo luật định của từng quốc gia). Chúng tôi không cố ý thu thập bất kỳ thông tin nhận dạng cá nhân nào từ trẻ em. Nếu chúng tôi phát hiện bất kỳ dữ liệu cá nhân nào từ trẻ em dưới 13 tuổi được lưu giữ ngoài ý muốn, chúng tôi sẽ tiến hành xóa bỏ ngay lập tức.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Thay đổi đối với Chính sách này</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này theo thời gian nhằm phản ánh các thay đổi trong tính năng ứng dụng hoặc tuân thủ các quy định pháp luật hiện hành. Mọi sửa đổi sẽ có hiệu lực ngay khi được đăng tải trên trang này. Bạn nên định kỳ xem lại Chính sách để cập nhật các biện pháp bảo vệ quyền riêng tư mới nhất.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Liên hệ</h2>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc đề xuất nào liên quan đến Chính sách Quyền riêng tư này, vui lòng liên hệ với chúng tôi:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Đơn vị:</strong> CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</li>
          <li><strong>Địa chỉ:</strong> Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</li>
          <li><strong>Email:</strong> <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a></li>
          <li><strong>Website:</strong> <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a></li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12 border-t pt-4">
        &copy; {new Date().getFullYear()} CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicyVoiceLockScreen;
