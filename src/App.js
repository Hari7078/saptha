import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme } from './theme/darktheme';
import Navbar from './Page/Navbar/Navbar';




function App() {
  return (
    
     <ThemeProvider theme={darkTheme} >

      <Navbar/>

     </ThemeProvider>
   
  );
}

export default App;