import {Provider} from 'react-redux'
import {store} from "./store";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Header} from "./components/header/Header";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
