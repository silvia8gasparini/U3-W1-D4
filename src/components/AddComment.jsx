import { useState } from "react";

const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlODA0NTFkNDM2ZTAwMTVkYTI3MjEiLCJpYXQiOjE3NDM2ODM2NTQsImV4cCI6MTc0NDg5MzI1NH0.zOtyP7al4HbpviDS5DKOsqGtyj6NMyXBjnz0Mw8eJxE";

const AddComment = ({ asin, refresh }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");

  const submitComment = (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      rate,
      elementId: asin,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          setComment("");
          setRate("1");
          refresh();
        } else {
          alert("Errore durante l'invio del commento.");
        }
      })
      .catch((error) => {
        console.error("Errore di rete:", error);
        alert("Errore di rete. Riprova più tardi.");
      });
  };

  return (
    <form onSubmit={submitComment}>
      <div className="mb-2">
        <input
          className="form-control"
          type="text"
          placeholder="Scrivi un commento"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <select
          className="form-select"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Invia
      </button>
    </form>
  );
};

export default AddComment;
