import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wripper">
        <Header />
        <Navbar />
        <div className="app-wripper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
              createNewPost={props.createNewPost}
              changeNewPostText={props.changeNewPostText} 
              />} />
            <Route path="/messages/*" element={<Messages messagesPage={props.state.messagesPage}
             createNewMess={props.createNewMess} 
             changeNewMessText={props.changeNewMessText}
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
