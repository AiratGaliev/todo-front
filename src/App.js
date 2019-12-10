import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Roboto'
  },
  container: {
    justify: 'center',
    alignItems: 'center'
  }
}));

const App = () => {
  const classes = useStyles();
  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Make Awesome App', important: true },
    { id: 3, label: 'Have a lunh', important: false }
  ];
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        className={classes.container}
      >
        <Grid item xs={12}>
          <AppHeader />
          <SearchPanel />
          <TodoList todos={todoData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
