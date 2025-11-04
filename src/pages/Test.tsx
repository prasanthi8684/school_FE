import React, { useEffect, useState } from "react";

const Test: React.FC = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Ram");
  }, []);

  return <div>Test, {name}</div>;
};
export default Test;
