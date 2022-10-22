import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
