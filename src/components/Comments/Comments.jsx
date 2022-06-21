import Delete from "../../assets/Icons/SVG/icon-delete.svg";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import date from "../../util/date";
import Likes from "../../assets/Icons/SVG/icon-like.svg";

import "./Comments.scss";

function Comments({
  comment,
  handleDeleteComment,
  handleUpdateCommentLike,
  id,
}) {
  return (
    <article className="comment">
      <div className="comment__header">
        <img src={Avatar} alt="Avatar " className="avatar" />
        <ul className="comment__ul">
          <li className="comment__li ">{comment.name}</li>
          <li className="comment__li">{date(comment.timestamp)}</li>
        </ul>
      </div>
      <p className="comment__p">{comment.comment}</p>
      <div className="comment__button">
        <div className="comment__button-delete">
          <img
            src={Delete}
            alt="delete_bottom"
            onClick={() => handleDeleteComment.mutate(id)}
          />
        </div>
        <div className="comment__button-likes">
          <img
            src={Likes}
            alt="likes_button"
            onClick={() => handleUpdateCommentLike.mutate(id)}
          />
          <span> {comment.likes}</span>
        </div>
      </div>
    </article>
  );
}

export default Comments;
