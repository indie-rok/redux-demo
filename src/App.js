import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content'

function App() {
  const [user, setUser] = useState({name: 'Emmanuel', favoriteFood: 'Pizza'})

  return (
    <div className="App">
      <Navbar user={user} />

      <Content user={user} setUser={setUser} />

    </div>
  );
}

export default App;
