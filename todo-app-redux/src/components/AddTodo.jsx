import { Container, Row, Col, Card, Form } from "react-bootstrap";

const AddTodo = () => (
  <Container>
    <Row>
      <Col md={12}>
        <Card className="shadow-sm">
          <Card.Body>
            <h3>Add Todo here!</h3>
            {/* form */}
            <Form>
              {/* title */}
              <Form.Group>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type="text" placeholder="Enter here" />
              </Form.Group>

              {/* title */}
              <Form.Group>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type="text" placeholder="Enter here" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AddTodo;
