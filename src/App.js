import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddItem from './components/AddItem';

const styles = () => ({
  root: {
    fontFamily: 'Roboto'
  },
  container: {
    justify: 'center',
    alignItems: 'center'
  }
});

class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunh')
    ],
    term: ''
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  togglePropperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropperty(todoData, id, 'done')
      };
    });
  };

  onSerachChange = term => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { classes } = this.props;
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter(el => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column"
          className={classes.container}
        >
          <Grid item xs={12}>
            <AppHeader toDo={toDoCount} done={doneCount} />
            <SearchPanel onSerachChange={this.onSerachChange} />
            <TodoList
              todos={visibleItems}
              onDeleted={this.deleteItem}
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
            />
            <AddItem onAddedItem={this.addItem} />
          </Grid>
        </Grid>
      </div>
    );
  }
  const;
}

export default withStyles(styles)(App);
