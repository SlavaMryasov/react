import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Profile/Profile";

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