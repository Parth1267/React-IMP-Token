import React, { useState, useEffect } from 'react';

function  MyTimer({ targetDateTime }) {
    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeRemaining = calculateRemainingTime();
            setRemainingTime(timeRemaining);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const calculateRemainingTime = () => {
        const targetDate = new Date(targetDateTime);
        const currentTime = new Date();
        const timeDifference = targetDate - currentTime;

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    return (
        <div className='d-flex flex-lg-nowrap flex-wrap align-items-baseline text-black fs-3 fw-bold justify-content-between'>
            {/* <p>Time left:</p> */}
            {/* <p>{remainingTime.days} days</p> */}
            <h4 className='text-black fw-bold text-center'>{remainingTime.hours} Hours</h4><span className='text-black fs-3 fw-bold'>:</span>
            <h4 className='text-black fw-bold text-center'>{remainingTime.minutes} Minutes</h4><span className='text-black fs-3 fw-bold'>:</span>
            <h4 className='text-black fw-bold text-center'>{remainingTime.seconds} Seconds</h4>
        </div>
    );
}

export default MyTimer;
