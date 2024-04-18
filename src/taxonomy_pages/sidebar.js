import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Tooltip } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    marginTop: '6vh',
    height: '100vh',
    width: '100px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100vh',
    overflow: 'auto',
    borderRight: '1px solid gray',

  },
  circle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'white',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#999',
    },
  },
  circleText: {
    fontSize: '14px',
    color: 'black',
    textDecoration: 'none',
  },
}));

const fileNames = [
  'exposure',
  'distortion',
  'disclosure',
  'increased accessibility',
  'surveillance',
  'intrusion',
  'identification',
  'aggregation',
  'phrenology/physiognomy',
  'secondary use',
  'exclusion',
  'insecurity'
];

const filePaths = [
  'exposure',
  'distortion',
  'disclosure',
  'increased_accessibility',
  'surveillance',
  'intrusion',
  'identification',
  'aggregation',
  'phrenology_physiognomy',
  'secondary_use',
  'exclusion',
  'insecurity'
];

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar} >
      {[...Array(12).keys()].map((index) => (
        <Tooltip key={index} title={`${fileNames[index]}`} placement="right">
          <a href={`/${filePaths[index]}`} className={classes.circle}>
            <Typography className={classes.circleText}>{index + 1}</Typography>
          </a>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Sidebar;