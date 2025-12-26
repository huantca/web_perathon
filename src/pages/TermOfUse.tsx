import React from 'react';

/**
 * TermsOfUse Component
 * * Displays the Terms of Use for Perathon.
 * * Technical Decisions:
 * - Uses React.FC (Functional Component) for modern React standards.
 * - Styles are defined in a constant object (`styles`) to ensure the component 
 * is self-contained and doesn't break if you don't have a global CSS file.
 * - External links use `rel="noopener noreferrer"` for security best practices.
 */

const TermsOfUse: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>ĐIỀU KHOẢN SỬ DỤNG (TERMS OF USE)</h1>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>1. Giới thiệu</h2>
        <p style={styles.paragraph}>Các Điều khoản và Điều kiện này (“Điều khoản”) được áp dụng cho:</p>
        <ul style={styles.list}>
          <li>Trang web Perathon tại địa chỉ <a href="http://www.perathon.org" target="_blank" rel="noopener noreferrer" style={styles.link}>www.perathon.org</a> (“Trang web”); và</li>
          <li>Ứng dụng di động Perathon trên Apple App Store và Google Play Store (“Ứng dụng”).</li>
        </ul>
        <p style={styles.paragraph}>
          Trang web và Ứng dụng thuộc quyền sở hữu và được vận hành bởi <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>, 
          có trụ sở tại Số 94, Ngõ 77, Đường Võ Nguyên Giáp, Thôn Số 1, Xã Sơn Động, Tỉnh Bắc Ninh, Việt Nam.
        </p>
        <p style={styles.paragraph}>
          Perathon là ứng dụng chạy bộ sử dụng AI để thiết kế lộ trình cá nhân hóa. Bằng việc truy cập Trang web hoặc sử dụng Ứng dụng, 
          bạn đồng ý tuân thủ các Điều khoản này.
        </p>
        <div style={styles.contactBox}>
          Thắc mắc? Liên hệ: <a href="mailto:support@perathon.org" style={styles.link}>support@perathon.org</a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>2. Thỏa thuận pháp lý ràng buộc</h2>
        <p style={styles.paragraph}>
          Đây là thỏa thuận pháp lý giữa bạn và Perathon. Bạn chỉ được phép sử dụng Dịch vụ khi đồng ý với các Điều khoản này. 
          Nếu không đồng ý, vui lòng không sử dụng Trang web hoặc Ứng dụng.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>3. Quy định từ kho ứng dụng bên thứ ba</h2>
        <p style={styles.paragraph}>
          Bạn đồng ý tuân thủ Điều khoản của Apple Media Services và Google Play. Bạn thừa nhận rằng:
        </p>
        <ul style={styles.list}>
          <li>Thỏa thuận này là giữa bạn và Perathon, không phải Apple hay Google.</li>
          <li>Apple và Google không chịu trách nhiệm bảo trì hay hỗ trợ kỹ thuật cho Ứng dụng.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>4. Không phải tư vấn y khoa</h2>
        <p style={styles.paragraph}>
          Nội dung trên Perathon không thay thế cho tư vấn y khoa chuyên nghiệp. 
          <strong> Cảnh báo:</strong> Không được bỏ qua tư vấn y tế vì thông tin trên Ứng dụng.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>5. Mục đích sử dụng</h2>
        <p style={styles.paragraph}>
          Bạn được cấp quyền sử dụng cá nhân, phi thương mại. Bạn không được phép:
        </p>
        <ul style={styles.list}>
          <li>Biên dịch ngược, giải mã mã nguồn;</li>
          <li>Sử dụng bot hoặc script để truy cập hệ thống;</li>
          <li>Tấn công bảo mật hệ thống.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>6. Thanh toán & Hoàn tiền</h2>
        <ul style={styles.list}>
          <li><strong>Store (Apple/Google):</strong> Thanh toán và gia hạn do Store xử lý. Bạn cần tắt gia hạn trong cài đặt Store nếu muốn hủy.</li>
          <li><strong>Website:</strong> Các gói mua trực tiếp có thời hạn cố định, không tự động gia hạn.</li>
          <li><strong>Hoàn tiền:</strong> Không hoàn tiền nếu tài khoản bị hủy do vi phạm Điều khoản.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>7. Quyền sở hữu trí tuệ</h2>
        <p style={styles.paragraph}>
          Toàn bộ nội dung (dữ liệu, văn bản, hình ảnh) thuộc sở hữu của Perathon. Bạn chỉ được sử dụng cho mục đích cá nhân.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>8. Giới hạn trách nhiệm</h2>
        <p style={styles.paragraph}>
          Bạn hiểu rằng chạy bộ và hoạt động thể chất có rủi ro. Bạn đồng ý tự chịu trách nhiệm và miễn trừ Perathon khỏi các khiếu nại về chấn thương.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>9. Luật điều chỉnh</h2>
        <p style={styles.paragraph}>
          Các Điều khoản này được điều chỉnh bởi pháp luật Việt Nam.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>10. Liên hệ</h2>
        <div style={styles.contactBox}>
          Câu hỏi hoặc báo cáo vi phạm? Email: <a href="mailto:support@perathon.org" style={styles.link}>support@perathon.org</a>
        </div>
      </section>
    </div>
  );
};

// Styles object for styling without an external CSS file
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    backgroundColor: '#fff',
  },
  mainTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    color: '#1a1a1a',
  },
  section: {
    marginBottom: '30px',
  },
  subTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    marginBottom: '15px',
    borderLeft: '4px solid #0066cc',
    paddingLeft: '10px',
  },
  paragraph: {
    marginBottom: '15px',
    textAlign: 'justify',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '15px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  contactBox: {
    backgroundColor: '#f0f4f8',
    padding: '15px',
    borderRadius: '4px',
    marginTop: '10px',
    fontWeight: 500,
  }
};

export default TermsOfUse;