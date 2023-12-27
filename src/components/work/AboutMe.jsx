import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import arrow2 from '../../assets/image/arrow2.svg'

const AboutMe = () => {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // 마우스 cursor 
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // 글자 횐전

    return (
        <div className='work_Detail'>
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center top_l">
                <span className='center_text'>about <p>me</p></span>
                <div className="work_img_wrap">
                    <div className='work_img aboutme'></div>
                    <div className="circle_wrap">
                        <div className='circle' ></div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        어떤 일이라도 노력하고 즐기면  그 결과는 빛을 바란다고 생각합니다.
                        신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
                        신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
                    </span>
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

export default AboutMe