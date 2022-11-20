import React, { useState, useEffect } from "react";
import styles from "./TimeSection.module.scss";

function TimeSection() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className={styles.time}>
      <h1>
        {dateState.toLocaleString("ru-RU", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </h1>
    </div>
  );
}

export default TimeSection;
