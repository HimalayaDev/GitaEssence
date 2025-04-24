import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

function Testimonials() {
    const testimonial = [
        {
            id: 1,
            name: "Lt Col Ajay",
            position: "Retired Army Officer",
            image: "https://evolvepune.com/wp-content/uploads/Ajay-2-2.jpg",
            quote: "I enjoyed the entire journey of Gita Essence so beautifully delivered by Madan Sundar Prabhu. Though I had read Shrimad Bhagwat Gita small book printed by Gita press multiple times but never got involved as I did during your discourse."
        },
        {
            id: 2,
            name: "Dr. Pinky Kukreja",
            position: "Dental Surgeon (B.D.S)",
            image: "https://evolvepune.com/wp-content/uploads/Nidhi.jpg",
            quote: "The attention to detail and customer service was outstanding. Our website traffic has increased by 200% since the redesign, and we couldn't be happier with the results."
        },
        {
            id: 3,
            name: "Ajit Deshmukh ",
            position: "Global Lean Senior Improvement Manager in Atos",
            image: "https://evolvepune.com/wp-content/uploads/Paras.jpg",
            quote: "Really blessed and fortunate to have Madan Sundar prabhu as a facilitator. He has unique and special blend of deep knowledge with practical examples with sense of humour!"
        }
    ];

    return (
        <Container className="testimonial-section my-5">
            <h2 className="text-center mb-5">Testimonials</h2>
            <Carousel
                indicators={true}
                controls={true}
                interval={5000}
                pause="hover"
                className="testimonial-carousel"
            >
                {testimonial.map(testimonial => (
                    <Carousel.Item key={testimonial.id}>
                        <div className="testimonial-content">
                            <Row className="align-items-center justify-content-center">
                                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                                    <Image
                                        src={testimonial.image}
                                        roundedCircle
                                        className="testimonial-image"
                                        alt={testimonial.name}
                                    />
                                </Col>
                                <Col xs={12} md={8}>
                                    <blockquote className="testimonial-quote">
                                        <p>"{testimonial.quote}"</p>
                                        <footer className="blockquote-footer">
                                            <strong>{testimonial.name}</strong>, {testimonial.position}
                                        </footer>
                                    </blockquote>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Testimonials;