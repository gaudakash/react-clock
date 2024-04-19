import React, { useEffect, useState } from "react";

const Clocksamay = () => {
  const [samyae, setSamyae] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSamyae(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      This is the Time :{samyae.toLocaleDateString()}-
      {samyae.toLocaleTimeString()}
    </p>
  );
};

export default Clocksamay;
