const Navbar = () => {
  return (
    <nav>
       <header id="header" className="header dark-background d-flex flex-column">
    <button id="sidebarToggle" className="header-toggle" aria-label="Toggle navigation">
      <i className="bi bi-list" id="toggleIcon" /> {/* Hamburger icon */}
    </button>
    <div className="profile-img">
      <img src="/my-portfolio/assets/img/okk.png" alt="Profile" className="img-fluid rounded-circle" style={{width: 160, maxWidth: '100%', height: 155}} />
    </div>
    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="/my-portfolio/assets/img/logo.png" alt=""> */}
      <h1 className="sitename">Mussadiq Ali</h1>
    </a>
    <div className="social-links text-center">
      <a href="https://github.com/MussadiqAli15671" className="github"><i className="bi bi-github" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" className="google-plus"><i className="bi bi-skype" /></a>
      <a href="https://www.linkedin.com/in/mussadiqaliprogrammer/" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon" />Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon" /> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon" /> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon" /> Portfolio</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon" /> Services</a></li>
        {/* <li class="dropdown"><a href="#"><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
    <ul>
      <li><a href="#">Dropdown 1</a></li>
      <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="#">Deep Dropdown 1</a></li>
          <li><a href="#">Deep Dropdown 2</a></li>
          <li><a href="#">Deep Dropdown 3</a></li>
          <li><a href="#">Deep Dropdown 4</a></li>
          <li><a href="#">Deep Dropdown 5</a></li>
        </ul>
      </li>
      <li><a href="#">Dropdown 2</a></li>
      <li><a href="#">Dropdown 3</a></li>
      <li><a href="#">Dropdown 4</a></li>
    </ul>
  </li> */}
        <li><a href="#contact"><i className="bi bi-envelope navicon" /> Contact</a></li>
      </ul>
    </nav>
  </header>
    </nav>
  );
};

export default Navbar;
