import './App.css';
import React, { Fragment } from 'react'
import TaskList from './components/task-list'
import Header from './components/header'
import SearcherBar from './components/searcher-bar';
import DateProvider from './components/contexto/provider';
import { DateContext } from './components/contexto';
import { useContext } from 'react';


function App() {
  const [date, setDate] = useContext(DateContext);

  return (
    <Fragment>
      <DateProvider value={[date, setDate]}>
        <Header></Header>
        <div className="main__container">
          <SearcherBar></SearcherBar>
          <TaskList title="To do"></TaskList>
          <TaskList title="In progress"></TaskList>
          <TaskList title="Done" remove="Clear All"></TaskList>
        </div>
      </DateProvider>
    </Fragment>
  );
}

export default App;
