import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from "./brain.png"
import './Logo.css';

const Logo = () => (
        <Tilt
        className="Tilt br2 shadow-2 ma4 mt0"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.3}
        >
        <div className="inner-element">
            <img alt="brain logo" src={brain} />
        </div>
        </Tilt>
    );
  
export default Logo;