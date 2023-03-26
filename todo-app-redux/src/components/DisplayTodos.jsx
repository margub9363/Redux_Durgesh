import React, { useState } from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

const DisplayTodos = () => {
  const [todos, setTodos] = useState([
    {
      title: "first Titel",
      description: "first Description",
    },
    {
      title: "Second Titel",
      description: "Second Description",
    },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All Todos are here</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayTodos;
