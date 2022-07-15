import './App.css';
import Timer from './app/shared/timer/Timer';

function App() {
  const countDownDate = new Date('Jan 5, 2024 15:37:25');

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <Timer countDownDate={countDownDate} />
    </div>
  );
}

export default App;
