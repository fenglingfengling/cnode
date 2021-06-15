import React from 'react';
import { Tag } from 'antd';
function setTag(tab) {
    switch (tab) {
        case "top":
            return <Tag color="#87d068" className="topic_tag"></Tag>;
        case "good":
            return <Tag color="#f50" className="topic_tag"></Tag>;
        case "share":
            return <Tag color="green" className="topic_tag"></Tag>;
        case "ask":
            return <Tag color="gold" className="topic_tag"></Tag>;
        case "job":
            return <Tag color="blue" className="topic_tag"></Tag>;
        case "dev":
            return <Tag color="purple" className="topic_tag"></Tag>;
    }
    return null

}
export default function TopicTag(props){
    let {tab} = props;
    return setTag(tab);
};