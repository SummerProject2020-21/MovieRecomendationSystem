import React from "react";

export default function Signin() {
  return (
    <div className="signupbody">
      <div class="signupcontainer">
        <span className="pageTitle">Sign In</span>
        <form>
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
          <a href="/signup" className="signupa">
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
}
