import useAuth from ".././context/AuthContext";
const styles = require("../styles/navbar.module.css").default;
function Navbar() {
  const auth: any = useAuth();

  const handleLogout = async () => {
    await auth.logout();
    window.location.reload();
  };
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className={styles["li"]}>
              <button>Profile</button>
            </li>
            <li className={styles["li"]}>
              <button>Packages</button>
            </li>
            <li className={styles["li"]}>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
