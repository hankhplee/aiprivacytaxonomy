import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Tooltip } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    marginTop: 35,
    height: '100vh',
    width: '100px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: '50px', // Increased circle size
    height: '50px', // Increased circle size
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out', // Smooth transition
    '&:hover': {
      backgroundColor: '#999',
    },
  },
  circleText: {
    fontSize: '14px', // Increased text size
    color: '#fff',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      {[...Array(12).keys()].map((index) => (
        <Tooltip key={index} title={`Item ${index + 1}`} placement="right">
          <div className={classes.circle}>
            <Typography className={classes.circleText}>{index + 1}</Typography>
          </div>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Sidebar;
