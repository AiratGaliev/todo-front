import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class StatusFilter extends Component {
  render() {
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Done</Button>
      </ButtonGroup>
    );
  }
}

export default StatusFilter;
