import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  addItem: {
    margin: theme.spacing(1, 0, 0, 4)
  },
  addButton: {
    color: 'inherit',
    marginLeft: theme.spacing(2)
  }
});

class AddItem extends Component {
  state = {
    label: ''
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onAddedItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.addItem}
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <Input
          placeholder="Add task"
          inputProps={{ 'aria-label': 'description' }}
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <Button
          variant="outlined"
          className={classes.addButton}
          onClick={this.onSubmit}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(AddItem);
