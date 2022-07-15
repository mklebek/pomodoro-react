import { useEffect, useState } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setInterval(timer, 1000);
  }, []);

  const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();

  function timer() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for minutes and seconds
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setMinutes(minutes);
    setSeconds(seconds);
    setDistance(distance);
  }

  return (
    <h1>
      {minutes}:{seconds}
    </h1>
  );
};

export default Timer;
