import React from "react";
import { Carousel } from "react-bootstrap";

const Banners: React.FC = () => {
  const banners = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
      alt: "Banner 1",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
      alt: "Banner 2",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
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
