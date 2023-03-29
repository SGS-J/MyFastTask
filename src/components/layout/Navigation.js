import Link from "next/link";

function NavbarNotLogged() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href="/login">
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavbarLogged({ logoutUser, userLogged }) {
  const baseUrl = String("/user/" + userLogged);
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href={`${baseUrl}/me`}>
            Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={`${baseUrl}/tasks`}>
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={`${baseUrl}/config`}>
            Configuration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login" onClick={logoutUser}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Navigation({ userLogged, submitUser }) {
  const logoutUser = async () => {
    submitUser("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          MyFastTask
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {userLogged ? (
          <NavbarLogged logoutUser={logoutUser} userLogged={userLogged} />
        ) : (
          <NavbarNotLogged />
        )}
      </div>
    </nav>
  );
}
