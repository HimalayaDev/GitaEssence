import { Row, Col, Image, } from 'react-bootstrap';

function Intro() {
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
        </>
    );
}

export default Intro;