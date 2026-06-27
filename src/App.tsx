import React, { useState } from "react";
import "./App.css";

function App() {
  // حالة (State) لتخزين نص التنبيه عند الضغط على الأزرار
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [borderColor, setBorderColor] = useState<string>("transparent");

  const handleButtonClick = (type: "github" | "projects") => {
    if (type === "github") {
      setAlertMessage("جاري الانتقال إلى حساب GitHub الخاص بي...");
      setBorderColor("#c084fc");
    } else if (type === "projects") {
      setAlertMessage(
        "مرحباً بك! هذه الصفحة هي أولى مشاريعي المرفوعة من الموبايل.",
      );
      setBorderColor("#38bdf8");
    }
  };

  return (
    <div className="card">
      <div className="profile-img">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="9" r="4.5" stroke="#a855f7" strokeWidth="2" />
          <path
            d="M5 19C5 15.6863 8.13401 13 12 13C15.866 13 19 15.6863 19 19"
            stroke="#a855f7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h2>يوسف</h2>
      <p className="title">مطور ويب محترف</p>

      <div className="links">
        <button className="btn" onClick={() => handleButtonClick("github")}>
          حساب GitHub
        </button>
        <button className="btn" onClick={() => handleButtonClick("projects")}>
          مشاريعي
        </button>
      </div>

      {alertMessage && (
        <div className="alert-box" style={{ borderColor: borderColor }}>
          {alertMessage}
        </div>
      )}
    </div>
  );
}

export default App;
