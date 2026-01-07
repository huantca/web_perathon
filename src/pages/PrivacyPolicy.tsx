import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase text-blue-900">
        Chính sách quyền riêng tư
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Giới thiệu</h2>
        <p className="mb-4 leading-relaxed">
          Các Điều khoản và Điều kiện này (“Điều khoản”) được áp dụng cho:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Trang web Perathon tại địa chỉ <a href="https://www.perathon.org" className="text-blue-600 hover:underline">www.perathon.org</a> (“Trang web”), bao gồm cả cửa hàng trực tuyến của chúng tôi; và
          </li>
          <li>
            Ứng dụng di động Perathon trên Apple App Store và Google Play Store (“Ứng dụng”).
          </li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Trang web và Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, có trụ sở đăng ký tại <strong>Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam</strong>. Trong toàn bộ Điều khoản này, các cụm từ “Perathon”, “chúng tôi”, “của chúng tôi”, hoặc “nền tảng” đều chỉ CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON.
        </p>
        <p className="mb-4 leading-relaxed">
          Perathon là ứng dụng chạy bộ sử dụng AI để thiết kế lộ trình theo thể trạng và tinh chỉnh lộ trình theo từng ngày dành riêng cho từng cá nhân. Được bảo chứng bởi các chuyên gia, Perathon thấu hiểu cơ thể của người sử dụng để đưa ra những điều chỉnh cá nhân hóa và lời nhắc thông báo tinh tế, giúp việc tập luyện trở nên hiệu quả và phù hợp. Kết hợp cùng gợi ý dinh dưỡng và Gamification, Perathon biến mỗi bước chạy thành một trải nghiệm của cảm hứng và khoa học. Perathon được định hướng hỗ trợ cộng đồng chạy bộ tại Việt Nam và quốc tế thông qua công nghệ huấn luyện số hiện đại, đặt người dùng làm trung tâm.
        </p>
        <p className="mb-4 leading-relaxed">
          Bằng việc truy cập Trang web hoặc sử dụng Ứng dụng, bạn đồng ý tuân thủ các Điều khoản này, bao gồm cả các chính sách và điều kiện bổ sung được dẫn chiếu hoặc liên kết trong văn bản.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Chúng tôi thu thập những gì?</h2>
        <p className="mb-2 font-medium">Cách Perathon thu thập và sử dụng dữ liệu cá nhân của bạn</p>
        <p className="mb-4 leading-relaxed">
          Khi bạn sử dụng Trang web hoặc Ứng dụng Perathon, chúng tôi có thể thu thập một số thông tin cá nhân (Personal Data) để phục vụ cho việc cung cấp, cải thiện và cá nhân hóa trải nghiệm luyện tập của bạn. “Thông tin cá nhân” được hiểu là bất kỳ dữ liệu nào có thể xác định, hoặc giúp xác định bạn là một cá nhân cụ thể.
        </p>
        <p className="mb-4 leading-relaxed">
          Tùy theo cách bạn tương tác với nền tảng, các loại thông tin mà bạn tự nguyện cung cấp cho chúng tôi có thể bao gồm:
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">2.1. Thông tin bạn chủ động cung cấp</h3>
        <ul className="list-disc pl-6 mb-4 space-y-3">
          <li>
            <strong>Tạo tài khoản:</strong> Khi đăng ký tài khoản, bạn có thể chia sẻ với chúng tôi họ tên, địa chỉ email, giới tính, ngày sinh, tên người dùng và mật khẩu.
          </li>
          <li>
            <strong>Đăng nhập:</strong> Khi đăng nhập, bạn sẽ dùng email, tên người dùng và mật khẩu, hoặc đăng nhập nhanh qua các dịch vụ như Google SSO.
          </li>
          <li>
            <strong>Cập nhật hồ sơ cá nhân:</strong> Khi chỉnh sửa thông tin tài khoản, bạn có thể bổ sung tuổi, chiều cao, cân nặng, ảnh đại diện, quốc gia cư trú, cũng như dữ liệu luyện tập như mục tiêu, cấp độ thể chất, thành tích, khu vực chạy, thông tin vị trí GPS, hoặc sở thích huấn luyện (ví dụ: tốc độ, chỉ số nhịp tim, công suất chạy – FTP).
          </li>
          <li>
            <strong>Lên kế hoạch luyện tập & sử dụng dịch vụ huấn luyện:</strong> Khi bạn xây dựng kế hoạch tập luyện hoặc tham gia các chương trình của Perathon, chúng tôi có thể thu thập thông tin về:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Lịch tập, mục tiêu, bài tập, sự kiện, quá trình tiến bộ;</li>
              <li>Dữ liệu sức khỏe và vận động như quãng đường, thời gian, nhịp tim, cadence, công suất, mức độ phục hồi;</li>
              <li>Thông tin thiết bị (ví dụ đồng hồ, cảm biến, giày, máy đo nhịp tim);</li>
              <li>Thông tin chấn thương, giới hạn thể chất hoặc video tập luyện mà bạn tự ghi lại.</li>
            </ul>
          </li>
          <li>
            <strong>Kết nối thiết bị:</strong> Khi bạn liên kết thiết bị hoặc ứng dụng khác như Apple Watch, Garmin, Strava, dữ liệu từ các thiết bị này (ví dụ nhịp tim, quãng đường, tốc độ, năng lượng tiêu hao, v.v.) có thể được chia sẻ với Perathon để tối ưu hóa kế hoạch tập luyện của bạn.
          </li>
          <li>
            <strong>Tính năng cộng đồng:</strong> Khi tham gia thử thách chạy bộ, bảng xếp hạng hoặc sự kiện trực tuyến trên ứng dụng, bạn có thể chia sẻ tên, tên người dùng, ảnh đại diện, quốc gia, thành tích, nhịp tim, công suất, tiến độ tập luyện và các dữ liệu khác trong quá trình hoạt động.
          </li>
          <li>
            <strong>Thanh toán & đăng ký dịch vụ:</strong> Khi mua gói huấn luyện, thuê huấn luyện viên, hoặc đăng ký gói trả phí, bạn sẽ cung cấp tên, địa chỉ thanh toán và thông tin thẻ ngân hàng.
          </li>
          <li>
            <strong>Liên hệ với chúng tôi:</strong> Khi gửi phản hồi hoặc yêu cầu hỗ trợ qua email hoặc trong ứng dụng, bạn có thể cung cấp tên, email, số điện thoại và nội dung trao đổi.
          </li>
          <li>
            <strong>Đăng ký nhận thông tin:</strong> Khi đăng ký nhận email hoặc thông báo ưu đãi, bạn sẽ cung cấp địa chỉ email. Bạn có thể hủy đăng ký bất kỳ lúc nào bằng cách chọn “Unsubscribe” trong email hoặc điều chỉnh cài đặt thông báo trong ứng dụng.
          </li>
          <li>
            <strong>Đóng góp nội dung:</strong> Khi bạn viết bài chia sẻ, blog hoặc bình luận trong cộng đồng Perathon, các nội dung đó có thể chứa thông tin cá nhân mà bạn chủ động cung cấp.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">2.2. Thông tin chúng tôi thu thập tự động</h3>
        <p className="mb-2">
          Khi bạn sử dụng Ứng dụng hoặc Trang web, chúng tôi có thể tự động ghi nhận một số dữ liệu thông qua cookie và các công nghệ theo dõi khác, bao gồm:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Dữ liệu sử dụng:</strong> Các trang bạn truy cập, tần suất sử dụng, thao tác trong ứng dụng.</li>
          <li><strong>Dữ liệu thiết bị:</strong> Loại trình duyệt, ngôn ngữ, múi giờ, hệ điều hành, và vị trí tổng quát.</li>
          <li><strong>Dữ liệu thiết bị di động:</strong> Loại điện thoại, nhà mạng, và việc bạn truy cập bằng điện thoại hay máy tính bảng.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Thông tin từ nguồn bên ngoài</h2>
        <p className="mb-2">Trong một số trường hợp, Perathon có thể nhận dữ liệu cá nhân của bạn từ các đối tác hoặc nền tảng khác, chẳng hạn như:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Hệ điều hành và thiết bị liên kết, hoặc</li>
          <li>Huấn luyện viên, câu lạc bộ, nhà tài trợ mà bạn hợp tác trong chương trình tập luyện.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Tại sao chúng tôi thu thập những thông tin đó?</h2>
        <p className="mb-2">Chúng tôi thu thập dữ liệu cá nhân nhằm:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Cung cấp và vận hành đầy đủ các tính năng của ứng dụng;</li>
          <li>Cá nhân hóa lộ trình tập luyện dựa trên thể trạng và tiến độ của bạn;</li>
          <li>Nâng cao trải nghiệm người dùng và hỗ trợ kỹ thuật;</li>
          <li>Gửi thông báo, cập nhật hoặc ưu đãi phù hợp với sở thích của bạn;</li>
          <li>Bảo đảm tính bảo mật, phát hiện hành vi gian lận hoặc truy cập trái phép.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Thông tin được giữ trong bao lâu?</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi chỉ lưu giữ dữ liệu cá nhân của bạn trong thời gian cần thiết để cung cấp Dịch vụ cho bạn. Chúng tôi có thể được yêu cầu lưu giữ thông tin trong thời gian dài hơn khi cần thiết để thực hiện nghĩa vụ pháp lý hoặc khi có yêu cầu từ cơ quan quản lý. Thời gian lưu giữ cụ thể cho các loại dữ liệu cá nhân khác nhau sẽ được cung cấp theo yêu cầu.
        </p>
        <p className="mb-4 leading-relaxed">
          Bạn có thể liên hệ với chúng tôi bất cứ lúc nào để yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn. Xem Mục 6 bên dưới để tìm hiểu cách yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Cách chúng tôi chia sẻ dữ liệu cá nhân của bạn</h2>
        <p className="mb-4">Chúng tôi có thể chia sẻ dữ liệu cá nhân mà chúng tôi thu thập từ bạn theo một số cách sau đây:</p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.1. Với các nhà cung cấp dịch vụ</h3>
        <p className="mb-2">Chúng tôi có thể chia sẻ thông tin với các đối tác hoặc nhà cung cấp dịch vụ được ủy quyền để hỗ trợ vận hành và phát triển sản phẩm, bao gồm:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Dịch vụ lưu trữ dữ liệu, máy chủ (hosting) và điện toán đám mây (cloud storage);</li>
          <li>Dịch vụ quản lý dự án, quy trình công việc (workflow);</li>
          <li>Dịch vụ tiếp thị, quảng bá sản phẩm;</li>
          <li>Chia sẻ dữ liệu thể chất, sinh trắc học hoặc vị trí địa lý (geolocation) với các ứng dụng thể thao bên thứ ba;</li>
          <li>Dịch vụ theo dõi lỗi, giám sát hệ thống, cơ sở dữ liệu;</li>
          <li>Dịch vụ tin nhắn, thông báo đẩy, phản hồi khách hàng và chăm sóc khách hàng;</li>
          <li>Dịch vụ phân tích dữ liệu, tổng hợp và trực quan hóa dữ liệu;</li>
          <li>Các dịch vụ khác như quản lý tính năng (feature-flag), kế toán hoặc phần mềm thuế;</li>
          <li>Dịch vụ soạn thảo tài liệu, kiểm thử khả năng sử dụng (usability testing);</li>
          <li>Và xử lý thanh toán thay mặt cho chúng tôi.</li>
        </ul>
        <p className="mb-4 italic">
          Những đối tác này chỉ được phép sử dụng dữ liệu của bạn theo phạm vi cần thiết để cung cấp dịch vụ cho Perathon và phải tuân thủ quy định bảo mật dữ liệu nghiêm ngặt.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.2. Với các đối tác API (API Partners)</h3>
        <p className="mb-2">Ứng dụng Perathon được thiết kế để kết nối và tương thích với nhiều thiết bị, ứng dụng và phần mềm thể thao khác mà bạn lựa chọn.</p>
        <p className="mb-2">Ví dụ bao gồm (nhưng không giới hạn ở): Garmin, Suunto, Polar, Wahoo, Zwift, Apple Health, v.v.</p>
        <p className="mb-2">Khi bạn kết nối với các đối tác này, một phần dữ liệu của bạn (như dữ liệu luyện tập, nhịp tim, quãng đường, công suất, vị trí) có thể được chia sẻ để đồng bộ hóa hoặc hiển thị trong các nền tảng đó.</p>
        <p className="mb-4">Bạn có thể xem thêm thông tin chi tiết về các đối tác API tương thích trong Trung tâm trợ giúp (Help Center) của Perathon.</p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.3. Khi có yêu cầu pháp lý hoặc để bảo vệ quyền lợi hợp pháp</h3>
        <p className="mb-2">Chúng tôi có thể chia sẻ dữ liệu của bạn với bên thứ ba trong các trường hợp sau:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Khi pháp luật yêu cầu chúng tôi phải cung cấp thông tin;</li>
          <li>Khi liên quan đến quy trình tố tụng, điều tra hoặc tranh chấp pháp lý;</li>
          <li>Khi cần xác lập, thực thi hoặc bảo vệ quyền hợp pháp của chúng tôi, bao gồm chia sẻ dữ liệu để ngăn chặn gian lận hoặc hành vi vi phạm pháp luật;</li>
          <li>Khi chúng tôi tin rằng việc yêu cầu tòa án hoặc cơ quan có thẩm quyền tiết lộ dữ liệu là phù hợp và cần thiết;</li>
          <li>Hoặc khi Perathon tham gia hoạt động tái cấu trúc doanh nghiệp, gọi vốn hoặc chuyển nhượng tài sản.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.4. Với huấn luyện viên và nhà tài trợ bên thứ ba</h3>
        <p className="mb-2">Nếu bạn tham gia các chương trình huấn luyện hoặc sự kiện có huấn luyện viên / nhà tài trợ, chúng tôi có thể chia sẻ dữ liệu luyện tập và thông tin cá nhân cần thiết với các bên đó.</p>
        <p className="mb-4 italic">Lưu ý rằng các huấn luyện viên và nhà tài trợ này hoạt động độc lập, không thuộc quyền kiểm soát của Perathon, và chúng tôi không chịu trách nhiệm về cách họ sử dụng dữ liệu của bạn.</p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.5. Với những người dùng khác trong cộng đồng</h3>
        <p className="mb-2">Khi bạn tham gia các tính năng xã hội của ứng dụng — ví dụ: chạy cùng nhóm, tham gia thử thách, hoặc cho phép người khác theo dõi bạn — một phần thông tin của bạn (như tên người dùng, quốc gia, dữ liệu luyện tập) có thể hiển thị công khai cho người dùng khác.</p>
        <p className="mb-4 italic">Perathon không chịu trách nhiệm cho việc người dùng khác lưu trữ, chia sẻ hoặc sử dụng lại các thông tin này.</p>

        <h3 className="text-xl font-semibold mb-3 text-gray-700">6.6. Theo yêu cầu hoặc sự đồng ý của bạn</h3>
        <p className="mb-4">Chúng tôi chỉ chia sẻ dữ liệu cá nhân của bạn khi bạn chủ động yêu cầu hoặc đồng ý rõ ràng cho việc tiết lộ thông tin đó (ví dụ: khi bạn kết nối tài khoản với một ứng dụng bên ngoài hoặc gửi yêu cầu đồng bộ dữ liệu).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Thông tin của bạn được bảo vệ như thế nào?</h2>
        <p className="mb-4 leading-relaxed">
          Chúng tôi nỗ lực bảo vệ tính bảo mật của dữ liệu cá nhân của bạn trong quá trình truyền tải bằng cách sử dụng phần mềm Secure Sockets Layer (SSL), phần mềm mã hóa thông tin bạn nhập vào. Nếu giao dịch được xử lý trên Dịch vụ của chúng tôi, thông tin giao dịch sẽ được truyền đi dưới dạng mã hóa bằng kết nối SSL tiêu chuẩn ngành để giúp bảo vệ thông tin đó khỏi bị đánh cắp. Chúng tôi hạn chế quyền truy cập được ủy quyền vào dữ liệu cá nhân của bạn cho những người cần biết thông tin đó để cung cấp sản phẩm hoặc dịch vụ cho bạn.
        </p>
        <p className="mb-4 leading-relaxed">
          Perathon tuân thủ các tiêu chuẩn công nghiệp được chấp nhận chung để bảo vệ dữ liệu cá nhân được gửi cho chúng tôi, cả trong quá trình truyền tải và sau khi Perathon nhận được. Không có phương thức truyền tải qua Internet hoặc phương thức lưu trữ điện tử nào an toàn 100%. Do đó, mặc dù Perathon nỗ lực sử dụng các phương tiện được chấp nhận về mặt thương mại để bảo vệ thông tin cá nhân của bạn, chúng tôi không thể đảm bảo tính bảo mật tuyệt đối của thông tin.
        </p>
        <p className="mb-4 leading-relaxed">
          Chúng tôi sẽ không bán, phân phối hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba trừ khi chúng tôi có sự cho phép của bạn hoặc được pháp luật yêu cầu phải làm như vậy.
        </p>
        <p className="mb-4 leading-relaxed">
          Trong trường hợp xảy ra vi phạm dữ liệu có mức độ rủi ro cao, chúng tôi sẽ thông báo cho các cơ quan có thẩm quyền trong vòng 72 giờ kể từ khi xảy ra vi phạm và nếu cần thiết hoặc phù hợp, chúng tôi sẽ thông báo cho bạn.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">8. Bạn có những quyền gì đối với dữ liệu cá nhân mà tôi nắm giữ?</h2>
        <p className="mb-4">Trong một số trường hợp nhất định, theo luật, bạn có quyền yêu cầu:</p>
        <ul className="list-none space-y-4">
          <li>
            <strong className="block text-gray-700">Quyền truy cập vào dữ liệu cá nhân của bạn (thường được gọi là "yêu cầu truy cập chủ thể"):</strong>
            Điều này cho phép bạn nhận được một bản sao dữ liệu của mình và kiểm tra xem chúng tôi có đang xử lý dữ liệu đó một cách hợp pháp hay không.
          </li>
          <li>
            <strong className="block text-gray-700">Chỉnh sửa dữ liệu của bạn:</strong>
            Điều này cho phép bạn yêu cầu chúng tôi sửa bất kỳ thông tin nào không đầy đủ hoặc không chính xác mà chúng tôi nắm giữ về bạn.
          </li>
          <li>
            <strong className="block text-gray-700">Xóa dữ liệu của bạn:</strong>
            Điều này cho phép bạn yêu cầu chúng tôi xóa hoặc gỡ bỏ dữ liệu của bạn khi không có lý do chính đáng để chúng tôi tiếp tục xử lý dữ liệu đó. Bạn cũng có quyền yêu cầu chúng tôi xóa hoặc gỡ bỏ dữ liệu của bạn khi bạn đã thực hiện quyền phản đối việc xử lý.
          </li>
          <li>
            <strong className="block text-gray-700">Hạn chế xử lý dữ liệu của bạn:</strong>
            Điều này cho phép bạn yêu cầu chúng tôi tạm dừng xử lý khi bạn tranh chấp về tính chính xác của thông tin, phản đối việc xử lý thông tin hoặc yêu cầu chúng tôi giữ lại thông tin đó để giải quyết các khiếu nại pháp lý.
          </li>
          <li>
            <strong className="block text-gray-700">Tính di động của dữ liệu của bạn:</strong>
            Điều này cho phép bạn nhận dữ liệu của mình theo định dạng có cấu trúc, được sử dụng phổ biến và có thể đọc được bằng máy và yêu cầu chuyển dữ liệu đó sang bộ điều khiển khác khi khả thi về mặt kỹ thuật.
          </li>
          <li>
            <strong className="block text-gray-700">Phản đối việc xử lý dữ liệu của bạn:</strong>
            Điều này cho phép bạn phản đối việc chúng tôi xử lý dữ liệu của bạn dựa trên lợi ích hợp pháp. Chúng tôi phải ngừng xử lý trừ khi chúng tôi chứng minh được lý do chính đáng quan trọng hơn hoặc cần dữ liệu đó cho các khiếu nại pháp lý.
          </li>
          <li>
            <strong className="block text-gray-700">Phản đối việc ra quyết định tự động và lập hồ sơ dữ liệu của bạn:</strong>
            Điều này cho phép bạn yêu cầu sự can thiệp của con người khi các quyết định chỉ dựa trên xử lý tự động ảnh hưởng đáng kể đến bạn, trừ khi việc xử lý đó là cần thiết cho một hợp đồng, được pháp luật cho phép hoặc dựa trên sự đồng ý rõ ràng của bạn.
          </li>
          <li>
            <strong className="block text-gray-700">Rút lại sự đồng ý xử lý dữ liệu của bạn:</strong>
            Điều này cho phép bạn rút lại sự đồng ý bất cứ lúc nào khi chúng tôi dựa vào sự đồng ý đó để xử lý dữ liệu của bạn. Điều này sẽ không ảnh hưởng đến việc xử lý trước đây nhưng có thể ảnh hưởng đến khả năng cung cấp một số dịch vụ nhất định của chúng tôi.
          </li>
        </ul>
        <p className="mt-6">
          Nếu bạn muốn thực hiện bất kỳ quyền nào được mô tả ở trên hoặc có bất kỳ câu hỏi nào về cách chúng tôi sử dụng dữ liệu cá nhân của bạn, vui lòng liên hệ với chúng tôi qua email tại <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">9. Chính sách của bạn liên quan đến trẻ em là gì?</h2>
        <p className="mb-4 leading-relaxed">
          Dịch vụ của chúng tôi không dành cho trẻ em dưới 18 tuổi. Nếu bạn chưa đủ tuổi này, bạn không nên sử dụng Dịch vụ. Dịch vụ của chúng tôi sử dụng các biện pháp kỹ thuật để ngăn chặn trẻ em dưới 18 tuổi tạo tài khoản và do đó chúng tôi không cố ý thu thập dữ liệu cá nhân từ bất kỳ người nào dưới độ tuổi đó. Nếu chúng tôi phát hiện trẻ em đã cung cấp thông tin cá nhân cho chúng tôi, chúng tôi sẽ thực hiện các bước để xóa thông tin đó, chấm dứt tài khoản của người đó và hạn chế quyền truy cập của người đó.
        </p>
        <p className="mb-4 leading-relaxed">
          Nếu bạn là phụ huynh và biết rằng con mình đã cung cấp thông tin cá nhân cho chúng tôi, vui lòng liên hệ với chúng tôi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">10. Tôi có thể liên lạc với bạn bằng cách nào?</h2>
        <p className="mb-4 leading-relaxed">
          Nếu bạn có thắc mắc hoặc lo ngại về Chính sách Quyền riêng tư này cũng như việc xử lý và bảo mật dữ liệu của bạn, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
        <p className="mb-4 leading-relaxed">
          Bạn có thể liên hệ với Cán bộ Bảo vệ Dữ liệu của chúng tôi qua địa chỉ: <a href="mailto:support@perathon.org" className="text-blue-600 hover:underline">support@perathon.org</a>
        </p>
      </section>
      
      <footer className="text-center text-sm text-gray-500 mt-12 border-t pt-4">
        &copy; {new Date().getFullYear()} CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;