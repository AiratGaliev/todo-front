import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { IconButton } from '@material-ui/core';

const styles = theme => ({
  toDoListItem: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  text: {
    marginLeft: theme.spacing(2),
    flexGrow: 1
  },
  buttons: {
    marginRight: theme.spacing(2)
  }
});

class TodoListItem extends Component {
  render() {
    const { classes } = this.props;
    const { label, important = false } = this.props;
    const style = {
      color: important ? 'tomato' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
    return (
      <div className={classes.toDoListItem}>
        <span style={style} className={classes.text}>
          {label}
        </span>
        <div className={classes.buttons}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <PriorityHighIcon />
          </IconButton>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TodoListItem);
