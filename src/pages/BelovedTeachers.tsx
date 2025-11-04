import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import director from '../images/director_sir.jpg'
import rani from '../images/rani_teacher.jpg'


const BelovedTeachers: React.FC = () => {
  const logoUrl = '../images/18.jpg'
  const teachers = [
    { id: 1, name: "Dr. Chandrasekhar Sankurathri", subject: "Director", img: director },
    { id: 2, name: "Ms. Rani Teacher", subject: "Social", img: rani },
    { id: 3, name: "Ms. Sangeeta Verma", subject: "English", img: "https://randomuser.me/api/portraits/women/50.jpg" },
    { id: 4, name: "Mr. Amit Desai", subject: "History", img: "https://randomuser.me/api/portraits/men/60.jpg" },
    { id: 5, name: "Mrs. Leela Iyer", subject: "Biology", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 6, name: "Mr. Vinod Mehra", subject: "Geography", img: "https://randomuser.me/api/portraits/men/62.jpg" },
    { id: 7, name: "Ms. Priya Nair", subject: "Chemistry", img: "https://randomuser.me/api/portraits/women/70.jpg" },
    { id: 8, name: "Mr. Suresh Patil", subject: "Physics", img: "https://randomuser.me/api/portraits/men/75.jpg" },
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
                    <Card.Img variant="top" src={img} style={{ height: "350px", objectFit: "cover" }} />
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
