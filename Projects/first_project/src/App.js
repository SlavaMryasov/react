import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wripper">
        <Header />
        <Navbar />
        <div className="app-wripper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
            <Route path="/messages/*" element={<MessagesContainer messagesPage={props.state.messagesPage}
              dispatch={props.dispatch}
            />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
