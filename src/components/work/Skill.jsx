import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import arrow2 from '../../assets/image/arrow2.svg'

const Skill = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className='work_Detail'>
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center bottom">
                <span className='center_text'>skill <p>Set</p></span>
                <div className="work_img_wrap">
                    <div className='work_img skill'></div>
                    <div className="circle_wrap">
                        <div className='circle'></div>
                    </div>
                </div>
                <div className="skill">
                    <span></span>
                </div>
            </div>
            {/* work_center */}

            <Link to="/" className="work_back_button">
                <span>Main site</span>
                <img src={arrow2} alt="arrow" />
            </Link>
            {/* work_back_button */}
        </div>
    )
}
export default Skill