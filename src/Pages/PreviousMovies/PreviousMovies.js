import React from "react";
import "./PreviousMovies.css";
export default function PreviousMovies() {
  return (
    <div className="signupbody">
      <div class="prevmoviecontainer">
        <div
          className="prevmoviecontainer-box"
          style={{ borderRight: "2px solid white", paddingRight: "20px" }}
        >
          <span className="pageTitle">WATCH LIST</span>
          <form>
            <label>Movie Name</label>
            <br />
            <input type="text" />
            <br />
            <label>Rating</label>
            <br />
            <input type="number" />
            <br />
            <button>Add</button>
            <br />
            <br />
          </form>
        </div>
        <div className="prevmoviecontainer-box">
          <span className="pageTitle">PREVIOUS MOVIES</span>
          <p>
            Spiderman - 4.3
            <hr />
            Batman - 4.5{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
