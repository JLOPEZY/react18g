import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

//Components
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/profile/ProfileContainer";

function App() {
  return (
    <div className="App">
     

      <Routes>

        <Route path="/" element={<p>Landing page</p>} />
        <Route path="login" element={<p>Login</p>} />
        <Route path="signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
              <Route path="profile" element={<ProfileContainer />} >
                <Route path="detail" element={<p>Detail</p>} />
                <Route path="edit" element={<p>Edit</p>} />
              </Route>

            
            
        </Route>

          

      </Routes>

    </div>
    
  );
}

export default App;

{/* <Route path="profileContainer" element={<ProfileContainer />}>
                <Route index element={<Home />} />
                <Route path="edit" element={<p>Edit</p>} />
                <Route path="detail" element={<p>Detail</p>} />
            </Route> */}