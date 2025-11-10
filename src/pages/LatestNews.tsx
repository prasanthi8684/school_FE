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
        "Join us this year for the alumni meet on 20th Dec at the school auditorium.",
      img: alumni1,
    },
    {
      id: 2,
      title: "New Alumni Website Launched",
      description:
        "Our new online website helps you reconnect easily with fellow alumni.",
      img: alumni2,
    },
    {
      id: 3,
      title: "Charity Event Success",
      description:
        "Thanks to all who participated in the charity fundraiser last month.",
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
