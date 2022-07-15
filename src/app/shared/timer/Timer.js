import { useCountdown } from '../hooks/useCountdown';
import { Button } from '@mui/material';

const Timer = ({ passedTime }) => {
  const [minutes, seconds, setPause, t, resume] = useCountdown(passedTime);

  return (
    <div>
      {minutes + seconds <= 0 ? (
        <h1>Expired!</h1>
      ) : (
        <div>
          <h1>
            {minutes}:{seconds}
          </h1>
          <div className="buttons-container">
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => resume(false)}
            >
              START
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setPause(true)}
            >
              PAUSE
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
