import { forwardRef } from "react";
import { Form } from "react-bootstrap";

export const Input = forwardRef(({ label, ...props }, ref) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control ref={ref} {...props} />
  </Form.Group>
));
