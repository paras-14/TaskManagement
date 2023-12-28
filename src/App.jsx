import Home from "./routes/Home";
import { BrowserRouter } from 'react-router-dom';
import RouteChangeHandler from "./utils/RouteHandler";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RouteChangeHandler/>
          <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
