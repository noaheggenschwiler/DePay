import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LeftPanel from './LeftPanel.js';
import PriceFeed from './PriceFeed.js';
import Payment from './Payment.js';

function App() {
  return (
    <Stack direction = "row" spacing={2} justifyContent="space-evenly">
      <LeftPanel></LeftPanel>
      <Payment></Payment>
      <PriceFeed></PriceFeed>
    </Stack>
    
  );
}

export default App;
