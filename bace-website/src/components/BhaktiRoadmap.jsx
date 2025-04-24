import { Container, Card, Ratio, } from 'react-bootstrap';

function BhaktiRoadmap() {
    const videoId = "fnRdJI7aGFo";
    return (
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
    );
}

export default BhaktiRoadmap;