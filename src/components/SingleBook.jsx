import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { title, img, asin } = this.props.book;
    const { selected } = this.state;

    return (
      <div>
        <Card
          onClick={this.toggleSelected}
          style={{
            border: selected ? "3px solid red" : "1px solid black",
            cursor: "pointer",
          }}
          className="mb-3"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>

        {selected ? <CommentArea asin={asin} /> : null}
      </div>
    );
  }
}

export default SingleBook;
