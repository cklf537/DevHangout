import React, {useEffect} from 'react';
import { Home } from './routes/home.route';
import {BrowserRouter} from 'react-router-dom';

function App() {
  useEffect(()=>{
    document.title = "Devhangout"
  },[])
  return (
    <BrowserRouter>
    <div className="container max-auto">
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
