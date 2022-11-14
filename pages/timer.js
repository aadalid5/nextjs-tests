import React, { useState, useEffect } from "react";

const getCurrentTimestamp = () => new Date().toLocaleTimeString();

const Timer = () => {
  const [time, setTime] = useState(getCurrentTimestamp());
  useEffect(() => {
    let refresh = setInterval(() => {
      setTime(getCurrentTimestamp());
    }, 1000);
    return () => {
      clearInterval(refresh);
    };
  }, []);
  return <div>The time is {time}</div>;
};

export default Timer;