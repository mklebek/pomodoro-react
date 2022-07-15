import './App.css';
import Timer from './app/shared/timer/Timer';

function App() {
  const countDownTimer = 25;

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <Timer passedTime={countDownTimer} />
    </div>
  );
}

export default App;
