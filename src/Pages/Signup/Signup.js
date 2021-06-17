import React from "react";
import "./Signup.css";
import { useHistory } from "react-router-dom";

export default function Signup() {
  console.log("Signup page");
  const [value, setValue] = React.useState(13);
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  var ok = 0;

  React.useEffect(() => {
    if (value === 14) {
      history.push("/signin");
    }
  }, [value, history]);

  function Auth() {
    setValue(14);
  }

  function Submit() {
    fetch(process.env.REACT_APP_BACKEND_API + "api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Success") {
          localStorage.setItem("email", result.user.email);
          localStorage.setItem("name", result.user.firstName);
          localStorage.setItem("uid", result.user.uid);
          console.log(result.user);
          alert(result.message);
          ok = 1;
        } else {
          ok = 0;
          alert(result.message);
        }
      })
      .then(() => {
        if (ok) window.location.reload(false);
      });
  }

  return (
    <div className="signupbody">
      <div class="signupcontainer">
        <span className="pageTitle">Sign Up</span>
        <form>
          <label>First Name</label>
          <br />
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <label>Last Name</label>
          <br />
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <br />
          <label>Email Address</label>
          <br />
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={Submit}>
            Create Account
          </button>
          <br />
          <br />
          <a className="signupa" onClick={Auth}>
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
}
