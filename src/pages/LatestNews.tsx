import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const LatestNewsSection: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "Annual Alumni Meet 2025 Announced",
      description: "Join us this year for the annual meet on 15th July at the school auditorium.",
      img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "New Alumni Directory Launched",
      description: "Our new online directory helps you reconnect easily with fellow alumni.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Charity Event Success",
      description: "Thanks to all who participated in the charity fundraiser last month.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="mb-5 px-3">
      <h4 className="mb-4">Latest News</h4>
      <Row>
        {news.map(({ id, title, description, img }) => (
          <Col key={id} xs={12} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={img} alt={title} style={{ objectFit: "cover", height: "200px" }} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default LatestNewsSection;
