import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    if (pause) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [pause, countDownDate]);

  return getReturnValues(countDown, setPause);
};

const getReturnValues = (countDown, setPause) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds, setPause];
};

export { useCountdown };
