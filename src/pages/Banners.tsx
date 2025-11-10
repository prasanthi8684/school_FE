import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../images/10.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

const Banners: React.FC = () => {
  const banners = [
    {
      id: 1,
      img: banner1,
      alt: "Banner 1",
    },
    {
      id: 2,
      img: banner2,
      alt: "Banner 2",
    },
    {
      id: 4,
      img: banner3,
      alt: "Banner 3",
    },
  ];

  return (
    <section className="mb-5">
      <Carousel controls={false} indicators interval={3000} pause={false} slide>
        {banners.map(({ id, img, alt }) => (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={img}
              alt={alt}
              style={{ maxHeight: "534px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banners;
