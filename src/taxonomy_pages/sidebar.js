import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Tooltip } from '@mui/material';

//individual taxonomies icons
import ExposureIcon from '../images/ExposureIcon.png';
import DistortionIcon from '../images/DistortionIcon.png';
import DisclosureIcon from '../images/DisclosureIcon.png';
import IncreasedAccessibilityIcon from '../images/IncreasedAccessibilityIcon.png';
import SurveillanceIcon from '../images/SurveillanceIcon.png';
import IntrusionIcon from '../images/IntrusionIcon.png';
import IdentificationIcon from '../images/IdentificationIcon.png';
import AggregationIcon from '../images/AggregationIcon.png';
import PhrenologyPhysiognomyIcon from '../images/PhrenologyPhysiognomyIcon.png';
import SecondaryUseIcon from '../images/SecondaryUseIcon.png';
import ExclusionIcon from '../images/ExclusionIcon.png';
import InsecurityIcon from '../images/InsecurityIcon.png';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'fixed',
    top: 100,
    left: 0,
    paddingTop: 40,
    height: '100vh',
    width: '100px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '100vh',
    overflow: 'auto',
    borderRight: '1px solid gray',
    zIndex: 5
  },
  circle: {
    height: '5.25vh',
    borderRadius: '50%',
    marginBottom: '.75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#999',
    },
  },
  iconImg: {
    maxWidth: '90%',
    maxHeight: '90%',
  },
  tooltipText: {
    fontSize: '20px',
  },
}));

const fileNames = [
  'surveillance',
  'identification',
  'aggregation',
  'phrenology/physiognomy',
  'secondary use',
  'exclusion',
  'insecurity',
  'exposure',
  'distortion',
  'disclosure',
  'increased accessibility',
  'intrusion'
];

const filePaths = [
  'surveillance',
  'identification',
  'aggregation',
  'phrenology_physiognomy',
  'secondary_use',
  'exclusion',
  'insecurity',
  'exposure',
  'distortion',
  'disclosure',
  'increased_accessibility',
  'intrusion'
];

const fileImages = [
  SurveillanceIcon,
  IdentificationIcon,
  AggregationIcon,
  PhrenologyPhysiognomyIcon,
  SecondaryUseIcon,
  ExclusionIcon,
  InsecurityIcon,
  ExposureIcon,
  DistortionIcon,
  DisclosureIcon,
  IncreasedAccessibilityIcon,
  IntrusionIcon
];

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      {fileImages.map((icon, index) => (
        <Tooltip key={index} title={`${fileNames[index]}`} classes={{ tooltip: classes.tooltipText }} placement="right">
          <a href={`/aiprivacytaxonomy#/${filePaths[index]}`} className={classes.circle}>
            <img src={icon} alt={`${fileNames[index]} icon`} className={classes.iconImg} />
          </a>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Sidebar;