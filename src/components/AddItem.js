import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  addButton: {
    color: 'inherit',
    marginLeft: theme.spacing(2)
  }
});

class AddItem extends Component {
  render() {
    const { classes, onAddedItem } = this.props;
    return (
      <Button
        variant="outlined"
        className={classes.addButton}
        onClick={() => onAddedItem('Hello World!')}
      >
        Add
      </Button>
    );
  }
}

export default withStyles(styles)(AddItem);
