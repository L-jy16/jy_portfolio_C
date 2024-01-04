import React, { useEffect } from 'react'
import { gsap } from "gsap";

const Popup = ({ closePopup }) => {

    const modifybtn = () => { }
    const deletebtn = () => { }

    const closePopupHandler = () => {
        closePopup();
    };

    useEffect(() => {
        if (closePopup) {
            gsap.set(".popup_wrap", { opacity: 0, xPercent: "0", yPercent: "0" })

            gsap.to(".popup_wrap", {
                opacity: 1,
                xPercent: "-100%",
                yPercent: "-100%",
                duration: 0.5,
                ease: "power2.out",

            });
        }
    }, [closePopup])

    return (
        <div>
            <div className="popup_wrap">
                <div className="comment">
                    <div className="comment__view__wrap">
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <span to="/" className="modify" onClick={() => modifybtn()}>수정</span>
                                    <span to="/" className="delete" onClick={() => deletebtn()}>삭제</span>
                                </div>
                                <p className="comment_info">댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
                        </div>
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <span to="/" className="modify">수정</span>
                                    <span to="/" className="delete">삭제</span>
                                </div>
                                <p className="comment_info">댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
                        </div>
                        <div className="Comment__view">
                            <div className="text">
                                <div className="comment_user">
                                    <span className="author">nickname</span>
                                    <span className="date">2023.01.04</span>
                                    <span to="/" className="modify">수정</span>
                                    <span to="/" className="delete">삭제</span>
                                </div>
                                <p className="comment_info">
                                    댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.</p>
                            </div>
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
                <button className="close_button" onClick={closePopupHandler}>
                    <span>close</span>
                </button>
            </div>
        </div>
    )
}

export default Popup
