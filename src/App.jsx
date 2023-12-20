import Home from "./routes/Home";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Home/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
