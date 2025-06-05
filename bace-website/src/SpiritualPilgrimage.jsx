import { Container, Row, Col, Button, Image, Accordion, Ratio } from 'react-bootstrap';
import Grouppic from './assets/Grouppic.jpg';

function SpiritualPilgrimage() {
    return (
        <>
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + Grouppic + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }} className="d-flex align-items-center text-white">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h2>Evolve Pune Presents</h2>
                            <p className="lead">Udupi Yatra</p>
                            <Row>
                                <Col><Button variant="danger">Upcoming Yatra</Button></Col>
                                <Col><Button variant="danger">Memories of previous Yatra</Button></Col>
                                <Col><Button variant="danger">Register For Yatra</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <p className="bg-danger p-5 text-white">A Yatra, or pilgrimage, is a sacred journey to holy places that offers a chance to disconnect from the distractions of everyday life, such as work and household responsibilities. This spiritual retreat allows you to immerse yourself in divine vibrations, explore revered sites, and grow spiritually in the uplifting company of fellow seekers. Whether you're looking to deepen your connection with the divine or rejuvenate your soul, a Yatra provides the perfect setting for inner peace and spiritual growth.</p>
            </Container>
            <Container className="bg-info bg-gradient">
                <Row>
                    <Col>
                        <Image className="w-100 p-2" src="https://evolvepune.com/wp-content/uploads/Yatra-Retreat-1.jpg" />
                    </Col>
                    <Col>
                        <h4 className="text-start text-danger">2025 Summer Yatra</h4>
                        <h4 className="text-start">Ayodhya Dham</h4>
                        <h2 className="text-center text-danger">Pilgrimage</h2>
                        <h4 className="text-end">with madan sundar das</h4>
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
            </Container>
            <h2>Yatra Itinerary</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >2024 Ayodhya Yatra</Accordion.Header>
                    <Accordion.Body>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Place</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>16 March (Varanasi)</td>
                                    <td>Kashi Vishwanath Temple + Dashashwamedh Ghat</td>
                                </tr>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td>17 March (Stay at Varanasi)</td>
                                    <td>Visit to Local Temples</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td>18 March (Depart for Ayodhya)</td>
                                    <td>Visit to Ram Janma Bhumi Temple</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>19 March (Stay at Ayodhya)</td>
                                    <td>Visit to Local Temples and Sarayu Ghat</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td>20 March (Depart for Chitrakut via Prayagraj)</td>
                                    <td>Visit to Triveni Sangam</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td>21 March (Stay at Chitrakut)</td>
                                    <td>Visit to Local Temples</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td>22 March (Stay at Chitrakut)</td>
                                    <td>Visit to Local Temples</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>23 March (Depart for Pune)</td>
                                    <td>Thanks Giving</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion >
            <Container className="bg-danger">
                <h2 className="text-white">Important Announcements</h2>
                <br />
                <h4 className="text-black">WHO CAN JOIN IT?</h4>
                <p className="text-white">Our Yatras are exclusively tailored for practicing devotees or their cherished family members and friends. To be a part of this experience, you should either be a practicing devotee or accompanied by a devotee.</p>
                <br />
                <h4 className="text-black">About Onward & Return Journey:</h4>
                <dl className="dl-horizontal text-white text-start">
                    <dt>Yatra Details: </dt>
                    <dd>- Commences: 16th March from Varanasi</dd>
                    <dd>- Concludes: 23rd March (afternoon) @Chitrakut</dd>
                    <br />
                    <dt>Travel Arrangements:</dt>
                    <dd>- Kindly book your travel tickets promptly.</dd>
                    <dd>- Train details and the recommended flight from Pune have been shared on the Whatsapp group.</dd>
                    <br />
                    <dt>Whatsapp Group:</dt>
                    <dd>-You will get the link to join the Whatsapp group after submitting the pre-registration form below.</dd>
                    <br />
                    <dt>Contact Information:</dt>
                    <dd>-For details about the ONWARD & RETURN journey, please contact Ashok Pr at +91 77700 76544</dd>
                </dl>
            </Container>
            <h2>Sign up here</h2>
            <br />
            <Button className="bg-danger text-white">Register for Yatra </Button>
            <br />
            <br />
            <Container className="bg-danger " >
                <h1 className="text-white">Memories of Previous Yatras
                    Videos</h1>
                <Row>
                    <Col>
                        <Ratio aspectRatio="16x9">
                            <iframe
                                src={`https://youtube.com/embed/hUwSiu65T6I`}
                                title="YouTube video"
                                allowFullScreen
                            />
                        </Ratio>
                    </Col>
                    <Col>
                        <Ratio aspectRatio="16x9">
                            <iframe
                                src={`https://youtube.com/embed/T9Zxuk4svho`}
                                title="YouTube video"
                                allowFullScreen
                            />
                        </Ratio>
                    </Col>
                </Row>
                <br />
                <h2 className="text-white">Photo Album</h2>
                <Row>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Narasimha-Aarti-1.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Yatra.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Yatra-4-1.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Yatra-2.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Yatra-3-1.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Yatra-1.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/Narasimha-Aarti.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/4-9.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                    <Col>
                        <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/5-9.jpg" />
                        <Button className="mt-3 mb-5 bg-white text-danger">View Album</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SpiritualPilgrimage;