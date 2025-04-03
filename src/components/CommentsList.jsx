import SingleComment from "./SingleComment";

const CommentsList = ({ comments, refresh }) => (
  <ul className="list-unstyled">
    {comments.map((commento) => (
      <SingleComment key={commento._id} comment={commento} refresh={refresh} />
    ))}
  </ul>
);

export default CommentsList;
