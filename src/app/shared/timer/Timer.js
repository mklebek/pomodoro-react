import { useCountdown } from '../hooks/useCountdown';

const Timer = () => {
  const countDownDate = new Date('Jan 5, 2024 15:37:25');
  const [minutes, seconds] = useCountdown(countDownDate);

  return (
    <h1>
      {minutes}:{seconds}
    </h1>
  );
};

export default Timer;
