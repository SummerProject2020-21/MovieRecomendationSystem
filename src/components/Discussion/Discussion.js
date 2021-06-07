import React from "react";
import "./Discussion.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
export default function Discussion() {
  return (
    <div>
      <Paper elevation={3} className="DiscussionPaper">
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ float: "left", width: "50%" }}>
            <h1 style={{ margin: "0px", padding: "0px" }}>Heading</h1>
          </div>
          <div style={{ width: "50%" }}>
            <div style={{ float: "right" }}>
              {" "}
              <IconButton aria-label="upload picture" component="span">
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#e1e5ea",
                    borderRadius: "30%",
                    padding: "3px",
                  }}
                >
                  <div>
                    <ThumbUpIcon style={{ color: "green" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                      }}
                    >
                      12
                    </p>
                  </div>
                </div>
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#e1e5ea",
                    borderRadius: "30%",
                    padding: "3px",
                  }}
                >
                  <div>
                    <ThumbDownIcon style={{ color: "red" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                      }}
                    >
                      12
                    </p>
                  </div>
                </div>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="DiscussionContent">
          <p style={{ marginTop: "0px" }}>
            <br />
            <span
              style={{
                fontSize: "1rem",
                color: "#8b8b8b",
                fontStyle: "italic",
                fontWeight: "bold",
                margin: "0px",
                padding: "0px",
              }}
            >
              Posted by: Name
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
            odio. Praesent convallis urna a lacus interdum ut hendrerit risus
            congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
            ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla
            congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            Cras ac leo purus. Mauris quis diam velit.
            <br />
            <span
              style={{
                fontSize: "1rem",
                color: "#8b8b8b",
                fontStyle: "italic",
                fontWeight: "bold",
                margin: "0px",
              }}
            >
              Posted on: date
            </span>
            <br />
            <br />
          </p>
        </div>

        <div className="CommentBox">
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "auto",
              margin: "auto",
            }}
          >
            <div style={{ width: "90%" }}>
              <TextField
                id="outlined-secondary"
                label="Outlined secondary"
                variant="outlined"
                color="secondary"
                className="CommentBoxInput"
              />
            </div>
            <div
              style={{
                width: "10%",
                float: "right",
                padding: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    float: "left",
                    width: "100%",
                    hight: "100%",
                    padding: "auto",
                    margin: "auto",
                    paddingLeft: "3px",
                  }}
                >
                  <div className="DiscussBtn">
                    {/* <Button variant="contained" color="primary">
                      <b>Submit</b>
                    </Button> */}
                    <button id="btn">
                      <p id="btnText">Submit</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Comments:</h2>
          <div style={{ width: "100%", borderBottom: "1px solid black" }}>
            <h3>Name</h3>
            <p>Comment</p>
          </div>
        </div>
      </Paper>
    </div>
  );
}
