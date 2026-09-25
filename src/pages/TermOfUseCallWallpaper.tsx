import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const TermOfUseCallWallpaper: React.FC = () => {
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

  const getPrivacyLink = () => {
    const path = location.pathname;
    if (path.includes('call-screen-ringtone')) return `/privacy-policy-call-screen-ringtone?lang=${language}`;
    if (path.includes('call-screen')) return `/privacy-policy-call-screen?lang=${language}`;
    if (path.includes('call-wallpaper')) return `/privacy-policy-call-wallpaper?lang=${language}`;
    if (path.includes('custom-ringtones-call-theme')) return `/privacy-policy-custom-ringtones-call-theme?lang=${language}`;
    return `/privacy-policy-call-wallpaper?lang=${language}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      {/* Top Bar / Language Selector & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Link
            to={getPrivacyLink()}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {language === 'vi' ? '← Xem Chính sách quyền riêng tư' : '← View Privacy Policy'}
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
            Điều khoản và Điều kiện sử dụng
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
            <p className="mb-4 leading-relaxed">
              Các Điều khoản và Điều kiện Sử dụng này (“Điều khoản”) được áp dụng cho ứng dụng di động <strong>Call Wallpaper</strong> trên Google Play Store và các kho ứng dụng khác (“Ứng dụng”).
            </p>
            <p className="mb-4 leading-relaxed">
              Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ Điều khoản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “ứng dụng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> cung cấp giải pháp cá nhân hóa giao diện cuộc gọi (Call Themes &amp; Wallpapers), tùy biến nút cuộc gọi, viền đèn LED phát sáng chạy quanh màn hình (LED Border / Edge Lighting), cảnh báo đèn flash camera khi có cuộc gọi (Flash Alert), kho nhạc chuông đa dạng, bàn phím quay số thông minh kèm quản lý danh bạ, và hệ thống sàng lọc cuộc gọi rác (Call Screening) theo danh sách đen, danh sách trắng và biểu thức chính quy (Regex).
            </p>
            <p className="mb-4 leading-relaxed">
              Bằng việc tải về, cài đặt, mở hoặc sử dụng Ứng dụng dưới bất kỳ hình thức nào, bạn xác nhận rằng mình đã đọc, hiểu và đồng ý chịu sự ràng buộc bởi các Điều khoản này cùng với Chính sách Quyền riêng tư của chúng tôi.
            </p>
            <p className="mb-4 leading-relaxed">
              Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Thỏa thuận pháp lý ràng buộc</h2>
            <p className="mb-4 leading-relaxed">
              Các Điều khoản này tạo thành một thỏa thuận pháp lý có giá trị ràng buộc giữa bạn và Perathon. Nếu bạn không đồng ý với bất kỳ nội dung nào trong Điều khoản này, vui lòng không cài đặt hoặc tiến hành gỡ bỏ và ngừng sử dụng Ứng dụng ngay lập tức.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Quy định từ kho ứng dụng bên thứ ba</h2>
            <p className="mb-4 leading-relaxed">
              Bạn thừa nhận rằng các Điều khoản này được xác lập độc quyền giữa bạn và Perathon, không phải giữa bạn với Google LLC hay Apple Inc.
            </p>
            <p className="mb-2">Khi tải Ứng dụng từ Google Play Store, bạn hiểu và đồng ý rằng:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google không có nghĩa vụ cung cấp bất kỳ dịch vụ bảo trì hay hỗ trợ kỹ thuật nào liên quan đến Ứng dụng;</li>
              <li>Mọi giao dịch nâng cấp gói VIP/không quảng cáo trong ứng dụng phải tuân thủ Điều khoản Dịch vụ của Google Play (Google Play Terms of Service);</li>
              <li>Trong phạm vi tối đa được pháp luật cho phép, Google không chịu trách nhiệm pháp lý đối với bất kỳ khiếu nại hay tổn thất nào liên quan đến việc vận hành Ứng dụng.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Mục đích sử dụng được phép &amp; Quy định nội dung</h2>
            <p className="mb-4 leading-relaxed">
              Bạn được cấp quyền sử dụng cá nhân, phi thương mại, có thể thu hồi, không độc quyền và không thể chuyển nhượng đối với Ứng dụng.
            </p>
            <p className="mb-2">Khi sử dụng Ứng dụng, bạn cam kết tuân thủ các quy tắc sau:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Nội dung do người dùng tự tải lên:</strong> Khi bạn chọn ảnh, video cá nhân từ thiết bị làm hình nền cuộc gọi hoặc gán cho từng liên hệ, bạn phải đảm bảo mình có quyền hợp pháp sử dụng hình ảnh đó. Nghiêm cấm sử dụng các hình ảnh khiêu dâm, bạo lực, xúc phạm danh dự nhân phẩm hoặc vi phạm pháp luật hiện hành.
              </li>
              <li>
                <strong>Sử dụng nhạc chuông và hình nền từ kho ứng dụng:</strong> Các tài nguyên âm thanh, hình ảnh và video mẫu trong thư viện ứng dụng được cung cấp nhằm mục đích cá nhân hóa thiết bị cá nhân của bạn. Bạn <strong>không được phép</strong> sao chép, trích xuất để bán lại hoặc phân phối thương mại khi chưa có sự đồng ý bằng văn bản từ chủ sở hữu.
              </li>
              <li>
                <strong>Bảo vệ an ninh phần mềm:</strong> Nghiêm cấm dịch ngược mã nguồn (reverse engineering), can thiệp sửa đổi các tệp nhị phân, hoặc sử dụng công cụ tự động để quét dữ liệu từ máy chủ ứng dụng.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Dịch vụ viễn thông &amp; Đặc thù kỹ thuật thiết bị</h2>
            <p className="mb-4 leading-relaxed">
              <strong>Vai trò Trình sàng lọc cuộc gọi (Default Call Screener):</strong> Ứng dụng tích hợp dịch vụ sàng lọc cuộc gọi hệ điều hành Android (Telecom <code>CallScreeningService</code>). Tính năng này hoạt động dựa trên các quy tắc lọc (Danh sách đen, Danh sách trắng, Mẫu Regex) do người dùng chủ động cấu hình trên máy. Bạn có thể bật, tắt quyền này hoặc điều chỉnh hành động mặc định trong cài đặt ứng dụng hoặc Cài đặt Ứng dụng mặc định của hệ điều hành.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Vai trò Trình quay số cuộc gọi (InCallService / Default Dialer):</strong> Khi bạn chọn ứng dụng làm Trình gọi điện mặc định, ứng dụng sẽ cung cấp bàn phím quay số, lịch sử cuộc gọi và giao diện đàm thoại (ScreenCallActivity). Bạn có thể hoàn nguyên về ứng dụng quay số gốc của điện thoại bất kỳ lúc nào trong Cài đặt hệ thống.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Hiển thị trên màn hình khóa &amp; Tương thích thiết bị (Xiaomi, Redmi, HyperOS/MIUI, Samsung, v.v.):</strong> Để giao diện cuộc gọi tùy biến và hiệu ứng viền LED hiển thị tức thời khi có cuộc gọi đến, ứng dụng yêu cầu quyền hiển thị trên màn hình khóa và cửa sổ bật lên. Trên một số thiết bị tùy biến hệ điều hành (như Xiaomi, Redmi, Poco), người dùng cần cấp quyền <em>“Hiển thị trên màn hình khóa”</em> và <em>“Hiển thị cửa sổ pop-up khi chạy ngầm”</em>, đồng thời bật <em>Tự khởi chạy (Auto-start)</em> và tắt chế độ tiết kiệm pin nghiêm ngặt theo hướng dẫn trong ứng dụng.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Quy định về cuộc gọi khẩn cấp</h2>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> không can thiệp, không ngăn chặn và không làm gián đoạn khả năng thực hiện cuộc gọi khẩn cấp của bạn. Các cuộc gọi đến các số dịch vụ khẩn cấp (như 112, 113, 114, 115, 911 hoặc số khẩn cấp của quốc gia bạn) sẽ luôn được hệ thống viễn thông di động của thiết bị ưu tiên kết nối trực tiếp thông qua hạ tầng mạng gốc của nhà mạng mà không chịu bất kỳ sự sàng lọc hay chặn lọc nào từ ứng dụng.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Quyền sở hữu trí tuệ &amp; Khiếu nại bản quyền (DMCA)</h2>
            <p className="mb-4 leading-relaxed">
              Mã nguồn, logo thương hiệu, giao diện người dùng (UI/UX), đồ họa và thiết kế độc quyền của Ứng dụng là tài sản trí tuệ được bảo hộ thuộc quyền sở hữu của CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON hoặc được cấp phép hợp pháp.
            </p>
            <p className="mb-4 leading-relaxed">
              Các đoạn nhạc chuông và hình ảnh trong kho trực tuyến được tuyển chọn từ các nguồn miễn phí bản quyền (Creative Commons, Public Domain) hoặc được sáng tác bởi đội ngũ Perathon. Nếu bạn là chủ sở hữu bản quyền và cho rằng có nội dung vi phạm quyền sở hữu trí tuệ của mình, vui lòng gửi thông báo kèm bằng chứng tới email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>. Chúng tôi sẽ xử lý gỡ bỏ ngay lập tức theo quy định.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Mua sắm trong ứng dụng (IAP), Gói VIP &amp; Quảng cáo</h2>
            <p className="mb-4 leading-relaxed">
              Ứng dụng được cung cấp miễn phí kèm quảng cáo của đối tác (Google AdMob), kèm theo tùy chọn nâng cấp gói trả phí VIP / Premium:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Quyền lợi gói VIP:</strong> Loại bỏ hoàn toàn quảng cáo, mở khóa toàn bộ kho chủ đề cuộc gọi video độc quyền, kho nhạc chuông không giới hạn và các tùy biến viền LED cao cấp.
              </li>
              <li>
                <strong>Quản lý thanh toán &amp; Hủy gói:</strong> Các giao dịch được xử lý an toàn thông qua Google Play Billing. Bạn có thể quản lý hoặc hủy bỏ việc gia hạn gói thuê bao bất kỳ lúc nào trong mục Quản lý Gói đăng ký trên Google Play Store ít nhất 24 giờ trước khi chu kỳ gia hạn kết thúc.
              </li>
              <li>
                <strong>Chính sách hoàn tiền:</strong> Mọi yêu cầu hoàn tiền được áp dụng và giải quyết theo đúng chính sách hoàn tiền chính thức của Google Play.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">9. Tuyên bố miễn trừ trách nhiệm</h2>
            <p className="mb-4 leading-relaxed">
              Ứng dụng được cung cấp trên cơ sở <strong>“NGUYÊN TRẠNG” (AS IS)</strong> và <strong>“SẴN CÓ” (AS AVAILABLE)</strong>.
            </p>
            <p className="mb-4 leading-relaxed">
              Mặc dù chúng tôi luôn nỗ lực tối ưu phần mềm, Perathon không đảm bảo rằng:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ứng dụng sẽ hoạt động không gián đoạn hoặc không có lỗi trên tất cả các phiên bản Android tùy biến của các nhà sản xuất phần cứng khác nhau;</li>
              <li>Mọi cuộc gọi spam đều sẽ bị chặn 100% nếu số gọi đến thay đổi định dạng bất thường hoặc không khớp với các quy tắc do bạn thiết lập;</li>
              <li>Đèn flash hoặc viền LED sẽ luôn hoạt động nếu thiết bị của bạn bị giới hạn phần cứng hoặc bị hạn chế bởi chế độ siêu tiết kiệm pin của nhà sản xuất.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">10. Giới hạn trách nhiệm</h2>
            <p className="mb-4 leading-relaxed">
              Trong phạm vi tối đa được pháp luật quy định, Perathon cùng các cán bộ, nhân viên không chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc do hậu quả phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Ứng dụng. Tổng trách nhiệm tài chính của Perathon cho mọi khiếu nại liên quan sẽ không vượt quá số tiền bạn đã thanh toán cho ứng dụng trong mười hai (12) tháng gần nhất.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">11. Bồi thường</h2>
            <p className="mb-4 leading-relaxed">
              Bạn đồng ý bảo vệ, bồi thường và giữ cho Perathon, các cán bộ và nhân viên của chúng tôi không bị tổn hại trước bất kỳ khiếu nại, trách nhiệm, tổn thất hay chi phí pháp lý nào phát sinh từ việc bạn vi phạm Điều khoản này hoặc vi phạm quyền của bất kỳ bên thứ ba nào.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">12. Thay đổi Điều khoản</h2>
            <p className="mb-4 leading-relaxed">
              Chúng tôi bảo lưu quyền cập nhật hoặc điều chỉnh các Điều khoản này bất kỳ lúc nào. Các sửa đổi sẽ có hiệu lực ngay khi được công bố trên trang web này. Việc bạn tiếp tục sử dụng Ứng dụng sau thời điểm sửa đổi đồng nghĩa với việc bạn đồng ý với các Điều khoản cập nhật.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">13. Luật điều chỉnh &amp; Giải quyết tranh chấp</h2>
            <p className="mb-4 leading-relaxed">
              Các Điều khoản này được điều chỉnh và diễn giải theo pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến thỏa thuận này trước tiên sẽ được giải quyết thông qua thương lượng thiện chí. Nếu không đạt được sự thống nhất, tranh chấp sẽ được giải quyết bởi tòa án có thẩm quyền tại Việt Nam.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">14. Thông tin liên hệ</h2>
            <p className="mb-4 leading-relaxed">
              Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu hỗ trợ nào về Điều khoản Sử dụng này, vui lòng liên hệ:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Đơn vị chủ quản:</strong> CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</li>
              <li><strong>Địa chỉ:</strong> Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</li>
              <li><strong>Email hỗ trợ:</strong> <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a></li>
              <li><strong>Website chính thức:</strong> <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a></li>
            </ul>
          </section>
        </div>
      ) : (
        /* ENGLISH CONTENT */
        <div>
          <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
            Terms of Use
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              These Terms and Conditions of Use (“Terms”) govern your access to and use of the mobile application <strong>Call Wallpaper</strong> on the Google Play Store and other mobile distribution channels (“Application”).
            </p>
            <p className="mb-4 leading-relaxed">
              The Application is owned and operated by <strong>PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED</strong> (registered in Vietnam as <em>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</em>), located at <strong>No. 94, Alley 77, Vo Nguyen Giap Road, Village 1, Son Dong Commune, Bac Ninh Province, Vietnam</strong>. Throughout these Terms, “Perathon”, “we”, “our”, or “us” refers to PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> provides rich incoming and active call theme customization (Call Screen Wallpapers), custom answer/decline button packs, animated edge lighting effects (LED Border), blinking camera flashlight alerts (Flash Alert), curated ringtones, a smart dialpad with contact management, and intelligent spam call screening (CallScreeningService) powered by user-configured whitelists, blacklists, and regular expressions (Regex).
            </p>
            <p className="mb-4 leading-relaxed">
              By downloading, installing, launching, or using the Application in any manner, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and our Privacy Policy.
            </p>
            <p className="mb-4 leading-relaxed">
              If you have any questions, please reach out to us at: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Legally Binding Agreement</h2>
            <p className="mb-4 leading-relaxed">
              These Terms constitute a valid and legally binding contract between you and Perathon. If you disagree with any portion of these Terms, you must refrain from installing the Application or immediately uninstall and cease all use of it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Third-Party App Store Regulations</h2>
            <p className="mb-4 leading-relaxed">
              You acknowledge that these Terms are entered into solely between you and Perathon, not with Google LLC or Apple Inc.
            </p>
            <p className="mb-2">When downloading the Application via Google Play Store, you agree that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google has no obligation whatsoever to furnish maintenance or technical support services regarding the Application;</li>
              <li>All in-app purchases and VIP subscriptions are governed by the Google Play Terms of Service;</li>
              <li>To the maximum extent permitted by applicable law, Google disclaims all warranty and liability obligations regarding the Application.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Permitted Use &amp; User Content Standards</h2>
            <p className="mb-4 leading-relaxed">
              You are granted a personal, non-commercial, revocable, non-exclusive, and non-transferable license to install and use the Application on your personal device.
            </p>
            <p className="mb-2">When using the Application, you agree to adhere strictly to the following standards:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>User-Imported Media:</strong> When selecting personal photos, videos, or local audio files as caller wallpapers or ringtones, you must have the necessary legal ownership or rights to use such content. You must not import defamatory, sexually explicit, violent, infringing, or otherwise unlawful material.
              </li>
              <li>
                <strong>Library Content:</strong> Audio files, wallpapers, button graphics, and themes made available through the application catalog are intended exclusively for your personal device customization. You may not extract, resell, sublicense, or redistribute these assets commercially without express written consent.
              </li>
              <li>
                <strong>Software Integrity:</strong> You must not reverse engineer, decompile, disassemble, or tamper with the Application binary or its underlying communications protocols.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Telecom Services &amp; Device Technical Specifications</h2>
            <p className="mb-4 leading-relaxed">
              <strong>Default Call Screener Role (CallScreeningService):</strong> The Application incorporates Android Telecom <code>CallScreeningService</code> to evaluate incoming calls against user-defined rules (Whitelist, Blacklist, Regex filters). The screening decision (Allow, Silence, or Reject) is executed on-device. You can enable or disable this role at any time via in-app settings or system Default Apps settings.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Default Phone Dialer Role (InCallService):</strong> If selected as your Default Phone App, the Application delivers in-call telephony screens, dialpad, and call management. You may switch back to your device's pre-installed phone dialer at any time via Android settings.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Lock Screen Display &amp; OEM Compatibility (Xiaomi, Redmi, HyperOS/MIUI, Samsung, etc.):</strong> Displaying full-screen caller themes and edge lighting when your phone is locked requires permission to show on the lock screen and display over other applications. On customized Android skins (e.g. Xiaomi MIUI/HyperOS), users must enable <em>“Show on Lock screen”</em> and <em>“Display pop-up windows in background”</em>, enable <em>Auto-start</em>, and disable aggressive battery restrictions to guarantee real-time call screen activation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Emergency Calling Disclaimer</h2>
            <p className="mb-4 leading-relaxed">
              <strong>Call Wallpaper</strong> does not restrict, block, or interfere with emergency calls. Calls to standard emergency services (such as 911, 112, 113, 114, 115 or local emergency numbers) are always routed directly through your cellular network provider's native telephony system without being intercepted or blocked by our screening engine.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Intellectual Property &amp; Copyright Notice (DMCA)</h2>
            <p className="mb-4 leading-relaxed">
              All proprietary source code, software logic, UI/UX designs, trademarks, and artwork are the intellectual property of PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED or its licensors.
            </p>
            <p className="mb-4 leading-relaxed">
              Public library themes and sound effects are obtained from Creative Commons, Public Domain archives, or produced in-house. If you believe any content in the Application infringes upon your copyright, please contact us with proof of ownership at: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>. We will take prompt remedial action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. In-App Purchases, VIP Subscriptions &amp; Ads</h2>
            <p className="mb-4 leading-relaxed">
              The Application may be offered as a free download supported by third-party ads (Google AdMob), alongside optional VIP / Premium subscription options:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>VIP Privileges:</strong> Ad-free experience, unlimited access to exclusive video call themes, premium ringtone vault, and all customizable LED edge borders.
              </li>
              <li>
                <strong>Billing &amp; Cancellations:</strong> Subscriptions are managed and billed through Google Play Billing. You can cancel auto-renewal anytime in Google Play Store Subscriptions at least 24 hours prior to the next billing cycle.
              </li>
              <li>
                <strong>Refunds:</strong> Refund requests are governed by Google Play Store's official refund policy.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">9. Disclaimer of Warranties</h2>
            <p className="mb-4 leading-relaxed">
              The Application is provided on an <strong>“AS IS”</strong> and <strong>“AS AVAILABLE”</strong> basis without warranties of any kind, whether express or implied.
            </p>
            <p className="mb-4 leading-relaxed">
              Perathon does not warrant that the Application will operate error-free across all OEM Android custom ROMs, that all nuisance callers will be identified without user-defined rules, or that hardware features like the camera flashlight will activate if restricted by device power saving modes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">10. Limitation of Liability</h2>
            <p className="mb-4 leading-relaxed">
              To the fullest extent permitted by applicable law, Perathon and its officers, directors, and employees shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the Application. Our cumulative liability for all claims shall not exceed the amounts paid by you for the Application during the twelve (12) months preceding the incident.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">11. Indemnification</h2>
            <p className="mb-4 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Perathon and its personnel against any claims, damages, losses, or legal costs arising out of your violation of these Terms or infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">12. Modifications to Terms</h2>
            <p className="mb-4 leading-relaxed">
              We reserve the right to revise or update these Terms at any time. Any changes will become effective immediately upon publication on this page. Your continued use of the Application signifies acceptance of the amended Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">13. Governing Law &amp; Dispute Resolution</h2>
            <p className="mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Socialist Republic of Vietnam. Any disputes arising from or in connection with these Terms shall initially be resolved through amicable negotiation. If unresolved, the matter shall be submitted to competent courts in Vietnam.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">14. Contact Information</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions or feedback regarding these Terms of Use, please feel free to reach out to us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Entity:</strong> PERATHON TECHNOLOGY AND SERVICE COMPANY LIMITED</li>
              <li><strong>Address:</strong> No. 94, Alley 77, Vo Nguyen Giap Road, Village 1, Son Dong Commune, Bac Ninh Province, Vietnam</li>
              <li><strong>Email:</strong> <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a></li>
              <li><strong>Website:</strong> <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a></li>
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

export default TermOfUseCallWallpaper;
