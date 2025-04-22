import './Home.css';
import { Container, Card, Ratio, Row, Col, Image, Button } from 'react-bootstrap';
import CardGrid from './CardGrid';

function Home() {
    const videoId = "fnRdJI7aGFo";
    return (
        <>
            <Image
                src="/launch-poster.png"
                alt="Description of image"
                fluid
            />
            <h5>MESSAGE FROM OUR DIRECTOR</h5>
            <h2>"Fostering Personal growth and cultivating positivity"</h2>
            <div>
                <Row>
                    <Col>
                        <p>Our goal is to inspire individuals towards self-excellence and a positive way of living through the power of education, culture, and devotion. Our specially crafted programs are aimed at helping people discover their inner talents and achieve balance in their personal, social, and professional lives.By focusing on education, we provide a foundation for people to find their true selves, conquer their fears, and overcome obstacles such as anxiety and self-doubt. Our programs are based on ancient Vedic wisdom from texts like the Bhagavad Gita, Ramayana, Mahabharata, and Srimad Bhagavatam, and are adapted to meet the needs of modern society.We aim to nourish the body, mind, and soul of our participants and invite everyone to join us on this journey towards self-discovery and personal growth.</p>
                    </Col>
                    <Col>
                        <Image src="https://evolvepune.com/wp-content/uploads/HG-MSP-6-600.webp" thumbnail />
                    </Col>
                </Row>
            </div>
            <Container className="my-4">
                <Card>
                    <Card.Header>
                        <h4>Explore Bhakti Roadmap</h4>
                    </Card.Header>
                    <Ratio aspectRatio="16x9">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video"
                            allowFullScreen
                        />
                    </Ratio>
                    <Card.Body>
                        <Card.Title><button>Learn More</button></Card.Title>
                    </Card.Body>
                </Card>
            </Container>
            <h1>College Programs</h1>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Ratio aspectRatio="16x9">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </Ratio>
                            <Card.Body>
                                <Card.Title><button>Explore</button></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Row><Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-dy-home-gallery-img-01-1.jpg" rounded fluid /></Col>
                            <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-dy-home-gallery-img-02-1.jpg" rounded fluid /></Col>
                        </Row>
                        <Row>
                            <Col>          <Image src="https://evolvepune.com/wp-content/uploads/evolve-dy-home-gallery-img-03-1.jpg" rounded fluid /></Col>
                            <Col>          <Image src="https://evolvepune.com/wp-content/uploads/evolve-dy-home-gallery-img-04-1.jpg" rounded fluid /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <h1>Featured Programs</h1>
            <CardGrid />
            <button>Explore</button>
        </>
    );
}

export default Home;