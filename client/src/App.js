import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
import "./App.css"

function App() {
  return (
    <>
      <div className="container">
        <AddTask />
        <TaskList />
      </div>
    </>

  );
}

export default App;
