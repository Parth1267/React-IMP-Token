import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ futureDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(futureDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {`${timeLeft.days.toString().padStart(3, '0')} : ${timeLeft.hours.toString().padStart(2, '0')} : ${timeLeft.minutes.toString().padStart(2, '0')} : ${timeLeft.seconds.toString().padStart(2, '0')}`}
    </div>
  );
};

export default CountdownTimer;
