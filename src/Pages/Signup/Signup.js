import React from "react";
import "./Signup.css";
export default function Signup() {
  console.log("Signup page");
  return (
    <div className="signupbody">
      <div class="signupcontainer">
        <span className="pageTitle">Sign Up</span>
        <form>
          <label>First Name</label>
          <br />
          <input type="text" />
          <label>Last Name</label>
          <br />
          <input type="text" />
          <br />
          <label>Email Address</label>
          <br />
          <input type="text" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          <button>Create Account</button>
          <br />
          <br />
          <a href="/signin" className="signupa">
            Dont have an account?
          </a>
        </form>
      </div>
    </div>
  );
}
