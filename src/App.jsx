import {Provider} from 'react-redux'
import {store} from "./store";
import './App.css';
import {Auth} from "./pages/auth/Auth";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Auth />
        </header>
      </div>
    </Provider>
  );
}

export default App;
