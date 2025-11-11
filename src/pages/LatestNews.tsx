import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import alumni1 from "../images/31.jpg";
import alumni2 from "../images/school.jpg";
import alumni3 from "../images/alumni3.jpeg";

const LatestNewsSection: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "Sarada Vidyalayam Alumni Meet 2025",
      description:
        "Join us on 20th December 2025 at the school auditorium to reconnect, reminisce, and celebrate our shared journey.",
      img: alumni1,
    },
    {
      id: 2,
      title: "Welcome to Our New Alumni Portal!",
      description:
        "Reconnect, network, and relive our school memories with fellow alumni — all in one place.",
      img: alumni2,
    },
    {
      id: 3,
      title: "Warm & Grateful",
      description:
        "We are excited to meet our beloved Director sir, who has always supported us in our education and guided us.",
      img: alumni3,
    },
  ];

  return (
    <section className="mb-5 px-3">
      <h4 className="mb-4">Latest News</h4>
      <Row>
        {news.map(({ id, title, description, img }) => (
          <Col key={id} xs={12} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={img}
                alt={title}
                style={{ objectFit: "cover", height: "310px" }}
              />
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
