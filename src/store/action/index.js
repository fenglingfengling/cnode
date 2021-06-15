import axios from "axios";
import { useDispatch } from "react-redux";

const http = axios.create({
    baseURL: " https://cnodejs.org/api/v1"
});
/*
获取主题列表数据
hook重复使用逻辑, 做多个异步的hook,单文件未来请求量大可以维护,
高阶函数复用逻辑,在hooks引入其他hooks,在hooks发送准备发送请求了,把数据清空,状态为topics_loading
所有异步请求都变成单独的一个hooks,当发起请求的时候,调用hooks,hooks帮忙发起请求,发起请求时hooks会自动修改redux状态,redux状态更新之后,通过redux更新视图.之情通过一个个的redux-thunk或function请求的
现在用hooks和function发起请求,请求也是复用逻辑
*/ 
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        dispatch({
            type:"topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:"topics_loadover",
                data: res.data.data
            })
        });
    }
}
// 获取主题详情
function useTopic(){
    let dispatch = useDispatch();
    return function(id){
        dispatch({
            type:"topic_loading"
        })
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:"topic_loadover",
                data: res.data.data
            })
        }).catch((res)=>{
            dispatch({
                type:"topic_error",
                err_msg:res.response.data.error_msg
            })
        });
    }
}
// 获取用户详情
function useUser(){
    let dispatch = useDispatch();
    return function(loginname){
        dispatch({
            type:"user_loading"
        })
        http.get(`/user/${loginname}`).then((res)=>{
            dispatch({
                type:"user_loadover",
                data: res.data.data
            })
        })
    }
}
export {useTopicsList,useTopic,useUser};