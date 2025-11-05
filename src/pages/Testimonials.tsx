import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramaganga Gollapalli",
      text: "Studying at Sarada Vidyalayam shaped who I am today. The teachers were more than educators — they were mentors who guided me through every challenge. I’ll always be proud to call myself an alumnus of this wonderful school.",
    },
    {
      id: 2,
      name: "Renuka Ganga",
      text: "The friendships I built at Sarada Vidyalayam have lasted a lifetime. It’s amazing to see how the school continues to grow while keeping its strong values intact.",
    },
    {
      id: 3,
      name: "Suresh B",
      text: "My years at Sarada Vidyalayam were truly unforgettable. The teachers inspired me to dream big, and the school’s emphasis on values, discipline, and teamwork helped shape my career and character. I owe much of my success today to the strong foundation I received here.",
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
            style={{
              minWidth: "250px",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              backgroundColor: "rgb(240, 244, 253)",
              width: "100%",
            }}
            className="shadow-sm"
          >
            <Card.Body>
              <Card.Text>"{text}"</Card.Text>
              <Card.Subtitle className="text-muted mt-3">
                - {name}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
