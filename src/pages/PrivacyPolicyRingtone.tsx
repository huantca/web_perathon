import React from 'react';

const PrivacyPolicyRingtone: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
        Chính sách quyền riêng tư
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
        <p className="mb-4 leading-relaxed">
          Chính sách Quyền riêng tư này (“Chính sách”) được áp dụng cho ứng dụng trình duyệt di động <strong>Ringtone &amp; Download Music 2026</strong> trên Google Play Store và Apple App Store (“Ứng dụng”).
        </p>
        <p className="mb-4 leading-relaxed">
          Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ văn bản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “ứng dụng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Ringtone &amp; Download Music 2026</strong> là ứng dụng di động tốc độ cao, chú trọng bảo mật tối đa quyền riêng tư của người dùng, hỗ trợ chế độ duyệt web ẩn danh (Incognito Mode), chặn quảng cáo làm phiền (AdBlock), quản lý dấu trang (bookmarks) và hỗ trợ tải tệp nhanh chóng.
        </p>
        <p className="mb-4 leading-relaxed">
          Chúng tôi coi trọng việc bảo vệ dữ liệu cá nhân của bạn. Bằng việc tải về và sử dụng Ứng dụng, bạn đồng ý với các nguyên tắc bảo mật được nêu trong văn bản này.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Cam kết bảo mật &amp; Dữ liệu duyệt web (No-Log Policy)</h2>
        <p className="mb-4 leading-relaxed">
          Nguyên tắc cốt lõi của <strong>Ringtone &amp; Download Music 2026</strong> là <strong>KHÔNG THEO DÕI VÀ KHÔNG LƯU TRỮ LỊCH SỬ DUYỆT WEB CỦA BẠN TRÊN MÁY CHỦ</strong>:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Lịch sử duyệt web &amp; Dấu trang:</strong> Toàn bộ lịch sử duyệt web, cookie trang web và dấu trang (bookmarks) chỉ được lưu trữ cục bộ trực tiếp trên bộ nhớ thiết bị của bạn. Chúng tôi không thu thập hoặc tải các thông tin này lên bất kỳ máy chủ nào.
          </li>
          <li>
            <strong>Chế độ ẩn danh (Incognito Mode):</strong> Khi bật chế độ duyệt web riêng tư, toàn bộ cookie, bộ nhớ cache và lịch sử trang web sẽ tự động bị xóa sạch ngay sau khi bạn đóng tab hoặc thoát ứng dụng.
          </li>
          <li>
            <strong>Tìm kiếm riêng tư:</strong> Từ khóa tìm kiếm của bạn được gửi trực tiếp đến công cụ tìm kiếm bạn lựa chọn (như Google, Bing, DuckDuckGo) mà không bị trung gian bởi máy chủ của chúng tôi.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Quyền truy cập thiết bị (Device Permissions)</h2>
        <p className="mb-2">Để thực hiện các chức năng cơ bản của một trình duyệt web hiện đại, ứng dụng có thể yêu cầu:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Quyền lưu trữ / Quản lý tải xuống (WRITE_EXTERNAL_STORAGE / READ_MEDIA):</strong> Cho phép bạn tải tệp tin, hình ảnh, tài liệu từ internet về thư mục Tải xuống (Download) của máy.
          </li>
          <li>
            <strong>Quyền kết nối mạng (INTERNET / ACCESS_NETWORK_STATE):</strong> Kết nối mạng internet để tải và hiển thị các trang web.
          </li>
          <li>
            <strong>Quyền thông báo (POST_NOTIFICATIONS):</strong> Hiển thị trạng thái tiến trình tải tệp xuống trên thanh thông báo.
          </li>
          <li>
            <strong>Quyền Camera / Micro (Chỉ khi được bạn cho phép):</strong> Chỉ kích hoạt khi bạn truy cập một trang web cụ thể có tính năng gọi video hoặc quét mã QR và trang web đó yêu cầu quyền, đồng thời bạn xác nhận đồng ý tại hộp thoại của hệ thống.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Dịch vụ bên thứ ba &amp; Quảng cáo</h2>
        <p className="mb-2">Ứng dụng có thể sử dụng một số dịch vụ kỹ thuật tiêu chuẩn:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Google Play Services:</strong> Cung cấp dịch vụ nền tảng Android.</li>
          <li><strong>Google AdMob:</strong> Hiển thị quảng cáo nhằm duy trì hoạt động miễn phí của trình duyệt.</li>
          <li><strong>Firebase Crashlytics:</strong> Ghi nhận báo cáo lỗi sự cố kỹ thuật ẩn danh nhằm cải thiện độ mượt và tốc độ tải trang.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Chính sách của các dịch vụ này tuân thủ <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chính sách Quyền riêng tư của Google</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Các trang web bên thứ ba bạn truy cập</h2>
        <p className="mb-4 leading-relaxed">
          Khi bạn duyệt web qua Ringtone &amp; Download Music 2026, bạn có thể truy cập vào các trang web của bên thứ ba. Các trang web này có chính sách quyền riêng tư và điều khoản sử dụng riêng. Perathon không chịu trách nhiệm về nội dung hoặc chính sách thu thập dữ liệu của các trang web bên thứ ba mà bạn truy cập.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Bảo mật &amp; Quyền của người dùng</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi áp dụng các tiêu chuẩn mã hóa đường truyền HTTPS để bảo vệ kết nối. Chúng tôi cam kết <strong>không bán hoặc chia sẻ</strong> bất kỳ dữ liệu cá nhân nào của bạn.
        </p>
        <p className="mb-4 leading-relaxed">
          Bạn có thể xóa toàn bộ dữ liệu duyệt web, bộ nhớ cache và cookie bất cứ lúc nào thông qua menu Cài đặt của trình duyệt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Quyền riêng tư trẻ em (COPPA)</h2>
        <p className="mb-4 leading-relaxed">
          Ứng dụng tuân thủ các quy định bảo vệ trẻ em và không cố ý thu thập bất kỳ thông tin cá nhân nào từ trẻ em dưới 13 tuổi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Liên hệ</h2>
        <p className="mb-4 leading-relaxed">
          Nếu có câu hỏi hoặc đề xuất liên quan đến quyền riêng tư, vui lòng liên hệ:
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

export default PrivacyPolicyRingtone;
