import React, { useEffect,  useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { gsap } from "gsap";

import arrow2 from '../../assets/image/arrow2.svg'

const AboutMe = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // const backbtn = "true" ;
    // const [backbtn, setBacbtn] = useState("") ;
    const navigate = useNavigate();

    // back_btn
    const backhandle = () => {
        // setBacbtn("true");
        navigate('/true');
    }

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

        gsap.set(".work_img", { opacity: 0, y: "-100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, y: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".desc", { opacity: 1, duration: 0.41 })
            tl.to(".circle_wrap", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
        })
    }, [])

    return (
        <div className='work_Detail'>
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center top_l">
                <span className='center_text split'>about <p>me</p></span>
                <div className="work_img_wrap">
                    <div className='work_img aboutme'></div>
                    <div className="circle_wrap">
                        <div className='circle'></div>
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

            <Link to='/true' className="work_back_button" onClick={() => backhandle()}>
                <span>Main site</span>
                <img src={arrow2} alt="arrow" />
            </Link>
            {/* work_back_button */}
        </div>
    )
}

export default AboutMe