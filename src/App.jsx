import {Provider} from 'react-redux'
import {store} from "./store";
import './App.css';
import {Register} from "./pages/auth/Register";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Register />
        </main>
      </div>
    </Provider>
  );
}

export default App;
