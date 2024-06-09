import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2005-05-25T07:26:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 6,
    link: 'https://www.google.com/maps/d/edit?mid=1jIRPzPL-qH15CU9WRQl7fsPSRN_Wq94&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Ashburn, VA',
  },
];

export default data;
