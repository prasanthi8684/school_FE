import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Sarada Vidyalaya Alumni Network
      </p>
    </footer>
  );
};

export default Footer;
