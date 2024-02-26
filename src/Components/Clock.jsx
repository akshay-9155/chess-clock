import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaWindowClose } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Clock = ({ restart, formData }) => {
  const minuteStr = parseInt(formData.time);
  const [p1Playing, setP1Playing] = useState(true);
  const [p2Playing, setP2Playing] = useState(false);
  const [player1Time, setPlayer1Time] = useState({
    minutes: minuteStr,
    seconds: 0,
  });
  const [player2Time, setPlayer2Time] = useState({
    minutes: minuteStr,
    seconds: 0,
  });
  const [intervalIdP1, setIntervalIdP1] = useState(null);
  const [intervalIdP2, setIntervalIdP2] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalIdP1);
    };
  }, [intervalIdP1]);
  useEffect(() => {
    return () => {
      clearInterval(intervalIdP2);
    };
  }, [intervalIdP2]);

  const startTimerP1 = () => {
    setP1Playing(true);
    setP2Playing(false);
    clearInterval(intervalIdP2);
    const intervalP1 = setInterval(() => {
      setPlayer1Time((prevTime) => {
        let { minutes, seconds } = prevTime;
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalP1);
          return prevTime;
        }
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        return { ...prevTime, minutes, seconds };
      });
    }, 1000);
    setIntervalIdP1(intervalP1);
  };
  const startTimerP2 = () => {
    setP2Playing(true);
    setP1Playing(false);
    clearInterval(intervalIdP1);
    const intervalP2 = setInterval(() => {
      setPlayer2Time((prevTime) => {
        let { minutes, seconds } = prevTime;
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalP2);
          return prevTime;
        }
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        return { ...prevTime, minutes, seconds };
      });
    }, 1000);
    setIntervalIdP2(intervalP2);
  };

  const pause = () => {
    clearInterval(intervalIdP1);
    clearInterval(intervalIdP2);
  };
  const reset = () => {
    setPlayer1Time({
      minutes: minuteStr,
      seconds: 0,
    });
    setPlayer2Time({
      minutes: minuteStr,
      seconds: 0,
    });
    pause();
  };
  const formatter = (num) => {
    return num < 10 ? "0" + num : num;
  };
  return (
    <div className="select-none">
      <div className="timer flex flex-col sm:flex-row gap-10 mb-10">
        <div
          onClick={startTimerP2}
          className={`" ${
            p1Playing ? "bg-red-300" : "bg-green-300"
          } rounded-2xl p-10 sm:p-28 flex flex-col items-center hover:cursor-pointer"`}
        >
          <span className="text-3xl sm:text-5xl">{formData.player1Name}</span>
          <span className="text-8xl sm:text-9xl">
            {formatter(player1Time.minutes)}:{formatter(player1Time.seconds)}
          </span>
        </div>
        <div
          onClick={startTimerP1}
          className={`" ${
            p2Playing ? "bg-red-300" : "bg-green-300"
          } rounded-2xl p-10 sm:p-28 flex flex-col items-center hover:cursor-pointer"`}
        >
          <span className="text-3xl sm:text-5xl">{formData.player2Name}</span>
          <span className="text-8xl sm:text-9xl">
            {formatter(player2Time.minutes)}:{formatter(player2Time.seconds)}
          </span>
        </div>
      </div>
      <div className="controller flex text-6xl sm:text-8xl justify-between">
        <FaPlay onClick={startTimerP1} className="hover:cursor-pointer" />
        <FaPause onClick={pause} className="hover:cursor-pointer" />
        <GrPowerReset onClick={reset} className="hover:cursor-pointer" />
        <FaWindowClose onClick={restart} className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Clock;
