import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container text-center my-5">
      <div className="d-flex flex-column align-items-center">
        <img
          src="/csi205/imgs/67163153.png" 
          className="rounded-circle shadow-lg mb-4"
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />

        <h2 className="fw-bold text-primary">ศิริเทพ ขวัญเนตร</h2>
        <p className="text-muted fs-5">รหัสนักศึกษา: 67163153</p>
        <p className="text-muted fs-5">นักศึกษามหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 2</p>
      </div>

      <div className="mt-4">
        <p className="lead text-secondary">
        สวัสดีครับ ผมชื่อ <strong>ศิริเทพ ขวัญเนตร</strong> เพื่อน ๆ เรียกผมว่า <strong>แชมป์</strong> ครับ<br />
        ปัจจุบันกำลังศึกษาอยู่ที่ <strong>มหาวิทยาลัยศรีปทุม</strong> และทำงานเป็น 
        <strong> Outsource Full Stack Video Game Programmer</strong> พร้อมทั้งดูแลด้าน <strong>VFX</strong> 
        ให้กับบริษัทเกมขนาดเล็กถึงขนาดกลาง ทั้งในประเทศและต่างประเทศครับ
        </p>
      </div>
    </div>
  );
};

export default Home;
