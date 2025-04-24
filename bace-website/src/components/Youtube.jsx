import { Row, Col, Ratio, Button } from 'react-bootstrap';

function Youtube() {
    const VideoId = "glxnJ2ZS9lA";
    return (
        <Row>
            <Col>
                <h1>What our student have to say!</h1>
            </Col>
            <Col>
                <Ratio aspectRatio="16x9">
                    <iframe
                        src={`https://youtube.com/embed/${VideoId}`}
                        title="YouTube video"
                        allowFullScreen
                    />
                </Ratio>
                <button>Subscribe</button>
            </Col>
        </Row>
    );
}

export default Youtube;