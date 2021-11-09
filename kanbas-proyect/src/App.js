import './App.css';
import React, { Fragment } from 'react'
import TaskList from './components/task-list'
import Header from './components/header'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className="main__container">
        <TaskList title="To do"></TaskList>
        <TaskList title="In progress"></TaskList>
        <TaskList title="Done" remove="Clear All"></TaskList>
      </div>
    </Fragment>
  );
}

export default App;
