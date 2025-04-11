import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-light text-dark py-4 mt-8">
            <Container>
                <Row className="mb-4">
                    <Col lg={6} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Initiative Of The International Society For Krishna Consciousness(ISKCON)</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <i className="fas fa-home mr-2" ></i><b>EVOLVE PUNE</b> ISKCON Hinjewadi,G1801,Sangria,Maharashtra-144057
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-envelope mr-2"></i> connect@evolvepune.com
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-phone mr-2"></i> +91 917 567 2172
                            </li>
                        </ul>
                        <div className="mt-3">
                            <a href="#!" className="text-dark me-3"><FaWhatsapp size={24} /></a>
                            <a href="#!" className="text-dark me-3"><FaYoutube size={24} /></a>
                            <a href="#!" className="text-dark me-3" ><FaFacebook size={24} /></a>
                            <a href="#!" className="text-dark me-3"><FaInstagram size={24} /></a>

                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">About Evolve Pune</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Our Team</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Our Mentors</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Volunteers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Donation</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Blogs</a>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Community</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Ask a Question</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Documents</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Forums</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">Groups</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-dark text-decoration-none">News</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <hr className="mb-4" />

                <Row className="text-center bg-dark text-light">
                    <Col md={7} lg={8}>
                        <p>
                            © 2018 – 2025 | Evolve Pune | All Rights Reserved
                        </p>
                    </Col>
                    <Col md={5} lg={4} className="ml-lg-0 text-center text-md-end">
                        <a href="#!" className="bg-dark text-light text-decoration-none">Terms of Service </a>
                        |
                        <a href="#!" className="bg-dark text-light text-decoration-none"> Privacy Policy</a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;