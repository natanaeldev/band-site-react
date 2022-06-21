import React from "react";
import Comments from "../Comments/Comments";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./ConversationSection.scss";

function ConversationSection({
  comment,
  handleSubmit,
  handleDeleteComment,
  handleUpdateCommentLike,
}) {
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
            handleSubmit.mutate({ name: name, comment: comment });

            e.target.reset();
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
    </section>
  );
}

export default ConversationSection;
