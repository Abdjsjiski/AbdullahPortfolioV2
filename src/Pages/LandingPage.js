import './LandingPage.css';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useState, useEffect, useRef } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UsbIcon from '@mui/icons-material/Usb';
import Modal from "./Modal"
import { CSSTransition } from 'react-transition-group';
import LockIcon from '@mui/icons-material/Lock';
import ReactDOM from 'react-dom/client';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Login from './SignInSignUp/Login';
import CookieIcon from '@mui/icons-material/Cookie';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Signup from './SignInSignUp/Register';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PolicyIcon from '@mui/icons-material/Policy';
import InfoIcon from '@mui/icons-material/Info';
import TypeWriterEffect from 'react-typewriter-effect';
let root = null
root = ReactDOM.createRoot(document.getElementById('root'));
function Logging(){
  root.render(
    <Login />
  )
}
function Register(){
  root.render(
    <Signup />
  )
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <b className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </b>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <b className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </b>
    );
  }
 
  

  return (
    
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<LockOpenIcon />}
            goToMenu="settings">
            SignIn and Signup
          </DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            goToMenu="animals">
            Documentation
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}>
            <h2>Go Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<LockIcon />}><button onClick={Logging}>Log In</button></DropdownItem>
          <DropdownItem leftIcon={<LockIcon />}><button onClick={Register}>Register</button></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}>
            <h2>Go Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MilitaryTechIcon/>}> <a href="https://docs.google.com/document/d/1PypOu-F2t7ar61AjIOjEE1MvWGjN-eYztyMCJTdxco4/edit" target="_blank" rel="noreferrer nofollow" >Credits / Disclaimer</a></DropdownItem>
          <DropdownItem leftIcon={<NoteAltIcon/>}> <a href="https://docs.google.com/document/d/1RDeBLVHQaY_MQDHz9V6sPYt3Pn46DLfTRGzsvH61KXw/edit" target="_blank" rel="noreferrer nofollow" >Terms of Conditions</a> </DropdownItem>
          <DropdownItem leftIcon={<AccessibilityIcon/>}> <a href="https://docs.google.com/document/d/1k3PhYMJeK8cVYZ4mw4ljmmV4ESkTY7KQm_pKFf2ZyY8/edit?usp=sharing" target="_blank" rel="noreferrer nofollow" >Accessibility</a> </DropdownItem>
          <DropdownItem leftIcon={<PolicyIcon/>}> <a href="https://docs.google.com/document/d/13nK7zk81KKkTlhgNNZCcxBso3Vt_Ut45oRDeOMkpfR0/edit" target="_blank" rel="noreferrer nofollow" >Privacy / Security / Data Collection and Mangament</a></DropdownItem>
          <DropdownItem leftIcon={<CookieIcon/>}> <a href="https://docs.google.com/document/d/1bwoxrFEAi7wqnCqYezyZdCIS0SFU6UnKWjmBi6hqd2w/edit" target="_blank" rel="noreferrer nofollow" >Cookie Usage / Cookie Policy</a> </DropdownItem>
          <DropdownItem leftIcon={<CopyrightIcon/>}> <a href="https://docs.google.com/document/d/1AE1JTCLhnSIs-igztBOMIPANsnjrRmdycPQuCEHWuW0/edit" target="_blank" rel="noreferrer nofollow" >Copyrighting</a> </DropdownItem>
          <DropdownItem leftIcon={<ReportGmailerrorredIcon/>}> <a href="https://docs.google.com/document/d/1dsy7D49HQjwCX5Jc7KudmNleQIsriZtVmKfOqxGRT3w/edit" target="_blank" rel="noreferrer nofollow" >Anti Spam Laws</a></DropdownItem>
          <DropdownItem leftIcon={<UsbIcon/>}> <a href="https://docs.google.com/document/d/1WeZEdoiR0kpILg7NzN16xM5O4WPVOjs7TCyp_pJvYD8/edit?usp=sharing" target="_blank" rel="noreferrer nofollow" > Version Control</a></DropdownItem>
          <DropdownItem leftIcon={<InfoIcon/>}> <a href="https://forms.gle/XWdb1RKJ2zPRLg1y7" target="_blank" rel="noreferrer nofollow" >DSAR (Delete / Give me the data you own)</a></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
  <div className="body">
    <Navbar className="primary-header">
    <div className="notadropdown">
      <b className="c"> Published and Copyrighted in 2023 &copy; Abdullah Khan | Khan Studios</b>
    <div className="notadropdown-content">
        <img className="image" src={require('../assets/nav.png')} alt="nav" width="250px" height="250px" />
    </div>
  </div>
  <button onClick={() => setIsOpen(true)}>Instructions</button>
  <Modal open={isOpen} onClose={() => setIsOpen(false)} className="modal">
    <div className="modal-info">
    <h1 className="title-card">Hello User Welcome to the Instructions</h1>
    <h2 className="nUser">New User: </h2>
    <ol>
      <li>Firstly Welcome!</li>
      <li>Click on the Home Icon (Top left of the Navigation Bar)</li>
      <li>Click on Sign in and Sign up</li>
      <li>Click on Sign up</li>
      <li>Make an Account WITH a FAKE EMAIL, PASSWORD & USERNAME</li>
      <h3 className="h333">This is an Interactive portfolio thats why theres a login and Signup view Credits in the documentation for more info</h3>
    </ol>
    <h2 className="rUser">Returning User: </h2>
    <ol>
      <li>Do the Same as above but go to Sign In and Sign In!</li>
    </ol>
    <h4>View other Documnetation by clicking on the Home Icon and documentation</h4>
    </div>
  </Modal>
          <NavItem icon={<HomeIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem> 
        </Navbar>    
  <section className="type-writer-effect">
  <TypeWriterEffect className="type-writer"
        textStyle={{
          fontFamily: 'Arial',
          color: 'red',
          fontWeight: 500,
          fontSize: '4rem',
          padding: "10rem 3rem 3rem 3rem", 
          textAlign: 'center',
          justifyContent: 'center',
          // Top, bottom, right, left
        }}
        startDelay={1000}
        cursorColor="red"
        multiText={[
        "Welcome TO",
        "Abdullah Khan's",
        "Portfolio",
        "A Front End",
        "Web Developer",
        "and Wordpress / any site builder Expert",
        "Click on Instructions To..",
        "View My Portfolio",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        hideCursorAfterText= {true}
      />  
       <div className="scroll-animation">
          <div className="scroll-letters">
            <span className="scroll-letters__letter" title="C">C</span>
            <span className="scroll-letters__letter" title="L">L</span>
            <span className="scroll-letters__letter" title="I">I</span>
            <span className="scroll-letters__letter" title="C">C</span>
            <span className="scroll-letters__letter" title="K">K</span>
            <span className="scroll-letters__letter" title=""> </span>
            <span className="scroll-letters__letter" title="I">I</span>
            <span className="scroll-letters__letter" title="N">N</span>
            <span className="scroll-letters__letter" title="S">S</span>
            <span className="scroll-letters__letter" title="T">T</span>
            <span className="scroll-letters__letter" title="R">R</span>
            <span className="scroll-letters__letter" title="U">U</span>
            <span className="scroll-letters__letter" title="C">C</span>
            <span className="scroll-letters__letter" title="T">T</span>
            <span className="scroll-letters__letter" title="I">I</span>
            <span className="scroll-letters__letter" title="O">O</span>
            <span className="scroll-letters__letter" title="N">N</span>





          </div>
        </div>
      </section>
  </div>
    

  );
}



export default LandingPage;