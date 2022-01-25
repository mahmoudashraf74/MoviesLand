import classes from "./Header.module.css";
import SignInButton from "../Signin/SignInButton";

const Header = (props) => {
  return (
    <div className={classes.head}>
      <header className={classes.header}>
        <div className={classes.navbar}>
          <a className={classes.logo} href="/Movies">
            <span>Movies</span> <span>Land</span>
          </a>

          <nav className={classes.navItems}>
            <ul>
              <li>
                <a href="/Movies">Home</a>
              </li>
              <li>
                <a className={classes.navLink} href="#series">
                  Series
                </a>
              </li>
              <li>
                <a href="#Movies">Movies</a>
              </li>
              <li className={classes.navitem}>
                <a href="#New&popler">New & Populer</a>
              </li>
              <li>
                <a href="#Movies">My List</a>
              </li>
            </ul>
          </nav>

          <SignInButton />
        </div>
      </header>
    </div>
  );
};
export default Header;
