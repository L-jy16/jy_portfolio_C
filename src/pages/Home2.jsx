import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

import img01 from "../assets/image/i1-min.png"
import img02 from "../assets/image/i2-min.png"
import img03 from "../assets/image/i3-min.png"
import img04 from "../assets/image/i4-min.png"
import img05 from "../assets/image/i5-min.png"
import img06 from "../assets/image/i6-min.png"
import img07 from "../assets/image/i7-min.png"
import img08 from "../assets/image/i8-min.png"
import img09 from "../assets/image/i9-min.png"
import img10 from "../assets/image/i10-min.png"
import img11 from "../assets/image/i11-min.png"
import img12 from "../assets/image/i12-min.png"


const Home2 = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const plane4 = useRef(null);
    const plane5 = useRef(null);
    const plane6 = useRef(null);
    const plane7 = useRef(null);
    const plane8 = useRef(null);
    const plane9 = useRef(null);
    const plane10 = useRef(null);
    const plane11 = useRef(null);
    const plane12 = useRef(null);

    const [isClicking, setIsClicking] = useState(false);

    const navgaite = useNavigate()

    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;

    const easing = 0.08;
    const speed = 0.01;

    useEffect(() => {
        const animationConfig = {
            opacity: 0,
            scale: 0,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                from: 'end',
            },
            duration: 0.4,
            ease: 'power4.inOut',
        };

        gsap.from('.imgs', animationConfig);

    }, [])

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e
        if (!isClicking) {
            xForce += movementX * speed;
            yForce += movementY * speed;

            if (requestAnimationFrameId == null) {
                requestAnimationFrameId = requestAnimationFrame(animate);
            }
        }
    }

    const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        // gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        // gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        // gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane6.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane8.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane10.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane4.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane7.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane12.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane5.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane11.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane9.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce !== 0 || yForce !== 0) {
            requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null;
        }
    }

    const BackHandle = () => {
        navgaite("/")
    };

    const moveHandle = (path) => {
        setIsClicking(true);
        navgaite(path);
    }

    const clickHandle = () => {
        setIsClicking(false);
    };

    return (
        <div id='active__wrap' onMouseMove={(e) => manageMouseMove(e)} onMouseDown={() => clickHandle()} onMouseUp={() => clickHandle()} >

            <div className="imgs">
                <img ref={plane1} src={img01} alt="image01" className='i01' onClick={() => moveHandle("/search")} />
                <img ref={plane6} src={img06} alt="image10" className='i06' onClick={() => moveHandle("/youtube")} />
                <img ref={plane8} src={img08} alt="image03" className='i08' onClick={() => moveHandle("/myuduck")} />
                <img ref={plane10} src={img10} alt="image04" className='i10' onClick={() => moveHandle("/movie")} />

                <img ref={plane2} src={img02} alt="image05" className='i02' onClick={() => moveHandle("/skill")} />
                <img ref={plane4} src={img04} alt="image06" className='i04' onClick={() => moveHandle("/content")} />
                <img ref={plane7} src={img07} alt="image07" className='i07' onClick={() => moveHandle("/gsap")} />
                <img ref={plane12} src={img12} alt="image08" className='i12' onClick={() => moveHandle("/addplus")} />

                <img ref={plane3} src={img03} alt="image09" className='i03' onClick={() => moveHandle("/aboutme")} />
                <img ref={plane5} src={img05} alt="image02" className='i05' onClick={() => moveHandle("/blog")} />
                <img ref={plane11} src={img11} alt="image11" className='i11' onClick={() => moveHandle("/slide")} />
                <img ref={plane9} src={img09} alt="image12" className='i09' onClick={() => moveHandle("/mouse")} />

                <div id="back_button" onClick={() => BackHandle()}>
                    <span className="BackButton">back</span>
                </div>
            </div>

            <div id="active__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
        </div>
    )
}

export default Home2;