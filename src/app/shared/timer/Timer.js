import './Timer.css';
import { useCountdown } from '../hooks/useCountdown';
import { Button } from '@mui/material';

const Timer = ({ passedTime }) => {
  const [minutes, seconds, pause, resume] = useCountdown(passedTime);

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  return (
    <div className="Timer">
      {minutes + seconds <= 0 ? (
        <h1>Expired!</h1>
      ) : (
        <div>
          <h1>
            {zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
          </h1>
          <div className="buttons-container">
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => resume()}
            >
              START
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => pause()}
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
