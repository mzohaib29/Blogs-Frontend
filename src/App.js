// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import Nav from './components/Nav';
import Home from "./components/Home";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";
import AllBlogs from "./components/All_Blogs";
import LoginForm from "./LoginForm";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/authContext";
import SignupForm from "./SignupForm";
import OurStory from "./OurStory";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 24)",
        text: "rgba (29 ,29, 29, .8)",
        white: "fff",
        black: "#212529",
        helper: "#8490ff",
        bg: "#F6F8FA",
        footer_bg: "#0a1435",
        btn:"rgb(98 84 243)",
        border: "rgba (98, 84, 243, 0.5)",
        hr: "#ffffff",
        gradient:
        "Linear-gradient (0deg, rgb(132 144 255) 0%, rgb(98 189 252 100%) ",
        shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px Opx 1px;",
        shadowSupport :" rgba (0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  

  return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Nav />
            <Routes>
                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} exact/>
                    <Route path="/SingleBlog/:id" element={<SingleBlog />}/>
                    <Route path="/CreateBlog" element={<CreateBlog />}/>
                    <Route path="/AllBlogs" element={<AllBlogs />}/>
                    <Route path="/OurStory" element={<OurStory />}/>
                </Route>
                <Route path="/Login" element={<LoginForm />}/>
                <Route path="/Signup" element={<SignupForm />}/>
            </Routes>
          </Router>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
