import React, { useState } from "react";
import Comments from "../Comments/Comments";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./ConversationSection.scss";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ConversationSection({
  comment,
  handleSubmit,
  handleDeleteComment,
  handleUpdateCommentLike,
}) {
  const [open, setOpen] = useState({ open: false, Transition: Fade });

  const handleClick = (Transition) => {
    setOpen({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setOpen({
      ...open,
      open: false,
    });
  };

  return (
    <section className="conversation">
      <h2 className="conversation__title">Join the Conversation</h2>
      <div className="conversation__wrapper">
        <img src={Avatar} alt="Avatar " className="avatar" />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();

            let name = e.target.name.value;
            let comment = e.target.comments.value;

            if (name && comment) {
              handleSubmit.mutate({ name: name, comment: comment });
              handleClick();
              e.target.reset();
            }
            handleClick();
            handleSubmit.isSuccess = false;
          }}
          id="conversation__form"
          className="conversation__form"
        >
          <label className="conversation__form-label" htmlFor="name">
            NAME{" "}
          </label>
          <input
            className="conversation__form-field"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
          />

          <label className="conversation__form-label" htmlFor="comments">
            COMMENT
          </label>
          <textarea
            className="conversation__form-comments"
            name="comments"
            id="comments"
            type="text"
            placeholder="Add a new comments"
          ></textarea>

          <button className="conversation__form-button">COMMENT</button>
        </form>
      </div>
      <section className="comments__wrapper">
        {comment.data?.map((comment) => {
          return (
            <Comments
              key={comment.id}
              id={comment.id}
              comment={comment}
              handleDeleteComment={handleDeleteComment}
              handleUpdateCommentLike={handleUpdateCommentLike}
            />
          );
        })}
      </section>
      <Snackbar
        open={open.open}
        TransitionComponent={open.Transition}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {handleSubmit.isSuccess ? (
          <Alert
            TransitionComponent={open.Transition}
            severity="success"
            sx={{ width: "100%" }}
          >
            Comment posted succesfully!
          </Alert>
        ) : (
          <Alert
            TransitionComponent={open.Transition}
            severity="error"
            sx={{ width: "100%" }}
          >
            something went wrong!
          </Alert>
        )}
      </Snackbar>
    </section>
  );
}

export default ConversationSection;
