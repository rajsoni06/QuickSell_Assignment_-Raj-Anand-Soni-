import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/TopNav/TopNav';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';



/*const TaskCard = ({ status, title, userInitials, priority }) => {
  return (
    <div className={`card ${priority}`}>
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <div className="user">
        <span>{userInitials}</span>
      </div>
    </div>
  );
};

// The main app component
const App = () => {
  // This would be fetched from an API in a real app
  const tasks = [
    {
      id: 'CAM-5',
      status: 'Todo',
      title: 'Add Multi-Language Support',
      userInitials: 'AS',
      priority: 'medium'
    },
    // ... other tasks
  ];

  // Group tasks by status
  const groupedTasks = tasks.reduce((acc, task) => {
    acc[task.status] = [...(acc[task.status] || []), task];
    return acc;
  }, {});

  return (
    <div className="app">
      {Object.entries(groupedTasks).map(([status, tasks]) => (
        <div key={status} className="taskColumn">
          <h2>{status}</h2>
          {tasks.map(task => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;*/



const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])


 /*return (
    <div className="app">
      {Object.entries(groupedTasks).map(([status, tasks]) => (
        <div key={status} className="taskColumn">
          <h2>{status}</h2>
          {tasks.map(task => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      ))}
    </div>*/


  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App