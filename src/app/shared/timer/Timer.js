import { useCountdown } from '../hooks/useCountdown';

const Timer = ({ countDownDate }) => {
  const [minutes, seconds] = useCountdown(countDownDate);

  return (
    <div>
      {minutes + seconds <= 0 ? (
        <h1>Expired!</h1>
      ) : (
        <h1>
          {minutes}:{seconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
