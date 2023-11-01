import Navbar from "../../components/Navbar/index";
import "./index.css";
import logo from "../../components/images/logo.png";

function SignIn() {
  return (
    <>
      <SignInForm />
    </>
  );
}

function SignInForm() {
  return (
    <>
      <div className="signincontain">
        <div className="signininnercontain">
          <nav style={{ marginTop: "20px" }}>
            <a
              href="/"
              className="logo"
              style={{ position: "relative", left: "-85%", top: "-20px" }}
            >
              <img src={logo} alt="logo" />{" "}
            </a>

            <ul className="navbarlist">
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li className="hide">|</li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li className="hide">|</li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <div className="signinform">
            <section className="signin-head">
              <span style={{ fontSize: "35px", fontWeight: "500" }}>
                Welcome Back
              </span>
              <br />
              <span
                style={{ color: "rgba(134, 134, 134, 1)", fontSize: "20px" }}
              >
                Reconnect with your AgroCart Account for seamless access.
              </span>
            </section>
            <section className="signin-content">
              <div>
                <span>Username or Email</span>
                <input
                  type="text"
                  placeholder="Enter your Username or Email"
                ></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>Password</span>
                <input type="text" placeholder="Enter your Password"></input>
              </div>
              <span style={{ paddingTop: "35px !important" }}>
                <a href="#">Forget Password?</a>
              </span>
              <div style={{ marginTop: "10px" }}>
                <button className="add-to-cart" style={{ width: "100%" }}>
                  <span className="text">Sign-in</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
