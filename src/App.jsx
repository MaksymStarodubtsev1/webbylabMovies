import {Provider} from 'react-redux'
import {store} from "./store";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Main} from "./components/Main";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
