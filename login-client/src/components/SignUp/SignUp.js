import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/SignUp.css";

function SignUp() {

    const [idContent, setIdContent] = useState(" ");
    const [psContent, setPsContent] = useState(" ");
    const [nickContent, setNickContent] = useState(" ");
    const navigate = useNavigate();

    const isId = (id) => {

        const idRegEXP = /^[0-9a-zA-Z]{6,15}$/;
        return idRegEXP.test(id);
    }

    const isPassword = (password) => {
        const passRegEXP = /^[!@#$%^&*0-9a-zA-Z]{8,20}$/;

        return passRegEXP.test(password);
    }

    const isnickname = (nickname) => {
        const nickRegEXP = /^[0-9a-zA-Zㄱ-힣]{3,10}$/;

        return nickRegEXP.test(nickname);
    }

    const isAvailable = (id, password, nickname) => {
        const idAlert = document.getElementsByClassName("id-alert")[0];
        const passwordAlert = document.getElementsByClassName("password-alert")[0];
        const nicknameAlert = document.getElementsByClassName("nickname-alert")[0];
        let [isPassId, isPassPassWord, isPassNick] = [false, false, false];

       if (!idAlert || !passwordAlert || !nicknameAlert) return;

        if (!isId(id) && id !== " ") {
            idAlert.style.display = 'block';
        } else if (isId(id)) {
            idAlert.style.display = 'none';
            isPassId = true;
        }

        if (!isPassword(password) && password !== " ") {
            passwordAlert.style.display = 'block';
        } else if (isPassword(password)) {
            passwordAlert.style.display = 'none';
            isPassPassWord = true;
        }

        if (!isnickname(nickname) && nickname !== " ") {
            nicknameAlert.style.display = 'block';
        } else if (isnickname(nickname)) {
            nicknameAlert.style.display = 'none';
            isPassNick = true;
        }
        return isPassId && isPassPassWord && isnickname;
    }

    const postInfo = async (id, password, nickname) => {
        const isPossible = isAvailable(id, password, nickname);

        if (isPossible === false) {
            return;
        } else {
    
            try { 
                const posting = await axios.post('http://localhost:3001/user/signup', {
                    id: id,
                    password: password,
                    nickname: nickname
                })

                navigate('/');

            } catch (err) {
                if (err.response.status === 409) {
                    alert("중복된 Id가 존재합니다.")
                } 
            }


        }
    }

    return (
        <div className="sign-up">
            <div className="id-box">
                <div>Id</div>
                <input 
                    onBlur={(e) => setIdContent(e.target.value)} 
                />
                <div className="id-alert">특수 문자를 제외한 6 ~ 15자 내 영문,숫자로 구성해주세요.</div>           
            </div>
            <div className="password-box">
                <div>password</div>
                <input 
                    onBlur={(e) => setPsContent(e.target.value)}
                />
                <div className="password-alert">8 ~ 20자 내로 구성해주세요.</div>
            </div>
            <div className="nickname-box">
                <div>nickName</div>
                <input 
                    onBlur={(e) => setNickContent(e.target.value)}
                />    
                <div className="nickname-alert">특수문자를 제외하고 3 ~ 10자 내로 구성해주세요.</div>
            </div>
            <div onClick={() => postInfo(idContent, psContent, nickContent)}>회원 가입
            </div>
        </div>
    )
}

export default SignUp;