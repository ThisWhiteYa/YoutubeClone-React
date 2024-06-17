import "./Nav.css";
import YouTubeLogo from "./YouTubeLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

function Nav() {
    const profile_secsion = {height: '100%',width:'1.5rem'}
  return (
    <>
      <nav className="nav-container">
        <div className="navbar">
          <div className="logo">
            <div className="hamburger-menu">
              <RxHamburgerMenu />
            </div>
            <div className="youtube-icon">
              <YouTubeLogo />
              {/* <span>TH</span> */}
            </div>
          </div>
          <div className="search">
            <div className="search-bar">
              <input type="text" placeholder="ค้นหา" />
              <div className="search-icon">
                <button className="btn-search">
                  <CiSearch style={{ color: "white" ,width:'3rem'}} />
                </button>
              </div>
            </div>
            <div className="mic-icon">
              <IoMic style={{ color: 'white' ,height: '100%',width:'60%'}} />
            </div>
          </div>
          <div className="profile">
            <div className="create">
                <AiOutlineVideoCameraAdd style={{height: '100%',width:'1.25rem'}} />
            </div>
            <div className="notification">
                <IoIosNotificationsOutline style={profile_secsion} />
            </div>
            <div className="account-profile">
                <IoPersonCircle style={profile_secsion} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
