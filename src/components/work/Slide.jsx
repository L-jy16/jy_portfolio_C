import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";

import arrow2 from '../../assets/image/arrow2.svg'

const Slide = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const navgaite = useNavigate();

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

    // 화면 전환 효과
    useEffect(() => {

        gsap.set(".work_img", { opacity: 0, x: "-100%", y: "-100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, x: 0, y: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".desc", { opacity: 1, duration: 0.41 })
            tl.to(".circle_wrap", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
            tl.to(".comment_link", { opacity: 1, duration: 0.41 })
        })
    }, [])

    const commentHandle = () => {
        navgaite("/comment");
    }

    return (
        <div className='work_Detail'>
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center top_l">
                <span className='center_text split'>slide <p>site</p></span>
                <div className="work_img_wrap">
                    <div className='work_img slide'></div>
                    <div className="circle_wrap">
                        <div className='circle' onClick={() => commentHandle()}>
                            <div className="coin"></div>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        JABASCRIPT와 JQUERY, GSAP를 활용하여 여러 유형의 슬라이드 효과를 보여줄 수 있는 사이트를 만들었습니다.
                        트랜지션 효과, 좌로 움직이는 효과 등의 슬라이드 효과를  JABASCRIPT와 JQUERY, GSAP 3가지 방법으로 구현하였습니다.
                    </span>
                    <div className="work_btn">
                        <Link to="http://ljy16.dothome.co.kr/javascript/slider/slider01.html">view</Link>
                        <Link to="https://github.com/L-jy16/webs2024/tree/main/javascript/slider">code</Link>
                    </div>
                </div>
            </div>
            {/* work_center */}

            <div className="link_button">
                <Link to='/test' className="work_back_button">
                    <span>Main site</span>
                    <img src={arrow2} alt="arrow" />
                </Link>

                <Link to="/comment" className='comment_link'>comment</Link>
            </div>
            {/* work_back_button */}
        </div>
    )
}

export default Slide