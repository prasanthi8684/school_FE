import React from "react";
import "../assets/css/testimonials.css";
import ramaganga from "../images/ramaganga.jpg";
import jayanthi from "../images/jayanthi.jpg";
import suresh from "../images/suresh.jpg";
import renuka from "../images/renuka.jpg";
import revathi from "../images/revathi.jpg";

interface Testimonial {
  name: string;
  message: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "RamaGanga G.",
    role: "Alumni, 2001 Batch",
    message:
      "My years at the school were truly memorable. The teachers were inspiring and supportive.",
    image: ramaganga,
  },
  {
    name: "jayanthi K.",
    role: "Alumni, 2010 Batch",
    message:
      "The school gave me confidence and lifelong friends. I'm proud to be part of this family!",
    image: jayanthi,
  },
  {
    name: "Suresh B.",
    role: "Alumni, 2005 Batch",
    message:
      "Wonderful experience! The cultural events and guidance shaped my career path.",
    image: suresh,
  },
  {
    name: "Renuka J.",
    role: "Alumni, 2005 Batch",
    message:
      "Excellent teachers and environment. My child loves going to school every day!",
    image: renuka,
  },
  {
    name: "Revathi G.",
    role: "Alumni, 2008 Batch",
    message:
      "Excellent teachers and environment. My child loves going to school every day!",
    image: revathi,
  },
  // {
  //   name: "John Tan",
  //   role: "Parent",
  //   message:
  //     "Excellent teachers and environment. My child loves going to school every day!",
  //   image: "https://randomuser.me/api/portraits/men/67.jpg",
  // },
  // {
  //   name: "John Tan",
  //   role: "Parent",
  //   message:
  //     "Excellent teachers and environment. My child loves going to school every day!",
  //   image: "https://randomuser.me/api/portraits/men/67.jpg",
  // },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Voices of Our Alumni</h2>
      <div className="testimonial-scroll">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="testimonial-message">“{t.message}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
