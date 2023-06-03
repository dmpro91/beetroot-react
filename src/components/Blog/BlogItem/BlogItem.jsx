import { Card } from "react-bootstrap";

export const BlogItem = ({ title, body }) => (
  <Card className="mb-4" role="button">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card.Body>
  </Card>
);
