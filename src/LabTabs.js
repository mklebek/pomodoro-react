import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(items) {
  const [value, setValue] = React.useState(0);
  const [pomodoro, short, long] = items.props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Pomodoro time switch"
          centered={true}
        >
          <Tab label="Pomodoro" {...a11yProps(0)} />
          <Tab label="Short Break" {...a11yProps(1)} />
          <Tab label="Long Break" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {pomodoro}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {short}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {long}
      </TabPanel>
    </Box>
  );
}
