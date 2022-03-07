import React from "react";
import "../../css/SignUp.css"

function SignUp() {
    return (
        <div className="sign-up">
            <div className="id-box">
                <div>Id</div>
                <input></input>
            </div>
            <div className="password-box">
                <div>password</div>
                <input></input>
            </div>
            <div className="nickname-box">
                <div>nickname</div>
                <input></input>
            </div>
            <div>회원 가입</div>
        </div>
    )
}

export default SignUp;