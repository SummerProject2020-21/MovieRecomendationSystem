import React, { useEffect } from "react";
import "./Header.css";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
  },
};

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  var subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [heading, setHeading] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tags, setTags] = React.useState("");
  var ok = 0;

  function Submit() {
    ok = 0;
    fetch(process.env.REACT_APP_BACKEND_API + "api/discussion/adddiscussion", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading: heading,
        description: description,
        userId: localStorage.getItem("uid"),
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          console.log(result.message);
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

  const history = useHistory();
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          boxShadow: "1px 1px 5px black",
          color: "white",
          zIndex: "100",
        }}
      >
        <div style={{ width: "100%" }}>
          <span className="header">
            <Fade top> 🎬 Movie Recommendation System</Fade>
          </span>
        </div>

        {localStorage.getItem("uid") !== null && (
          <div
            style={{
              float: "right",
              background: "gray",
              paddingTop: "16px",
              paddingLeft: "27px",
              cursor: "pointer",
            }}
            onClick={(e) => setIsOpen(true)}
          >
            <AddToPhotosIcon style={{ height: "30px", width: "40px" }} />
            Create
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}> </h2>
        <div style={{ float: "right" }}>
          {/* <FaWindowClose onClick={closeModal} /> */}
        </div>
        {/* <br /> */}
        <div class="container">
          <div class="formHolder">
            <div class="formHeader">
              <p>Create Feed</p>
            </div>
            <form>
              <div>
                <h5>Heading</h5>
                <input
                  placeholder="Title"
                  className="inputt"
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
              <div>
                <h5>Tags</h5>
                <input
                  placeholder="#tag1 #tag2 #tag3"
                  className="inputt"
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div>
                <h5>Description</h5>
                <textarea
                  style={{ width: "350px", height: "100px" }}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button type="button" className="button1" onClick={Submit}>
                  POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
