import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import arrow2 from '../../assets/image/arrow2.svg'

const Comment = () => {

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


    return (
        <>
            <div className='comment__info'>
                <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
                <div className="work__title">
                    <h2>portfolio</h2>
                    <span>lee ji young</span>
                </div>
                {/* work__title */}
                <div className="comment_wrap">
                    <div className="comment_img"></div>
                    <div className="comment__view__wrap">
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <Link to="/" className="modify">수정</Link>
                                    <Link to="/" className="delete">삭제</Link>
                                </div>
                                <p className="comment_info">댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
                        </div>
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <Link to="/" className="modify">수정</Link>
                                    <Link to="/" className="delete">삭제</Link>
                                </div>
                                <p className="comment_info">댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
                        </div>
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <Link to="/" className="modify">수정</Link>
                                    <Link to="/" className="delete">삭제</Link>
                                </div>
                                <p className="comment_info">
                                    댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
                        </div>

                        <div className="comment__input">
                            <form>
                                <fieldset>
                                    <legend className="blind">댓글쓰기</legend>
                                    <label htmlFor="commentName" className="blind">
                                        이름
                                    </label>
                                    <input
                                        type="text"
                                        id="commentName"
                                        name="commentName"
                                        className="comment__nickname"
                                        placeholder="Nickname"
                                        required
                                        autoComplete="username"
                                    />
                                    <label htmlFor="commentPass" className="blind">
                                        비밀번호
                                    </label>
                                    <input
                                        type="password"
                                        id="commentPass"
                                        name="commentPass"
                                        className="comment__password"
                                        placeholder="Password"
                                        required
                                        autoComplete="current-password"
                                    />
                                    <label htmlFor="commentWrite" className="blind">
                                        댓글쓰기
                                    </label>
                                    <input
                                        type="text"
                                        id="commentWrite"
                                        name="commentWrite"
                                        className="comment__detail"
                                        placeholder="Leave a comment"
                                        required
                                    />
                                    <button type="button" id="commentWriteBtn" className="comment_btn">
                                        Submit
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>

                <Link to="/home" className="work_back_button">
                    <span>Main site</span>
                    <img src={arrow2} alt="arrow" />
                </Link>
                {/* work_back_button */}
            </div>
        </>
    )
}

export default Comment