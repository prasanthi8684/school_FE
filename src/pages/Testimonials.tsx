import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      text: "This alumni website is fantastic! It keeps me connected with old friends.",
    },
    {
      id: 2,
      name: "Bob Smith",
      text: "Great platform to organize events and reunions easily.",
    },
    {
      id: 3,
      name: "Cathy Lee",
      text: "Love seeing the latest news and photos. Very well designed!",
    },
  ];

  return (
    <section className="mb-5 px-3">
      <h4 className="mb-4">Testimonials</h4>
      <div
        className="d-flex overflow-auto"
        style={{ gap: "1rem", scrollSnapType: "x mandatory" }}
      >
        {testimonials.map(({ id, name, text }) => (
          <Card
            key={id}
            style={{ minWidth: "250px", flex: "0 0 auto", scrollSnapAlign: "start" }}
            className="shadow-sm"
          >
            <Card.Body>
              <Card.Text>"{text}"</Card.Text>
              <Card.Subtitle className="text-muted mt-3">- {name}</Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
