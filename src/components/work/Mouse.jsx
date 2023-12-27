import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import SplitType from 'split-type';

import arrow2 from '../../assets/image/arrow2.svg'

const Mouse = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // 마우스 커서
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // text 회전
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;

        circle.addEventListener("mouseover", () => {
            const target = gsap.utils.toArray(".split");
            target.forEach(target => {
                let splitClient = new SplitType(target, { type: "char" })
                let chars = splitClient.chars;

                gsap.from(chars, {
                    xPercent: "200",
                    rotationY: "+=180",
                    transformOrigin: "center center"
                })
            })
        })

        circle.addEventListener("mouseout", () => {
            const target = gsap.utils.toArray(".split");
            target.forEach(target => {
                let splitClient = new SplitType(target, { type: "char" })
                let chars = splitClient.chars;

                gsap.from(chars, {
                    xPercent: "-200",
                    rotationY: "+=180",
                    transformOrigin: "center center"
                })
            })
        })
    }, [circleRef])
    return (
        <div className='work_Detail'>
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center left">
                <span className='center_text split'>mouse <p>site</p></span>
                <div className="work_img_wrap">
                    <div className='work_img mouse'></div>
                    <div className="circle_wrap">
                        <div className='circle' ref={circleRef}></div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        어떤 일이라도 노력하고 즐기면  그 결과는 빛을 바란다고 생각합니다.
                        신입의 열정과 도전정신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
                        신을 깊숙히 새기며 배움에 있어 겸손함을 유지하며 세부적인 곳까지 파고드는 개발자가 되겠습니다.
                    </span>
                    <div className="work_btn">
                        <Link to="/">view</Link>
                        <Link to="/">code</Link>
                    </div>
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

export default Mouse