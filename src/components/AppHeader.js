import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appHeader: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-end'
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1
  },
  subtitle: {
    marginLeft: theme.spacing(3)
  }
});

class AppHeader extends Component {
  render() {
    const { classes } = this.props;
    const { toDo = 0, done = 0 } = this.props;
    return (
      <Grid container spacing={1} direction="row" className={classes.appHeader}>
        <Grid item xs={12} md={6} className={classes.title}>
          <Typography variant="h3" gutterBottom>
            To Do List
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            {toDo} more to do, {done} items
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AppHeader);
