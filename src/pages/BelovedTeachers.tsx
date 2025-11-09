import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import director from "../images/director_sir.jpg";
import rani from "../images/rani_teacher.jpg";
import d1 from "../images/39.jpg";
import d2 from "../images/54.jpg";
import d3 from "../images/40.jpg";
import d4 from "../images/65.jpg";
import d5 from "../images/43.jpg";
import d6 from "../images/42.jpg";

const BelovedTeachers: React.FC = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Chandrasekhar Sankurathri",
      subject: "Director",
      img: director,
    },
    { id: 2, name: "Our Teachers", subject: "Sarada Vidyalayam", img: d6 },
    {
      id: 3,
      name: "Our Teachers",
      subject: "Sarada Vidyalayam",
      img: d1,
    },
    {
      id: 4,
      name: "Our Teachers",
      subject: "Sarada Vidyalayam",
      img: d2,
    },
    {
      id: 5,
      name: "Our Teachers",
      subject: "Sarada Vidyalayam",
      img: d4,
    },
    {
      id: 6,
      name: "Our Teachers",
      subject: "Sarada Vidyalayam",
      img: d3,
    },
    { id: 7, name: "Ms. Rani Teacher", subject: "Social", img: rani },

    {
      id: 8,
      name: "Our Teachers",
      subject: "Sarada Vidyalayam",
      img: d5,
    },
  ];

  const teacherChunks = [];
  for (let i = 0; i < teachers.length; i += 4) {
    teacherChunks.push(teachers.slice(i, i + 4));
  }

  return (
    <section className="mb-5 px-3">
      <h4 className="mb-4">Our Beloved Teachers</h4>
      <Carousel indicators={false} interval={4000} pause={false}>
        {teacherChunks.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map(({ id, name, subject, img }) => (
                <Col key={id} xs={12} sm={6} md={3} className="mb-4">
                  <Card className="text-center h-100">
                    <Card.Img
                      variant="top"
                      src={img}
                      style={{ height: "350px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{subject}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default BelovedTeachers;
