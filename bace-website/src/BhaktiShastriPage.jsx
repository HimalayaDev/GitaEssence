import { Row, Col, Image, Button, Table, Card, Container, Ratio } from 'react-bootstrap';
import Testimonials from './components/Testimonials';
import screenshot1 from './assets/screenshot1.png';

function BhaktiShastriPage() {
    return (
        <>
            <Row>
                <Col xs={6}>
                    <br />
                    <h2>Bhakti Shastri</h2>
                    <h4>By Madan Sundar Das</h4>
                    <p style={{ textAlign: 'left' }}>Discover the transformative journey of Bhakti Sastri, an intensive course designed for an in-depth study of the four foundational texts of Krishna consciousness:
                    </p>
                    <ol style={{ textAlign: 'left' }}>
                        <li>Sri Isopanisad</li>
                        <li>Bhagavad-Gita</li>
                        <li>Nectar of Instruction</li>
                    </ol>
                    <p style={{ textAlign: 'left' }}>
                        This course, envisioned by Srila Prabhupada as a crucial element of brahminical training, offers a systematic study that equips devotees with profound sastric knowledge and practical tools for deepening their faith and conviction in Krsna consciousness.
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        Enroll now to embark on a year-long path of devotional service, spiritual commitments, and personal transformation, supported by experienced teachers and a flexible, online course schedule tailored for modern busy lives.
                    </p>
                    <Button>Join Course Now</Button>
                </Col>
                <Col xs={6}>
                    <br />
                    <br />
                    <Image className="w-75" src="https://evolvepune.com/wp-content/uploads/2-15.jpg" />
                </Col>
            </Row>
            <Testimonials />
            <h2>How it Works?</h2>
            <h5>Bhakti Sastri Course: In-Depth Study of Srila Prabhupada's Books</h5>
            <Image className="w-100" src={screenshot1} />
            <Row>
                <Col>
                    <Button>Step 01</Button>
                    <br />
                    <h6><strong>Register for the Course</strong></h6>
                    <p>Complete the registration process to enroll in the course.</p>
                </Col>
                <Col>
                    <Button>Step 02</Button>
                    <br />
                    <h6><strong>Attend Video Lessons</strong></h6>
                    <p>Attend one or more video lessons per week for the designated course</p>
                </Col>
                <Col>
                    <Button>Step 03</Button>
                    <br />
                    <h6><strong>Solve MCQs</strong></h6>
                    <p>Solve the Multiple Choice Questions (MCQs) assigned for that level.</p>
                </Col>
                <Col>
                    <Button>Step 04</Button>
                    <br />
                    <h6><strong>Attend Weekly Live Review</strong></h6>
                    <p>Participate in a weekly 1-hour live review & QA meeting with HG Madan Sundar Das.</p>
                </Col>
                <Col>
                    <Button>Step 05</Button>
                    <br />
                    <h6><strong>Attempt CBE & Submit OBA</strong></h6>
                    <p>Attempt the Closed Based Exam (CBE) & submit the Open Book Assessment (OBA) as per the announced schedule.</p>
                </Col>
            </Row>
            <h2>Explore Four Core Bhakti Texts</h2>
            <h6>Join us in this immersive spiritual journey, complete with interactive courses, structured study, and an engaging approach to learning Srila Prabhupada’s books. The whole course is divided into 6 units</h6>
            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ishopanishad</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bhagavad Gita 01-06</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bhagavad Gita 07-12</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Bhagavad Gita 13- 18</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nectar of Instruction</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Nectar of Devotion</td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Col >
                    <Image className="w-75" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-img.png" />
                    <h1 >Important Guidelines while accessing online coursework</h1>
                </Col>
                <Col>
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Video Lesson and MCQ Quiz</h6>
                            <p>Every video lesson is associated with an MCQ-based quiz.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Passing Requirement</h6>
                            <p>A minimum of 70% is required to pass.Only after passing the quiz can you access the next lesson.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Attempt Limit</h6>
                            <p>You are allowed to fail only twice.There are only 3 attempts per MCQ quiz.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Time-Based MCQs</h6>
                            <p>Each MCQ is time-based, with 1 minute per question.Be prepared while attempting the quiz.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Question Sources</h6>
                            <p>50% of the questions will be from the purport.The other 50% will be based on the video lesson.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col sm={2}>
                            <Image className="w-100" src="https://evolvepune.com/wp-content/uploads/evolve-guideline-icon.png" />
                        </Col>
                        <Col sm={10}>
                            <h6>Compulsory Video Attendance</h6>
                            <p>Attending the video lesson is compulsory.The lesson must be fully watched before the student can access the associated steps.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h1>Details</h1>
            <br />
            <Row xs={2} md={5} className="g-1 " >

                <Card className="m-3 bg-warning">

                    <Card.Body >
                        <Card.Title><i class="bi bi-info-circle-fill"></i><br /> On Demand Program</Card.Title>
                        <Card.Text>
                            It provides the flexibility to study at your own pace.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-info">

                    <Card.Body>
                        <Card.Title><i class="bi bi-calendar-check"></i><br />Duration</Card.Title>
                        <Card.Text>
                            Approximately 130 hrs of Videos,
                            77 Lessons
                            Tentative 1 Year program
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-warning">

                    <Card.Body>
                        <Card.Title><i class="bi bi-clock"></i><br />Schedule</Card.Title>
                        <Card.Text>
                            Complete one video lesson per week

                            Attend one weekly live review class
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="m-3 bg-info">

                    <Card.Body>
                        <Card.Title><i class="bi bi-piggy-bank"></i><br />Fees:</Card.Title>
                        <Card.Text>
                            3000 ₹ (Indian Student)
                            5000 ₹ (International Student)
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-warning">

                    <Card.Body>
                        <Card.Title><i class="bi bi-calendar-check"></i><br />How to attend</Card.Title>
                        <Card.Text>
                            Online only
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-info">

                    <Card.Body>
                        <Card.Title><i class="bi bi-check2"></i><br />Eligibility</Card.Title>
                        <Card.Text>
                            Chanting 16 rounds. Following 4 regulative principles. Recommendation by a local mentor or Temple president of nearest ISKCON temple
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-warning">

                    <Card.Body>
                        <Card.Title><i class="bi bi-pencil-square"></i><br />Assessment Type</Card.Title>
                        <Card.Text>
                            Multiple Choice Questions, Open book assignments, closed book exams and oral assessment of slokas.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3 bg-info">

                    <Card.Body>
                        <Card.Title><i class="bi bi-telephone-fill"></i><br />Contact</Card.Title>
                        <Card.Text>
                            Parjanya Priya Prabhu:
                            917 567 2172
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Container className='bg-info'>
                <br />
                <Row>
                    <Col>
                        <Ratio aspectRatio="16x9">
                            <iframe
                                src={`https://youtube.com/embed/b5lr_fsrzhg`}
                                title="YouTube video"
                                allowFullScreen
                            />
                        </Ratio>
                    </Col>
                    <Col><h1>How to access the course?</h1></Col>
                </Row>
                <br />
                <Row><Col><button>Join Course Now</button></Col></Row>
                <br />
            </Container>
        </>
    );
}

export default BhaktiShastriPage;