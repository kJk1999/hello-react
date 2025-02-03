import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div>
          <ul className="nav-bar-container">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header