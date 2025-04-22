import { Row, Col, Card, Button } from 'react-bootstrap';

function CardGrid() {
    const cardsData = [
        {
            id: 1,
            title: "2024 Bhakti Vaibhav",
            text: "This course consists of the in-depth study of Srimad Bhagavatam (Canto 1-6):",
            image: "https://evolvepune.com/wp-content/uploads/BhaktiVaibhav-1920-x-1080-px-1.jpg",
            buttonText: "Register"
        },
        {
            id: 2,
            title: "Gita Parents league",
            text: "A Giat program for busy individuals, especially parents.",
            image: "https://evolvepune.com/wp-content/uploads/Untitled-design-1.jpg",
            buttonText: "Register"
        },
        {
            id: 3,
            title: "Online Bhakti Sastri",
            text: "This course consists of the in-depth study of four books:",
            image: "https://evolvepune.com/wp-content/uploads/Gita-Course-Posters-5-1-1.jpg",
            buttonText: "Register"
        },
        {
            id: 4,
            title: "Urban Ashram",
            text: "Discover Urban Ashram, a haven for devotees in the bustling Hinjewadi area.",
            image: "https://evolvepune.com/wp-content/uploads/Profile.jpg",
            buttonText: "Apply"
        },
        {
            id: 5,
            title: "ऑनलाइन भक्ति शास्त्र",
            text: "यह पाठ्यक्रम चार पुस्तकों की गहन अध्ययन से मिलकर बना है।",
            image: "https://evolvepune.com/wp-content/uploads/Bhakti-Shastri-Hindi-1-1-1-1.jpg",
            buttonText: "Register"
        },
        {
            id: 6,
            title: "Calling all devotees & Friends",
            text: "Together, Let’s Make A Positive Impact On The World.",
            image: "https://evolvepune.com/wp-content/uploads/FOLK-1.jpg",
            buttonText: "Join the Team"
        }
    ];

    return (
        <Row xs={1} md={3} className="g-4">
            {cardsData.map((card) => (
                <Col key={card.id}>
                    <Card>
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            <Button variant="primary">{card.buttonText}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGrid;