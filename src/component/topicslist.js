import React from 'react';
import {List, Col, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import TopicTag from './topicTag';
import FromNow from './fromnow';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// console.log(moment().set("month",0).fromNow());
// import dayjs from 'dayjs';
// var relativeTime = require('dayjs/plugin/relativeTime');
// dayjs.extend(relativeTime);
// require('dayjs/locale/zh-cn');
// dayjs.locale('zh-cn');
// console.log(dayjs().set("month",0).fromNow());
function TopicsList(props){
    let {loading,data} = props;
    return (
        <List
        className="topics_list"
        loading={loading}
        dataSource={data}
        renderItem={(data)=>{
            let {author,last_reply_at,good,top,tab,title,id} = data;
            let {loginname,avatar_url} = author;
            // console.log(data);
            return <List.Item>
                <Col>
                <Link to={`/user/${loginname}`}>
                        <Avatar 
                        icon={<UserOutlined/>}
                        src={avatar_url}
                        title={loginname}
                        onError={(error)=>{
                            console.log(error);
                        }}
                        />
                    </Link>
                </Col>
                <Col xs={24} md={22}>
                    <TopicTag tab={top?"top":(good?"good":tab)} />
                    <Link to={`/topics/${id}`} style={{marginLeft:10}}>{title}</Link>
                </Col>
                <Col xs={0} md={2}
                className="from_now"
                >
                    {/* {dayjs(last_reply_at).fromNow()} */}
                    <FromNow date={last_reply_at}/>
                </Col>
            </List.Item>
        }}
        />
    )
}
export default TopicsList;