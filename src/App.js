import './App.css';
import Blog from './Blog.js';
import Home from "./pages/home.js";
// import About from "./pages/about.js";
//import Projects from "./pages/Project.js";
//import Contact from "./pages/contact.js";
import Footer from './pages/footer.js';


function App() {
  return (
    <div className="App">
      <Blog/>
      <Home/>
      {/* <Projects/>
      <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
