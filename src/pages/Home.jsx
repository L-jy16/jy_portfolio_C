import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import arrow from '../assets/image/arrow.svg'
import arrow2 from '../assets/image/arrow2.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        const animationConfig = {
            opacity: 0,
            scale: 0,
            stagger: {
                amount: 0.5,
                grid: 'auto',
                from: 'end',
            },
            duration: 0.5,
            ease: enter ? 'power4.inOut' : 'power4.inOut',
        };

        gsap.from('.main_img_wrap', animationConfig);
    }, [enter]);

    const activeHandle = () => {
        setEnter(true);
    }
    const BackHandle = () => {
        setEnter(false)
    }

    return (
        <div id='wrap'>
            <div id="main__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* main__title */}

            <div id="main_main" className={enter ? "active" : ""}>
                <div id="back_button" onClick={() => BackHandle()}>
                    <img src={arrow} alt="버튼" />
                    <span className="BackButton">back</span>
                </div>
                <div className="text">
                    <span className='center_text'>selected <p>works</p></span>
                </div>
                <div className="work_img_wrap">
                    <div className="main_img_wrap">
                        <div className="main_img i0">
                        </div>
                    </div>
                    <Link to="/" className="main_img_wrap up">
                        <div className="main_img i1 up">
                            {/* <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>none</span>
                            </div> */}
                        </div>
                    </Link>
                    <Link to="/skill" className="main_img_wrap up">
                        <div className="main_img i2 up">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Skill</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/aboutme" className="main_img_wrap up">
                        <div className="main_img i3 up">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>About Me</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/content" className="main_img_wrap up">
                        <div className="main_img i4 up">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Content</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="main_img_wrap up">
                        <div className="main_img i5 up">
                            {/* <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>none</span>
                            </div> */}
                        </div>
                    </Link>
                    <div className="main_img_wrap up">
                        <div className="main_img i0 up">

                        </div>
                    </div>
                    <Link to="/youtube" className="main_img_wrap down">
                        <div className="main_img i6">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Youtube</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/gsap" className="main_img_wrap down">
                        <div className="main_img i7">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>GSAP</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/myuduck" className="main_img_wrap down">
                        <div className="main_img i8">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Myuduck</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/mouse" className="main_img_wrap down">
                        <div className="main_img i9">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Mouse</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/movie" className="main_img_wrap down">
                        <div className="main_img i10">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Movie</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/slide" className="main_img_wrap down">
                        <div className="main_img i11">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Slide</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/addplus" className="main_img_wrap down">
                        <div className="main_img i12">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Add-Plus</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* main_main */}

            <div id="start_button" onClick={() => activeHandle()} className={enter ? "active" : ""}>
                <span className="StartButton">enter</span>
                <img src={arrow} alt="버튼" />
            </div>
            {/* start_button */}

        </div >
    )
}

export default Home
