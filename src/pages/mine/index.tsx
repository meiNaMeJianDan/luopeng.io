import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.less'

interface user {
    name: string,
    age: number,
    hobby?: string[],
}

const Mine = () => {
    const [a, setA] = useState<user>()
    useEffect(() => {
        setA({
            name: "小黑子",
            age: 27,
            hobby: ["唱", "跳", "rap", "篮球"]
        })
    }, [])

    return (<Fragment>
        <div className="title">姓名：{a?.name}</div>
        <Link to="/test">去测试页面</Link>
    </Fragment>)
}

export default Mine