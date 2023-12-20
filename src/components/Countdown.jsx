import React from "react";
import Countdown from "react-countdown";
import "./Countdown.css";

const CountdownTimer = () => {
    const targetDate = new Date("September 25, 2025 12:00:00 GMT+00:00");

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>¡Es el día!</span>;
            } else {
                return (
                    <article className="countdown-container">
                        <div className="countdown-item">
                            <div className="countdown-value">{days}</div>
                            <h6 className="countdown-label">DAYS</h6>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value">{hours}</div>
                            <h6 className="countdown-label">HOURS</h6>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value">{minutes}</div>
                            <h6 className="countdown-label">MINUTES</h6>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-value">{seconds}</div>
                            <h6 className="countdown-label">SECONDS</h6>
                        </div>
                    </article>
                );
            }
        };

    return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
