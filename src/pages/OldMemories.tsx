import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const OldMemories: React.FC = () => {
  const memoryImages = Array.from({ length: 27 }, (_, index) =>
    require(`../images/${index + 1}.jpg`)
  );

  return (
    <section className="mb-5 px-3">
      <h4 className="mb-4">Our Memories</h4>
      <Row>
        {memoryImages.map((src, index) => (
          <Col key={index} xs={12} sm={4} md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={src}
                loading="lazy"
                alt={`Memory ${index + 1}`}
                style={{ objectFit: "cover", height: "350px" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default OldMemories;
