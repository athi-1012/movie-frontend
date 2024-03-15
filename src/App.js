import './App.css';
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { Routes,Route} from 'react-router-dom';
import Portal from './Portal';
import NotFound from './NotFound';
import Movie from './Movie';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';


function App() {
  const[mode,setMode]=useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
     
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="addmovie" element={<AddMovie/>}/>//dont give slash to child node
          <Route path="movie" element={<MovieList/>}/>
          <Route path="edit/:id" element={<EditMovie/>}/>
          <Route path="view/:id" element={<MovieDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
