// import { useEffect, useRef, useState } from 'react'
// import { gsap } from "gsap";
// import SplitType from 'split-type';

// export function mouse() {
//     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//     // 마우스 커서
//     const handleMouseMove = (e) => {
//         setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     useEffect(() => {
//         document.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     // text 회전
//     const circleRef = useRef(null);

//     useEffect(() => {
//         const circle = circleRef.current;

//         circle.addEventListener("mouseover", () => {
//             const target = gsap.utils.toArray(".split");
//             target.forEach(target => {
//                 let splitClient = new SplitType(target, { type: "char" })
//                 let chars = splitClient.chars;

//                 gsap.from(chars, {
//                     xPercent: "200",
//                     rotationY: "+=180",
//                     transformOrigin: "center center"
//                 })
//             })
//         })

//         circle.addEventListener("mouseout", () => {
//             const target = gsap.utils.toArray(".split");
//             target.forEach(target => {
//                 let splitClient = new SplitType(target, { type: "char" })
//                 let chars = splitClient.chars;

//                 gsap.from(chars, {
//                     xPercent: "-200",
//                     rotationY: "+=180",
//                     transformOrigin: "center center"
//                 })
//             })
//         })
//     }, [circleRef])
// }

// export default mouse;