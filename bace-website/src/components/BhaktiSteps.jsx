import { Row, Col, Image, } from 'react-bootstrap';

function BhaktiSteps() {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Bhakti Steps Program</h1>
                    <p>It is crafted to uplift devotees by acknowledging their spiritual achievements. Under the Mentor's guidance, specific benchmarks for spiritual engagement in reading, listening, and practice are set at each stage.</p>
                    <button>Learn More</button>
                </Col>
                <Col>
                    <Image src="https://evolvepune.com/wp-content/uploads/haridas-thakur-1.jpg" thumbnail />
                </Col>
            </Row>
        </div>
    );
}

export default BhaktiSteps;