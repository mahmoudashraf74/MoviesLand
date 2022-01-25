import { Form, Button } from "react-bootstrap";
import classes from "./SigninForm.module.css";

const SigninForm = (props) => {
  return (
    <Form className={classes.Form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <p>
        New to MoviesLand? <a href="/newUser">Sign up now</a>.
      </p>
      <Button
        className={classes.submit}
        style={{ backgroundColor: "var(--first-color)" }}
      >
        Sign in
      </Button>{" "}
    </Form>
  );
};
export default SigninForm;
