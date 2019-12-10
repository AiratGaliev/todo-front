import React, { Component } from 'react';
import StatusFilter from './StatusFilter';
import { TextField, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  searchPanel: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    justify: 'center',
    alignItems: 'center'
  }
});

class SearchPanel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        className={classes.searchPanel}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-search"
            label="type to search"
            type="search"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatusFilter />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchPanel);
