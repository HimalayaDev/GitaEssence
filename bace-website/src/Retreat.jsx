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
                <Form className='bg-white w-75 rounded-5  container-fluid vh-200 '>
                    <br />
                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control placeholder="Enter Your Number" />
                        </Form.Group>
                    </Row>




                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="Enter Your City" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="1">Andaman & Nicobar (UT)</option>
                                <option value="2">Andhra Pradesh</option>
                                <option value="3">Arunachal Pradesh</option>
                                <option value="4">Assam</option>
                                <option value="5">Bihar</option>
                                <option value="6">Chandigarh (UT)</option>
                                <option value="7">Chhattisgarh</option>
                                <option value="8">Dadra & Nagar Haveli and Daman & Diu (UT)</option>
                                <option value="9">Delhi [National Capital Territory (NCT)]</option>
                                <option value="10">Goa</option>
                                <option value="11">Gujarat</option>
                                <option value="12">Haryana</option>
                                <option value="13">Himachal Pradesh</option>
                                <option value="14">Jammu & Kashmir (UT)</option>
                                <option value="15">Jharkhand</option>
                                <option value="16">Karnataka</option>
                                <option value="17">Kerala</option>
                                <option value="18">Ladakh (UT)</option>
                                <option value="19">Lakshadweep (UT)</option>
                                <option value="20">Maharashtra</option>
                                <option value="21">Madhya Pradesh</option>
                                <option value="22">Manipur</option>
                                <option value="23">Meghalaya</option>
                                <option value="24">Mizoram</option>
                                <option value="25">Nagaland</option>
                                <option value="26">Odisha</option>
                                <option value="27">Puducherry (UT)</option>
                                <option value="28">Punjab</option>
                                <option value="29">Rajasthan</option>
                                <option value="30">Sikkim</option>
                                <option value="31">Tamil Nadu</option>
                                <option value="32">Tripura</option>
                                <option value="33">Telangana</option>
                                <option value="34">Uttar Pradesh</option>
                                <option value="35">Uttarakhand</option>
                                <option value="36">West Bengal</option>
                            </Form.Select>
                        </Form.Group>


                    </Row>

                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>Your Age</Form.Label>
                            <Form.Control placeholder="Enter Your Age" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridTravelOptions">
                            <Form.Label>Choose Your Travel Options</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="1">Own Arrangement</option>
                                <option value="2">Group Bus</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridWeeklyProgram">
                            <Form.Label>Which Program Do You Attend</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="1">Online Only</option>
                                <option value="2">Core Team</option>
                                <option value="3">Saturday Programs at Wakad</option>
                                <option value="4">Sunday Programs at Wakad</option>
                                <option value="5">Saturday Programs at Sangaria</option>
                                <option value="6">Sunday Programs at Mahalunege</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} controlId="formGridAdultNumber">
                            <Form.Label>Number of adults coming with you</Form.Label>
                            <Form.Control placeholder="Enter Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridChildrenNumber">
                            <Form.Label>Number of children coming with you</Form.Label>
                            <Form.Control placeholder="Enter Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-4 ms-5 me-5">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAdultNames">
                            <Form.Label>Name of Adults:</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridChildrenNames">
                            <Form.Label>Name of Childrens:</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit" >
                        Submit
                    </Button>
                    <br />
                    <br />
                </Form>
                <br />
            </Container >
        </>
    )
}

export default Retreat;