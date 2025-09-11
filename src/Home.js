import './App.css';
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portal from './Portal';
import NotFound from './NotFound';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';
import Home from './Home'; 

function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [mode, setMode] = useState("dark");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const darkTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/portal"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Portal mode={mode} setMode={setMode} setIsLoggedIn={setIsLoggedIn} />
              </ProtectedRoute>
            } 
          >
            <Route path="addmovie" element={<AddMovie />} />
            <Route path="movie" element={<MovieList />} />
            <Route path="edit/:id" element={<EditMovie />} />
            <Route path="view/:id" element={<MovieDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
