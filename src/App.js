import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="title">DICTIONARY</p>
          </div>
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
