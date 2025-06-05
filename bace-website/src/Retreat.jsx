import { Container, Row, Col, Button, Image, Ratio, Form } from 'react-bootstrap';
import retreat from './assets/retreat.jpg';

function Retreat() {
    return (
        <>
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + retreat + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }} className="d-flex align-items-center text-white">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h2>Evolve Pune Presents</h2>
                            <p className="lead">Retreat for Spiritual Rejuvenation</p>
                            <Row>
                                <Col><Button variant="danger">Upcoming Retreat</Button></Col>
                                <Col><Button variant="danger">Sign up</Button></Col>
                                <Col><Button variant="danger">Memories</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row className='bg-warning'>
                <Col>
                    <Image className='w-100' src="https://evolvepune.com/wp-content/uploads/Untitled-design-1.png" />
                </Col>
                <Col >
                    <br />
                    <h2 className='text-black'>Iskcon Rajgad</h2>
                    <h1>Retreat</h1>
                    <h4 className='text-end'>with Madan Sundar Das</h4>
                    <br />
                    <Row>
                        <Col>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="bg-danger text-white" scope="col">Yatra Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">15th–23th March,2025</th>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="bg-danger text-white" scope="col">Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">77700 76544</th>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Container className='bg-success'>
                <br />
                <h2 className="text-white">🌿 Embark on a Weekend-Long Spiritual <br /> Retreat to ISKCON Rajgad! 🌿</h2>
                <p className="text-white">Escape the hustle and bustle of city life and immerse yourself in the serene spiritual vibrations at ISKCON Rajgad (Vedic Farm). Join us for a weekend retreat to places with profound spiritual significance such as Nasik, Pandharpur, or our farm communities.
                    <br />
                    The purpose of this retreat is to rejuvenate your mind, body, and soul in the company of like-minded spiritualists. Absorb the tranquil beauty of nature, engage in meaningful discussions, and participate in enriching activities that will leave you spiritually refreshed and inspired.</p>
                <br />
            </Container>
            <h2>Why Join this Retreat?</h2>
            <p className='text-start'>  1)Disconnect from the daily grind and reconnect with your inner self.</p>
            <p className='text-start'>  2)Enjoy the peaceful ambiance of our farm community, surrounded by scenic mountain ranges and a pristine river.</p>
            <p className='text-start'>  3)Participate in spiritually uplifting activities and engage in soulful Kirtans and discussions.</p>
            <p className='text-start'>  4)Come along and experience a weekend filled with spiritual bliss and harmony. </p>
            <br />
            <Container className='bg-warning'>
                <br />
                <h2 className='text-white'>Register Today!</h2>
                <br />
                <Form>
                    <Row className="mb-3 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Row className="mb-3 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control placeholder="Enter Your Number" />
                        </Form.Group>
                    </Row>




                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
            </Container >
        </>
    )
}

export default Retreat;