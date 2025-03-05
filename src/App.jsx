import { useState } from 'react';
import Profile from './components/Profile';
import Repos from './components/ReposProfile';
import WebHeader from './components/WebHeader';

function App() {
  const [username, setUsername] = useState();
  
  return (
    <div className="container">  
      <WebHeader />      
      
      <input type="text" placeholder='Username' onBlur={(e) => setUsername(e.target.value)}/>

      <Profile user={username}/>
      <Repos user={username}/>
    </div>
  )

}

export default App
