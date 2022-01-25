import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SigninForm from "./SigninForm";
import classes from "./SigninButton.module.css";
const SignInButton = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={classes.Form}>
            <Button
                variant="primary"
                onClick={handleShow}
                className={classes.Signbutton}
                style={{ backgroundColor: "var(--first-color)" }}
            >
                Sign In
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>
                        Sign in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SigninForm />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SignInButton;
