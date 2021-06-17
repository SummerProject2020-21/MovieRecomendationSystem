import React from "react";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const [value, setValue] = React.useState(10);
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  var ok = 0;

  React.useEffect(() => {
    if (value === 11) {
      history.push("/signup");
    }
  }, [value, history]);

  function Auth() {
    setValue(11);
  }

  function Submit() {
    fetch(process.env.REACT_APP_BACKEND_API + "api/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          localStorage.setItem("email", result.user.email);
          localStorage.setItem("name", result.user.firstName);
          localStorage.setItem("uid", result.user._id);
          alert(result.message);
          ok = 1;
        } else {
          alert(result.message);
          ok = 0;
        }
      })
      .then(() => {
        if (ok == 1) window.location.reload(false);
      });
  }

  return (
    <div className="signupbody">
      <div class="signupcontainer">
        <span className="pageTitle">Sign In</span>
        <form>
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
            Login
          </button>
          <br />
          <br />
          <a className="signupa" onClick={Auth}>
            Don't have an account?
          </a>
        </form>
      </div>
    </div>
  );
}
