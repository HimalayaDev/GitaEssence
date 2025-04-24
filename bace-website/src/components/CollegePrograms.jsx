import { Container, Card, Ratio, Row, Col, Image } from 'react-bootstrap';

function CollegePrograms() {
    const videoId = "fnRdJI7aGFo";
    return (
        <>
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
        </>
    );
}

export default CollegePrograms