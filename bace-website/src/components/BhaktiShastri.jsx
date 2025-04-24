import { Container, Row, Col, Image } from 'react-bootstrap';

function BhaktiShastri() {
    return (
        <>
            <h1>Bhakti Shastri</h1>
            <div><button>English</button><button>Hindi</button></div>
            <Container>
                <Row xs={1} sm={2} md={3} className="g-4">
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-08-1.jpeg" fluid /></Col>
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-03-1.jpg" fluid /></Col>
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-02-1.jpg" fluid /></Col>
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-04-1.jpg" fluid /></Col>
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-09-1.jpeg" fluid /></Col>
                    <Col><Image src="https://evolvepune.com/wp-content/uploads/evolve-home-bhakti-shastri-gallery-img-05-1.jpg" fluid /></Col>
                </Row>
            </Container>
        </>
    );
}

export default BhaktiShastri;