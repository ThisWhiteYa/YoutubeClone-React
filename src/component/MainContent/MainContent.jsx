import "./MainContent.css";
function MainContent() {
  return (
    <>
      <div className="container-content">
        <div className="suggestion-container">
          <div className="suggestion">ทั้งหมด</div>
          <div className="suggestion">เกมส์</div>
          <div className="suggestion">เพลง</div>
          <div className="suggestion">มิกซ์</div>
          <div className="suggestion">เกมส์แอ็คชันผจญภัย</div>
          <div className="suggestion">วิดีโอเกมส์จำลองสถานการณ์</div>
          <div className="suggestion">ทีวีอนิเมชัน</div>
          <div className="suggestion">การทำอาหาร</div>
          <div className="suggestion">อัปล่าสุด</div>
          <div className="suggestion">ดูแล้ว</div>
          <div className="suggestion">อัปโหลดล่าสุด</div>
          <div className="suggestion">วีดีโอใหม่สำหรับคุณ</div>
        </div>
          <div className="grid-video">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
          </div>
      </div>
    </>
  );
}

export default MainContent;
