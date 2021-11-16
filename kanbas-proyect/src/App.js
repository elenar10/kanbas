import './App.css';
import React, { Fragment } from 'react'
import TaskList from './components/task-list'
import Header from './components/header'
import SearcherBar from './components/searcher-bar';
import DateProvider from './components/contexto/provider';
import FilterProvider from './components/contexto/context-filter/provider';
import { DateContext } from './components/contexto';
import { useContext } from 'react';
import { FilterContext } from './components/contexto/context-filter';

function App() {
  const [date, setDate] = useContext(DateContext);
  const [filterWord, setFilterWord] = useContext(FilterContext);

  return (
    <Fragment>
      <FilterProvider value={[filterWord, setFilterWord]}>
      <DateProvider value={[date, setDate]}>
        <Header></Header>
        <div className="main__container">
          <SearcherBar></SearcherBar>
          <TaskList title="To do"></TaskList>
          <TaskList title="In progress"></TaskList>
          <TaskList title="Done" remove="Clear All"></TaskList>
        </div>
      </DateProvider>
      </FilterProvider>
    </Fragment>
  );
}

export default App;
