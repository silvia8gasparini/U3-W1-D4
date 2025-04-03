import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const Books = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Cerca"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Row className="mt-3">
        {Books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <SingleBook book={book}></SingleBook>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
