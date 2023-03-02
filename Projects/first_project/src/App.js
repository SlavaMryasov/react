import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Profile";

const App = () => {
  return (
    <div className="app-wripper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};

export default App;