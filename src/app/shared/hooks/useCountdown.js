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
  const [left, setLeft] = useState(countDownDate);

  const pauseClock = () => {
    const [a, b, c, t] = getReturnValues(countDownDate);
    setPause(true);
    setLeft(t);
  };

  const resumeClock = () => {
    setPause(false);
    setCountDownDate(new Date().getTime() + left);
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

  return [minutes, seconds, setPause, total, setResume];
};

export { useCountdown };
