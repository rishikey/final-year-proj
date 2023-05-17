 /* 
  ॥जय श्री राम ॥
  ॥ श्री गणेशाय नमः ॥
it's the WILL not the skill
 */
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from'./components/navbar.js'
import Lab from './components/Labsection/Lab.js'
import Content from './components/Content'
function App() {
  return (  
<>
<div >
<Router style={{"margin":"0px","border":"0px","padding":"0px" }}>
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar" style={{"margin":"0px","border":"0px","background":"purple","padding":"0px","overflow-x":"hidden"}}>
      <a className="navbar-brand" href="/">ImAble</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to="/Labs">|Labs</Link>
          </li>
          <li className="nav-item  ml-auto">
            <Link to="/">join</Link>
          </li>

        </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Labs" element={<Lab />} />
        
      </Routes>
    </Router>


</div>
</>
  );
}

export default App;
