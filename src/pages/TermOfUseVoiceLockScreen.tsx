import React from 'react';

const TermOfUseVoiceLockScreen: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
        Điều khoản và Điều kiện
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
        <p className="mb-4 leading-relaxed">
          Các Điều khoản và Điều kiện này (“Điều khoản”) được áp dụng cho ứng dụng di động <strong>Voice Lock Screen: Phone Lock</strong> trên Google Play Store và Apple App Store (“Ứng dụng”).
        </p>
        <p className="mb-4 leading-relaxed">
          Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ Điều khoản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “ứng dụng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Voice Lock Screen: Phone Lock</strong> là ứng dụng thông minh cung cấp giải pháp khóa và bảo vệ màn hình thiết bị di động bằng khẩu lệnh giọng nói, mã số PIN, mẫu hình (pattern), cảm biến vân tay sinh trắc học, kết hợp hệ thống câu hỏi bảo mật khôi phục và kho chủ đề hình nền khóa màn hình cá nhân hóa.
        </p>
        <p className="mb-4 leading-relaxed">
          Bằng việc cài đặt, sao chép hoặc sử dụng Ứng dụng dưới bất kỳ hình thức nào, bạn xác nhận rằng mình đã đọc, hiểu và đồng ý chịu sự ràng buộc bởi các Điều khoản này, bao gồm cả Chính sách Quyền riêng tư của chúng tôi.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Thỏa thuận pháp lý ràng buộc</h2>
        <p className="mb-4 leading-relaxed">
          Các Điều khoản Sử dụng này tạo thành một thỏa thuận pháp lý có giá trị ràng buộc giữa bạn và Perathon. Nếu bạn không đồng ý với bất kỳ nội dung nào trong Điều khoản này, vui lòng không cài đặt hoặc tiến hành gỡ cài đặt và ngừng sử dụng Ứng dụng ngay lập tức.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Quy định từ kho ứng dụng bên thứ ba</h2>
        <p className="mb-4 leading-relaxed">
          Bạn thừa nhận rằng các Điều khoản này được thỏa thuận độc quyền giữa bạn và Perathon, không phải giữa bạn với Google LLC hay Apple Inc.
        </p>
        <p className="mb-2">Khi tải về từ Google Play hoặc Apple App Store, bạn đồng ý rằng:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Các nhà điều hành kho ứng dụng không chịu trách nhiệm cung cấp dịch vụ bảo hành, bảo trì hoặc hỗ trợ kỹ thuật trực tiếp cho Ứng dụng;</li>
          <li>Mọi giao dịch mua hàng, gia hạn hoặc yêu cầu hoàn tiền liên quan đến ứng dụng phải tuân thủ Điều khoản Dịch vụ và chính sách của kho ứng dụng tương ứng (Google Play Terms of Service hoặc Apple Media Services Terms).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Mục đích sử dụng được phép &amp; Trách nhiệm của người dùng</h2>
        <p className="mb-4 leading-relaxed">
          Bạn được cấp quyền sử dụng cá nhân, phi thương mại, có thể thu hồi và không thể chuyển nhượng đối với Ứng dụng.
        </p>
        <p className="mb-2">Bạn cam kết và tự chịu trách nhiệm đối với các nội dung sau:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Bảo quản phương thức mở khóa:</strong> Bạn có trách nhiệm tự ghi nhớ khẩu lệnh giọng nói, mã số PIN, mẫu hình vẽ và câu trả lời bảo mật mà mình đã thiết lập.
          </li>
          <li>
            <strong>Thiết lập phương thức dự phòng:</strong> Tính năng nhận diện giọng nói có thể bị ảnh hưởng bởi môi trường có nhiều tiếng ồn, chất lượng microphone hoặc sự thay đổi trong giọng nói của bạn (ví dụ khi bị ốm, khàn tiếng). Do đó, bạn có trách nhiệm luôn kích hoạt và ghi nhớ mã PIN dự phòng hoặc câu hỏi bảo mật để mở khóa thiết bị khi cần.
          </li>
          <li>
            <strong>Miễn trừ trách nhiệm quên mật mã:</strong> Perathon không lưu giữ mật mã hoặc dữ liệu giải mã trên máy chủ; do đó chúng tôi không thể can thiệp từ xa để mở khóa thiết bị nếu bạn quên đồng thời cả khẩu lệnh, mã PIN và câu hỏi bảo mật.
          </li>
          <li>
            <strong>Không can thiệp trái phép:</strong> Không sử dụng Ứng dụng vào các mục đích phi pháp, không cài đặt trái phép lên thiết bị của người khác nhằm mục đích kiểm soát khi chưa có sự đồng ý;
          </li>
          <li>
            <strong>Bảo vệ mã nguồn:</strong> Không sao chép, sửa đổi, dịch ngược (reverse engineer), tháo rời (decompile) hoặc can thiệp vào mã nguồn và cấu trúc phần mềm của Ứng dụng.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Tính chất của ứng dụng khóa màn hình &amp; Cài đặt thiết bị</h2>
        <p className="mb-4 leading-relaxed">
          <strong>Cơ chế bảo vệ màn hình:</strong> Voice Lock Screen: Phone Lock hoạt động dựa trên cơ chế lớp phủ hiển thị trên các ứng dụng khác (Display Over Other Apps) và dịch vụ giám sát hệ thống (Foreground LockService). Ứng dụng cung cấp giải pháp khóa tiện ích và tăng cường cá nhân hóa trải nghiệm người dùng, nhưng không thay thế hoàn toàn cơ chế mã hóa cấp phần cứng (Hardware-level Disk Encryption) mặc định của hệ điều hành.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Tùy chọn Khóa hệ thống (System Lock):</strong> Để tránh việc phải mở khóa hai lần liên tiếp (một lần bởi ứng dụng và một lần bởi màn hình khóa mặc định của điện thoại), ứng dụng có thể cung cấp lối tắt hướng dẫn bạn tắt màn hình khóa mặc định trong Cài đặt máy. Quyết định tắt hoặc giữ khóa hệ thống hoàn toàn thuộc về bạn.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Quyền Tự khởi động (Auto-Start):</strong> Trên một số dòng máy sử dụng hệ điều hành tùy biến (như Xiaomi, Oppo, Vivo, Huawei), người dùng cần chủ động cho phép quyền tự khởi động (Auto-start) và tắt chế độ tiết kiệm pin nghiêm ngặt cho ứng dụng để tránh việc dịch vụ khóa bị hệ thống tự động tắt trong nền.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Quyền sở hữu trí tuệ</h2>
        <p className="mb-4 leading-relaxed">
          Toàn bộ giao diện người dùng (UI/UX), đồ họa, biểu tượng, hình nền chủ đề (themes), âm thanh, nhãn hiệu thương mại và mã nguồn của Ứng dụng đều là tài sản trí tuệ độc quyền thuộc quyền sở hữu của CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON hoặc các bên cấp phép hợp pháp.
        </p>
        <p className="mb-4 leading-relaxed">
          Mọi hành vi sao chép, trích xuất hình ảnh, thương mại hóa lại hoặc phân phối bất kỳ phần nào của Ứng dụng khi chưa có sự chấp thuận bằng văn bản của Perathon đều bị nghiêm cấm theo quy định của pháp luật sở hữu trí tuệ.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Mua sắm trong ứng dụng (IAP), Gói Premium &amp; Quảng cáo</h2>
        <p className="mb-4 leading-relaxed">
          Ứng dụng có thể cung cấp phiên bản miễn phí đi kèm quảng cáo của bên thứ ba (Google AdMob), đồng thời cung cấp các gói nâng cấp trả phí (Premium) theo chu kỳ tuần, tháng hoặc năm:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Quyền lợi gói Premium:</strong> Gỡ bỏ toàn bộ quảng cáo trong ứng dụng, mở khóa không giới hạn tất cả các chủ đề màn hình khóa cao cấp và trải nghiệm trọn vẹn các tính năng nâng cao.</li>
          <li><strong>Thanh toán an toàn:</strong> Mọi khoản phí đăng ký được thực hiện qua tài khoản Google Play hoặc Apple ID của bạn.</li>
          <li><strong>Tự động gia hạn &amp; Hủy đăng ký:</strong> Gói cước sẽ tự động gia hạn khi kết thúc chu kỳ trừ khi bạn hủy ít nhất 24 giờ trước khi chu kỳ hiện tại kết thúc trong phần Quản lý gói thuê bao của Google Play / App Store. Bạn có thể hủy gói bất kỳ lúc nào mà không phát sinh thêm phí.</li>
          <li><strong>Chính sách hoàn tiền:</strong> Mọi yêu cầu hoàn tiền được xử lý căn cứ theo chính sách hoàn tiền chính thức của Google Play Store hoặc Apple App Store.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Tuyên bố miễn trừ trách nhiệm</h2>
        <p className="mb-4 leading-relaxed">
          Ứng dụng được cung cấp trên cơ sở <strong>“NGUYÊN TRẠNG” (AS IS)</strong> và <strong>“SẴN CÓ” (AS AVAILABLE)</strong>.
        </p>
        <p className="mb-4 leading-relaxed">
          Mặc dù chúng tôi luôn nỗ lực tối ưu hóa phần mềm, Perathon không đảm bảo tuyệt đối rằng Ứng dụng sẽ hoạt động không gián đoạn, hoàn toàn không có lỗi, hoặc tương thích tuyệt đối 100% với tất cả các phiên bản tùy biến hệ điều hành của mọi nhà sản xuất điện thoại. Độ nhạy và tính chính xác của tính năng nhận diện giọng nói có thể chịu tác động bởi phần cứng thu âm, âm thanh môi trường xung quanh và phần mềm nhận dạng giọng nói tích hợp sẵn của thiết bị.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">9. Giới hạn trách nhiệm</h2>
        <p className="mb-4 leading-relaxed">
          Trong phạm vi tối đa mà pháp luật cho phép, Perathon và các nhân sự của chúng tôi sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc do hậu quả phát sinh (bao gồm nhưng không giới hạn ở việc mất mát dữ liệu, việc người dùng không thể truy cập thiết bị do quên mật khẩu, hoặc gián đoạn hoạt động của thiết bị) bắt nguồn từ việc sử dụng hoặc không thể sử dụng Ứng dụng.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">10. Luật điều chỉnh &amp; Giải quyết tranh chấp</h2>
        <p className="mb-4 leading-relaxed">
          Các Điều khoản này được điều chỉnh và giải thích theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến việc sử dụng Ứng dụng trước hết sẽ được giải quyết thông qua thương lượng hòa giải; trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền tại Việt Nam.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">11. Thay đổi điều khoản &amp; Liên hệ</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi có quyền sửa đổi các Điều khoản này tại bất kỳ thời điểm nào. Các thay đổi sẽ có hiệu lực ngay khi được công bố trên trang này. Việc bạn tiếp tục sử dụng Ứng dụng sau khi có thay đổi đồng nghĩa với việc bạn chấp thuận các Điều khoản mới.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ về mặt pháp lý/kỹ thuật, vui lòng liên hệ với chúng tôi:
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

export default TermOfUseVoiceLockScreen;
