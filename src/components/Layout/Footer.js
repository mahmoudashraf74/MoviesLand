import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.Module.css";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = (props) => {
    const user = {
        facebookUrl: "",
        youtubeUrl: "",
        twitterURL: "",
        instgramURL: "",
    };
    return (
        <footer className={classes.Footer}>
            <Container>
                <Row className={classes.socialLinks}>
                    <a className={classes.logo} href="#Movies">
                        <span>Movies</span> <span>Land</span>
                    </a>
                    <Col sm={4}>
                        <a href={user.facebookUrl}>
                            <FaFacebookF />
                        </a>
                        <a href={user.twitterURL}>
                            <FaTwitter />
                        </a>
                        <a href={user.youtubeUrl}>
                            <FaYoutube />
                        </a>
                        <a href={user.instgramURL}>
                            <FaInstagram />
                        </a>
                    </Col>
                </Row>
                <Row className={classes.Links}>
                    <Col sm={4}>
                        <ul>
                            <li>
                                <a href="#about">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#about">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#services">Privacy</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <li>
                                <a href="Portfolio.html">Help Center</a>
                            </li>
                            <li>
                                <a href="#about">Cookie Preferences</a>
                            </li>
                            <li>
                                <a href="#services">Legal Notices</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <li>
                                <a href="Portfolio.html">Account</a>
                            </li>
                            <li>
                                <a href="#about">Ways to Watch</a>
                            </li>
                            <li>
                                <a href="#services">Corporate Information</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className={classes.copyright}>
                    <p>
                        &copy; 2021 <span>MovieLand</span> All Right Reserved
                    </p>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
