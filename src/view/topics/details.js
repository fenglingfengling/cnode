import React, { Fragment } from "react";
import TopicTag from "../../component/topicTag";
import {Link} from "react-router-dom";
import { Card } from "antd";
import FromNow from "../../component/fromnow";

export default function Details(props){
    let {data,loading} = props;
    let {author,content,create_at,good,top,tab,title,visit_count} = data;
    console.log(data);
    return <Card
        bordered
        loading={loading}
        title = {<Fragment>
            <h1><TopicTag tab={top?"top":(good?"good":tab)} />{title}
            {/* {author.log} 没有这个值会报错 FullStack\hookvercnode2\antd-demo\src\store\reducer\topic.js 声明一个author解决问题 data: {author:{}}, */}
            </h1>
            <p>- 作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>　- 创建时间：<FromNow date={create_at} />　- 浏览人数：{visit_count}</p>
        </Fragment>}
        type="inner"
    >
        <div
            dangerouslySetInnerHTML={{
                __html:content
            }}
        ></div>
    </Card>
}