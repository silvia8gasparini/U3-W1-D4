import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlODA0NTFkNDM2ZTAwMTVkYTI3MjEiLCJpYXQiOjE3NDM2ODM2NTQsImV4cCI6MTc0NDg5MzI1NH0.zOtyP7al4HbpviDS5DKOsqGtyj6NMyXBjnz0Mw8eJxE";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  fetchComments = () => {
    this.setState({ isLoading: true, isError: false });

    fetch(apiUrl + this.props.asin, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data) => {
        this.setState({ comments: data, isLoading: false });
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments, isLoading, isError } = this.state;
    return (
      <div className="mt-3">
        {isLoading && <Loading />}
        {isError && <Error />}
        <CommentsList comments={comments} refresh={this.fetchComments} />
        <AddComment asin={this.props.asin} refresh={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
