const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlODA0NTFkNDM2ZTAwMTVkYTI3MjEiLCJpYXQiOjE3NDM2ODM2NTQsImV4cCI6MTc0NDg5MzI1NH0.zOtyP7al4HbpviDS5DKOsqGtyj6NMyXBjnz0Mw8eJxE";

const SingleComment = ({ comment, refresh }) => {
  const deleteComment = () => {
    if (window.confirm("Vuoi eliminare questo commento?")) {
      fetch(apiUrl + comment._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            refresh();
          } else {
            alert("Errore durante l'eliminazione del commento.");
          }
        })
        .catch((error) => {
          console.error("Errore nella richiesta DELETE:", error);
          alert("Si è verificato un errore di rete.");
        });
    }
  };
  return (
    <li className="border-bottom d-flex justify-content-between py-2">
      <span>
        {comment.comment} ({comment.rate}/5)
      </span>
      <button className="btn btn-sm btn-danger" onClick={deleteComment}>
        DELETE
      </button>
    </li>
  );
};

export default SingleComment;
