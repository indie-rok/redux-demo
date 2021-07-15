import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState({name: 'Emmanuel', favoriteFood: 'Pizza'})

  return (
    <div className="App">
      <Navbar user={user} />

      <article>
        My content
      </article>

    </div>
  );
}

export default App;
