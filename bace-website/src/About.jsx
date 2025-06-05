import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import krsna from './assets/krsna.jpg';

function About() {

    return (
        <>
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + krsna + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }} className="d-flex align-items-center text-white">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <Image className="w-50" src="https://evolvepune.com/wp-content/uploads/EVEOLVE-FLOWER-2-1.png" />

                            <p className="lead">Content over background</p>
                            <Button variant="primary">Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;