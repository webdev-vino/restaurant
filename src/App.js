
import "./App.css";
import Cheff from "./components/Cheff";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";
import Quality from "./components/Quality";

function App() {
  return (
    <div className="App">
        <Header />
        <History />
        <Quality />
        <Cheff />
        <Footer />
    </div>
  );
}

export default App;
