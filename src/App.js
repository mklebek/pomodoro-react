import './App.css';
import Timer from './app/shared/timer/Timer';
import BasicTabs from './LabTabs';

function App() {
  const pomodoroTimer = 25;
  const shortBreak = 5;
  const longBreak = 10;

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <BasicTabs
        props={[
          <Timer passedTime={pomodoroTimer} />,
          <Timer passedTime={shortBreak} />,
          <Timer passedTime={longBreak} />,
        ]}
      />
    </div>
  );
}

export default App;
