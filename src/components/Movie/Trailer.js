import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactPlayer from "react-player";
import "./Trailer.css";

const Trailer = (props) => {
    return (
        <div className="player-wrapper" href="/trailer">
            <ReactPlayer
                className="react-player"
                controls
                playing
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=-L-z8VNbrcU"
            />
        </div>
    );
};

export default Trailer;
