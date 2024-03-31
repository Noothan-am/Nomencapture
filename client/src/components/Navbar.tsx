const styles = require("../styles/navbar.module.css").default;
function Navbar() {
  
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className={styles["li"]}>
              <a href="/ram">Profile</a>
            </li>
            <li className={styles["li"]}>
              <a href="/ram">Packages</a>
            </li>
            <li className={styles["li"]}>
              <a href="/login">Log Out</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
