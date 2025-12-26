import React from 'react';

/**
 * PrivacyPolicy Component
 * * Displays the Privacy Policy for Perathon.
 * * Integration Note:
 * This component shares the same styling object structure as TermsOfUse.tsx
 * for visual consistency. If you use a UI library (like Material UI or Tailwind),
 * you should replace the `style={styles...}` props with your library's classes.
 */

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>CHÍNH SÁCH BẢO MẬT (PRIVACY POLICY)</h1>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>1. Giới thiệu</h2>
        <p style={styles.paragraph}>
          Chính sách này áp dụng cho Trang web Perathon (<a href="http://www.perathon.org" target="_blank" rel="noopener noreferrer" style={styles.link}>www.perathon.org</a>) 
          và Ứng dụng di động Perathon.
        </p>
        <p style={styles.paragraph}>
          Dịch vụ thuộc quyền sở hữu của <strong>CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ PERATHON</strong>. 
          Bằng việc sử dụng, bạn đồng ý với việc xử lý dữ liệu được mô tả tại đây.
        </p>
        <div style={styles.contactBox}>
          Liên hệ DPO (Data Protection Officer): <a href="mailto:support@perathon.org" style={styles.link}>support@perathon.org</a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>2. Dữ liệu chúng tôi thu thập</h2>
        
        <h3 style={styles.h3}>2.1. Thông tin bạn cung cấp</h3>
        <ul style={styles.list}>
          <li><strong>Tài khoản:</strong> Họ tên, email, ngày sinh, giới tính.</li>
          <li><strong>Hồ sơ sức khỏe:</strong> Chiều cao, cân nặng, FTP, nhịp tim tối đa.</li>
          <li><strong>Dữ liệu tập luyện:</strong> Lịch sử chạy, quãng đường, cadence, power.</li>
          <li><strong>Thanh toán:</strong> Thông tin xử lý giao dịch (chúng tôi không lưu trực tiếp số thẻ đầy đủ).</li>
        </ul>

        <h3 style={styles.h3}>2.2. Thu thập tự động</h3>
        <ul style={styles.list}>
          <li>Dữ liệu thiết bị, hệ điều hành, địa chỉ IP, và thói quen sử dụng ứng dụng.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>3. Mục đích sử dụng dữ liệu</h2>
        <ul style={styles.list}>
          <li>Vận hành ứng dụng và cá nhân hóa lộ trình tập luyện (AI Training).</li>
          <li>Cải thiện hiệu suất kỹ thuật và chăm sóc khách hàng.</li>
          <li>Đảm bảo an ninh và ngăn chặn gian lận.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>4. Chia sẻ dữ liệu</h2>
        <p style={styles.paragraph}>Chúng tôi có thể chia sẻ dữ liệu với:</p>
        <ul style={styles.list}>
          <li><strong>Nhà cung cấp dịch vụ:</strong> (Cloud, Analytics, Payment) để vận hành hệ thống.</li>
          <li><strong>Đối tác API:</strong> (Garmin, Strava, Apple Health) chỉ khi bạn chủ động kết nối.</li>
          <li><strong>Cơ quan pháp luật:</strong> Khi có yêu cầu hợp lệ từ tòa án hoặc cơ quan chức năng.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>5. Quyền của bạn</h2>
        <p style={styles.paragraph}>Bạn có các quyền sau đối với dữ liệu cá nhân:</p>
        <ul style={styles.list}>
          <li><strong>Truy cập & Chỉnh sửa:</strong> Xem và sửa đổi thông tin trong ứng dụng.</li>
          <li><strong>Xóa bỏ:</strong> Yêu cầu xóa tài khoản và dữ liệu ("Quyền được lãng quên").</li>
          <li><strong>Rút lại sự đồng ý:</strong> Ngừng chia sẻ dữ liệu (có thể ảnh hưởng đến tính năng App).</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>6. Bảo mật & Lưu trữ</h2>
        <p style={styles.paragraph}>
          Chúng tôi sử dụng mã hóa SSL và các biện pháp an ninh tiêu chuẩn. Dữ liệu được lưu trữ trong thời gian cần thiết để cung cấp dịch vụ 
          hoặc theo quy định pháp luật.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>7. Trẻ em</h2>
        <p style={styles.paragraph}>
          Dịch vụ không dành cho trẻ em dưới 18 tuổi. Chúng tôi sẽ xóa tài khoản nếu phát hiện vi phạm.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>8. Liên hệ</h2>
        <div style={styles.contactBox}>
          Mọi thắc mắc về quyền riêng tư, vui lòng liên hệ: <a href="mailto:support@perathon.org" style={styles.link}>support@perathon.org</a>
        </div>
      </section>
    </div>
  );
};

// Styles object (Shared design system with TermsOfUse)
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
  h3: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#444',
    marginTop: '15px',
    marginBottom: '10px',
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

export default PrivacyPolicy;