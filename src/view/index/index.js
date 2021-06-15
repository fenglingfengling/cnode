import React, { useEffect } from 'react';
import IndexNav from './indexNav';
import TopicsList from '../../component/topicslist';
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import IndexPagination from './indexPagination';
function IndexPage(props){
    let {data,loading} = useSelector(state=>state.topics);
    let getData = useTopicsList();
    let {search} = useLocation();
    let {tab,page} = qs.parse(search.substr(1));
    useEffect(()=>{
        getData(tab,page)
    },[tab,page])

    // console.log(props);
    return(
        <div style={{marginTop:10}}>
            <IndexNav/>
            <TopicsList 
            data={data}
            loading={loading}
            />
            <IndexPagination/>
            {/* {loading?"":<IndexPagination />}  解决分页全部页码输加载出来,出现多列行页码数*/}
        </div>
    )
}
export default IndexPage;