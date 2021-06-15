import { createStore,combineReducers } from "redux";
// 使用react-redux管理数据,使用hook处理请求的数据,有复用逻辑的作用.
import topics from './reducer/topics';
import topic from './reducer/topic';
import user from './reducer/user';


export default createStore(combineReducers({
    topics,
    topic,
    user
}))