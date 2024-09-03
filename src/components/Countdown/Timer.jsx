import React, { useState, useEffect } from "react";
import "./Timer.css";

function CountDown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    time_up: "",
  });

  useEffect(() => {
    const deadline = new Date("Sep 10, 2024 21:00:00").getTime();

    const count = () => {
      const now = new Date().getTime();
      const t = deadline - now;

      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);

      if (t < 0) {
        clearInterval(timer);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          time_up: "TIME IS UP",
        });
      } else {
        setTime({
          days: days < 10 ? "0" + days : days,
          hours: hours < 10 ? "0" + hours : hours,
          minutes: minutes < 10 ? "0" + minutes : minutes,
          seconds: seconds < 10 ? "0" + seconds : seconds,
        });
      }
    };

    const timer = setInterval(count, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{time.days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{time.hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{time.minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{time.seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
