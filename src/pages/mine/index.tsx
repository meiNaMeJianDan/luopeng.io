import React, { useEffect, useState } from "react";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import { Tag } from "antd"
import userInfo from "@/data/luopeng";
import './index.less'


const Mine = () => {
    const { name, sex, birth, job, tel, email, school,years,statusLabel, skills, experience } = userInfo

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
                <div className="reference">{sex}/{birth}/{job}/{years}年/{statusLabel}</div>
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
                    <div className="title">工作经历</div>
                    <div className="line" />
                </div>
                <div className="content">
                    <div className="exp">
                        {experience?.map((item: any) => (
                            <div className="exp-item" key={item?.companyName}>
                                <div className="exp-title">
                                    <div className="exp-title-name">
                                        {item?.companyName}
                                    </div>
                                    <div className="exp-title-tile">
                                        {item?.time[0]}~{item?.time[1]}
                                    </div>
                                </div>
                                <div className="exp-content">
                                    {item?.itemList?.map((a: any) => (
                                        <div key={a.name}>
                                            <div className="exp-content-name">
                                                {a.name}
                                            </div>
                                            <div className="exp-content-technology">
                                                {a?.technology?.map((b: any) => (<Tag key={b}>{b}</Tag>))}
                                            </div>
                                            <ul className="exp-content-discription">
                                                {a?.discription?.map((b: any) => (<li key={b}>{b}</li>))}
                                            </ul>
                                        </div>))}
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
            {/* 教育经历 */}
            <div className="school">
                <div className="title-box">
                    <div className="title">教育经历</div>
                    <div className="line" />
                </div>
                <div className="content">
                    <div className="school-info">
                        <div className="school-info-name">
                            {school?.name}
                        </div>
                        <div className="school-info-time">
                            {school?.time}
                        </div>
                    </div>
                    <div className="school-major marginTop10">
                        {school?.grade} - {school?.major}
                    </div>
                </div>
            </div>
        </div>)
}

export default Mine