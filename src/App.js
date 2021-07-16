import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content'
import { Provider } from 'react-redux'

import store from './redux/store'

function App() {
  const [user, setUser] = useState({ name: 'Emmanuel', favoriteFood: 'Pizza' })

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar user={user} />

        <Content user={user} setUser={setUser} />

      </div>
    </Provider>

  );
}

export default App;
