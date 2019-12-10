import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import List from '@material-ui/core/List';
import { ListItem, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toDoList: {
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  }
});

class TodoList extends Component {
  render() {
    const { classes } = this.props;
    const { todos } = this.props;
    const elements = todos.map(item => {
      const { id, ...itemProps } = item;
      return (
        <div key={id}>
          <ListItem>
            <TodoListItem {...itemProps} />
          </ListItem>
          <Divider component="li" />
        </div>
      );
    });
    return <List className={classes.toDoList}>{elements}</List>;
  }
}

export default withStyles(styles)(TodoList);
