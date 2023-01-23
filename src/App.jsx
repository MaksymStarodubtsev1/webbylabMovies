import {Provider} from 'react-redux'
import {store} from "./store";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Header} from "./components/header/Header";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="movies" element={<Header />} />
          </Routes>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
