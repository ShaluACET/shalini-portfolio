import './App.css';
function Blog() {
  return (
  <div className="background">
        <nav className="navbar">
          <div className="logo">Shalini Blog</div>
          <div className="menu">
            <button className="menu-item">Home</button>
            <button className="menu-item">About</button>
            <button className="menu-item">Services</button>
            <button className="menu-item">Contact</button>
          </div>
        </nav>
        <div>
          <nav className="header">
            <h5>Hey, I'M</h5>
            <h1>R SHALINI</h1>
            <p className="styled-paragraph">
              A frontend-focused Web Developer building the frontend of Websites & Web
              <br />
              Applications that lead to the success of overall projects
            </p>
          </nav>
        </div>
      </div>
      );
}
export default Blog;