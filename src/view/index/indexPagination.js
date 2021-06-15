import { Pagination } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import qs from 'qs';
function IndexPagination(){
   let {search} = useLocation();
   // 有时候没有首页当是/的时候
   let {tab="all",page=1} = qs.parse(search.substr(1));
   return(<div className="index-pagination">
      <Pagination 
      current={page-0} // 上面解析page是字符串 但是current源码是数字所以出现行问题,保证数字隐式转换
      defaultPageSize={20}
      total={1000}
      itemRender={(page,type)=>{
         switch(type){
            case "page":
               return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
            case "prev":
               return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
            case "next":
               return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
               default:
                  return <Link to={`/?tab=${tab}&page=${page}`}>{"…"}</Link>

         }
      }}
      />
   </div>)
}
export default IndexPagination;