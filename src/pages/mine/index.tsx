import React, { useEffect, useState } from "react";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import userInfo from "@public/luopeng";
import './index.less'


const Mine = () => {
    const { name, sex, birth, job, tel, email, school, major, skills } = userInfo

    const call = (tel: string) => {
        window.location.href = `tel:${tel}`
    }
    const mailTo = (email: string) => {
        window.location.href = `mailto:${email}`
    }
    useEffect(() => {
    }, [])

    return (
        <div className="mine">
            {/* 基础信息 */}
            <div className="userinfo">
                <div className="name">{name}</div>
                <div className="reference">{sex}/{birth}/{job}</div>
                <div className="school marginTop10">{school} {major}</div>
                <div className="info marginTop10">
                    <div className="tel" onClick={() => call(tel)}><PhoneFilled className="green" />{tel}</div>
                    <div className="email green" onClick={() => mailTo(email)}><MailFilled />{email}</div>
                </div>
            </div>
            {/* 个人技能 */}
            <div className="skill">
                <div className="title-box">
                    <div className="title">个人技能</div>
                    <div className="line" />
                </div>
                <div className="content">
                    <ul>
                        {skills?.map((item: any, index: any) => (<li key={index} className="skill-item">{item}</li>))}
                    </ul>
                </div>
            </div>
            {/* 工作经历 */}
            <div className="skill">
                <div className="title-box">
                    <div className="title">个人技能</div>
                    <div className="line" />
                </div>
                <div className="content">
                    <ul>
                        {skills?.map((item: any, index: any) => (<li key={index} className="skill-item">{item}</li>))}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Mine