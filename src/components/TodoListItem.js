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
  textDone: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    textDecoration: 'line-through'
  },
  textImportant: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: 'steelblue',
    fontWeight: 'bold'
  },
  buttons: {
    marginRight: theme.spacing(2)
  }
});

class TodoListItem extends Component {
  render() {
    const { classes } = this.props;
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;
    let classNames = classes.text;

    if (done) {
      classNames = classes.textDone;
    }

    if (important) {
      classNames = classes.textImportant;
    }

    return (
      <div className={classes.toDoListItem}>
        <span className={classNames} onClick={onToggleDone}>
          {label}
        </span>
        <div className={classes.buttons}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={onToggleImportant}
          >
            <PriorityHighIcon />
          </IconButton>
          <IconButton aria-label="delete" color="secondary" onClick={onDeleted}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TodoListItem);
