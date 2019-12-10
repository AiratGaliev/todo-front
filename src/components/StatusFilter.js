import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class StatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const variant = isActive ? 'contained' : 'outlined';
      return (
        <Button
          key={name}
          variant={variant}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </Button>
      );
    });
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {buttons}
      </ButtonGroup>
    );
  }
}

export default StatusFilter;
