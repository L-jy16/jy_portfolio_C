import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import arrow2 from '../assets/image/arrow2.svg'
import { useNavigate } from 'react-router-dom';



const Homeactive = () => {
    const [activedark, setAactivedark] = useState("");
    const [move, setMove] = useState("")

    const navgaite = useNavigate();

    useEffect(() => {
        const animationConfig = {
            opacity: 0,
            scale: 0,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                from: 'end',
            },
            duration: 0.3,
            ease: 'power4.inOut',
        };
        gsap.from('.main_img_wrap', animationConfig);
    }, [])

    const BackHandle = () => {
        navgaite("/");
    };

    const handleHover = (index) => {
        setAactivedark(index);
    };

    const handleLeave = () => {
        setAactivedark(null);
    };

    const LinkHandler = (e) => {
        setMove(e)
    }

    useEffect(() => {
        const tl = gsap.timeline();
        switch (move) {
            case "i1":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a2", { x: "0%", y: "-100%", duration: 0.3 })
                    .add(() => navgaite("/search"));
                // navgaite("/search")
                break;
            case "i2":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a2", { x: "0%", y: "-100%", duration: 0.3 })
                    .add(() => navgaite("/skill"));
                // navgaite("/skill")
                break;
            case "i3":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a3", { x: "0%", y: "-100%", duration: 0.3 })
                    .add(() => navgaite("/aboutme"));
                // navgaite("/aboutme")
                break;
            case "i4":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a4", { x: "0%", y: "-100%", duration: 0.3 })
                    .add(() => navgaite("/content"));
                // navgaite("/content")
                break;
            case "i5":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a4", { x: "0%", y: "-100%", duration: 0.3 })
                    .add(() => navgaite("/blog"));
                // navgaite("/blog")
                break;
            case "i6":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a6", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/youtube"));
                // navgaite("/youtube")
                break;
            case "i7":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a7", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/gsap"));
                // navgaite("/gsap")
                break;
            case "i8":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a8", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/myuduck"));
                // navgaite("/myuduck")
                break;
            case "i9":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a9", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/mouse"));
                // navgaite("/mouse")
                break;
            case "i10":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a10", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/movie"));
                // navgaite("/movie")
                break;
            case "i11":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i12", { opacity: 0, duration: 0.3 })
                tl.to(".a11", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/slide"));
                // navgaite("/slide")
                break;
            case "i12":
                tl.to(".center, #main__title", { opacity: 0, duration: 0.3 })
                tl.to("#back_button", { opacity: 0, duration: 0.3 })
                tl.to(".i1", { opacity: 0, duration: 0.3 })
                tl.to(".i2", { opacity: 0, duration: 0.3 })
                tl.to(".i3", { opacity: 0, duration: 0.3 })
                tl.to(".i4", { opacity: 0, duration: 0.3 })
                tl.to(".i5", { opacity: 0, duration: 0.3 })
                tl.to(".i6", { opacity: 0, duration: 0.3 })
                tl.to(".i7", { opacity: 0, duration: 0.3 })
                tl.to(".i8", { opacity: 0, duration: 0.3 })
                tl.to(".i9", { opacity: 0, duration: 0.3 })
                tl.to(".i10", { opacity: 0, duration: 0.3 })
                tl.to(".i11", { opacity: 0, duration: 0.3 })
                tl.to(".a12", { x: "0%", y: "100%", duration: 0.3 })
                    .add(() => navgaite("/addplus"));
                // navgaite("/addplus")
                break;
            default:
        }

    }, [move, navgaite])


    return (
        <div id='wrap'>
            <div id="main__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* main__title */}

            <div id="main_main" className="active">
                <div id="back_button" onClick={() => BackHandle()}>
                    <span className="BackButton">back</span>
                </div>

                <div className="up">
                    <div
                        className='main_img_wrap a1'
                        // className={` ${activedark ? (activedark === 'i1' ? 'main_img_wrap activedark i1' : 'main_img_wrap gray i1') : 'main_img_wrap i1'}`}
                        onClick={() => LinkHandler('i1')}
                        onMouseEnter={() => handleHover('i1')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i1'> */}
                        <div className={` ${activedark ? (activedark === 'i1' ? 'main_img activedark i1' : 'main_img gray i1') : 'main_img i1'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Search</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a2'
                        // className={` ${activedark ? (activedark === 'i2' ? 'main_img_wrap activedark i2' : 'main_img_wrap gray i2') : 'main_img_wrap i2'}`}
                        onClick={() => LinkHandler('i2')}
                        onMouseEnter={() => handleHover('i2')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i2'> */}
                        <div className={` ${activedark ? (activedark === 'i2' ? 'main_img activedark i2' : 'main_img gray i2') : 'main_img i2'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Skill</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a3'
                        // className={` ${activedark ? (activedark === 'i3' ? 'main_img_wrap activedark i3' : 'main_img_wrap gray i3') : 'main_img_wrap i3'}`}
                        onClick={() => LinkHandler('i3')}
                        onMouseEnter={() => handleHover('i3')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i3'> */}
                        <div className={` ${activedark ? (activedark === 'i3' ? 'main_img activedark i3' : 'main_img gray i3') : 'main_img i3'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>About Me</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a4'
                        // className={` ${activedark ? (activedark === 'i4' ? 'main_img_wrap activedark i4' : 'main_img_wrap gray i4') : 'main_img_wrap i4'}`}
                        onClick={() => LinkHandler('i4')}
                        onMouseEnter={() => handleHover('i4')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i4'> */}
                        <div className={` ${activedark ? (activedark === 'i4' ? 'main_img activedark i4' : 'main_img gray i4') : 'main_img i4'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Content</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a5'
                        // className={` ${activedark ? (activedark === 'i5' ? 'main_img_wrap activedark i5' : 'main_img_wrap gray i5') : 'main_img_wrap i5'}`}
                        onClick={() => LinkHandler('i5')}
                        onMouseEnter={() => handleHover('i5')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i5'> */}
                        <div className={` ${activedark ? (activedark === 'i5' ? 'main_img activedark i5' : 'main_img gray i5') : 'main_img i5'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <span className='center_text'>selected <p>works</p></span>
                </div>
                <div className="down">
                    <div
                        className='main_img_wrap a6'
                        // className={` ${activedark ? (activedark === 'i6' ? 'main_img_wrap activedark i6' : 'main_img_wrap gray i6') : 'main_img_wrap i6'}`}
                        onClick={() => LinkHandler('i6')}
                        onMouseEnter={() => handleHover('i6')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i6'> */}
                        <div className={` ${activedark ? (activedark === 'i6' ? 'main_img activedark i6' : 'main_img gray i6') : 'main_img i6'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Youtube</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a7'
                        // className={` ${activedark ? (activedark === 'i7' ? 'main_img_wrap activedark i7' : 'main_img_wrap gray i7') : 'main_img_wrap i7'}`}
                        onClick={() => LinkHandler('i7')}
                        onMouseEnter={() => handleHover('i7')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i7'> */}
                        <div className={` ${activedark ? (activedark === 'i7' ? 'main_img activedark i7' : 'main_img gray i7') : 'main_img i7'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>GSAP</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a8'
                        // className={` ${activedark ? (activedark === 'i8' ? 'main_img_wrap activedark i8' : 'main_img_wrap gray i8') : 'main_img_wrap i8'}`}
                        onClick={() => LinkHandler('i8')}
                        onMouseEnter={() => handleHover('i8')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i8'> */}
                        <div className={` ${activedark ? (activedark === 'i8' ? 'main_img activedark i8' : 'main_img gray i8') : 'main_img i8'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Myuduck</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a9'
                        // className={` ${activedark ? (activedark === 'i9' ? 'main_img_wrap activedark i9' : 'main_img_wrap gray i9') : 'main_img_wrap i9'}`}
                        onClick={() => LinkHandler('i9')}
                        onMouseEnter={() => handleHover('i9')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i9'> */}
                        <div className={` ${activedark ? (activedark === 'i9' ? 'main_img activedark i9' : 'main_img gray i9') : 'main_img i9'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Mouse</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a10'
                        // className={` ${activedark ? (activedark === 'i10' ? 'main_img_wrap activedark i10' : 'main_img_wrap gray i10') : 'main_img_wrap i10'}`}
                        onClick={() => LinkHandler('i10')}
                        onMouseEnter={() => handleHover('i10')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i10'> */}
                        <div className={` ${activedark ? (activedark === 'i10' ? 'main_img activedark i10' : 'main_img gray i10') : 'main_img i10'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Movie</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a11'
                        // className={` ${activedark ? (activedark === 'i11' ? 'main_img_wrap activedark i11' : 'main_img_wrap gray i11') : 'main_img_wrap i11'}`}
                        onClick={() => LinkHandler('i11')}
                        onMouseEnter={() => handleHover('i11')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i11'> */}
                        <div className={` ${activedark ? (activedark === 'i11' ? 'main_img activedark i11' : 'main_img gray i11') : 'main_img i11'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Slide</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap a12'
                        // className={` ${activedark ? (activedark === 'i12' ? 'main_img_wrap activedark i12' : 'main_img_wrap gray i12') : 'main_img_wrap i12'}`}
                        onClick={() => LinkHandler('i12')}
                        onMouseEnter={() => handleHover('i12')}
                        onMouseLeave={handleLeave}
                    >
                        {/* <div className='main_img i12'> */}
                        <div className={` ${activedark ? (activedark === 'i12' ? 'main_img activedark i12' : 'main_img gray i12') : 'main_img i12'}`}>
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Add-Plus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* main_main */}
        </div >
    )
}

export default Homeactive
