import { useEffect, useState } from 'react';

const useCountdown = (passedTime) => {
  const timeInMinutes = passedTime * 60 * 1000;
  const [countDownDate, setCountDownDate] = useState(
    new Date().getTime() + timeInMinutes
  );

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  const [pause, setPause] = useState(false);
  const [remainingTime, setRemainingTime] = useState(countDownDate);

  const pauseClock = () => {
    if (!pause) {
      const [, , , , total] = getReturnValues(countDown);
      setPause(true);
      setRemainingTime(total);
    }
  };

  const resumeClock = () => {
    if (pause) {
      setPause(false);
      setCountDownDate(new Date().getTime() + remainingTime);
    }
  };

  useEffect(() => {
    setCountDown(countDownDate - new Date().getTime());

    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    if (pause) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [pause, countDownDate]);

  return getReturnValues(countDown, pauseClock, resumeClock);
};

const getReturnValues = (countDown, setPause, setResume) => {
  // calculate time left
  const total = countDown;
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds, setPause, setResume, total];
};

export { useCountdown };
