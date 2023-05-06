






export default function navbar(){
  return (  

  <>
   
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="/">ImAble</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Labs</a>
      </li>
      <li className="nav-item dropdown ml-auto  " style={{align:"right"}}>
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Join 
        </a>
        <div className="mr-sm-2 my-lg-0 dropdown-menu " aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Signin</a>
          <a className="dropdown-item" href="/" align="right">Signup</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Donate</a>
        </div>
      </li>
     
    </ul>
    
  </div>
</nav>

    
    
  </>
);


};