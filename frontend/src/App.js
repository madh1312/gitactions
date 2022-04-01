import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [userName, setUsername] = useState('')

  useEffect(() => {
    getNames();
  },[])
  const getNames = async() => {
    const response = await axios.get('/names');
    console.log(response)
    setUsername(response.data)

  }
  return (
    <>
    <h1>my frontend</h1>
  <h3>my name is the {userName}</h3>
</>
  );
}

export default App;
