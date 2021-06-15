import logo from './logo.svg';
// import './App.css';
// import {Button} from 'antd';
// import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { route } from './router';
import { Layout } from 'antd';
import Header from './component/header';
import Footer from './component/footer';
import './static/css/index.css';// 提高定义样式优先级,不然会被覆盖,或者提高样式优先级,尽量不要ant改样式.
function App() {
  // console.log(useSelector(state=>state))
  return (
    <Layout className="page">
      {/* <Button>三场雨</Button> */}
      <Header/>
      <Layout.Content>
        <div className="wrap">
        <Switch>
        {route.map((itemData, index) => {
          return (<Route
            key={index}
            path={itemData.path}
            exact={itemData.exact}
            render={(props) => {
              props.username = 'kaixin'; // 这样使用可以参数从上往下传参
              return itemData.render(props);
            }}
          />)
        })}
      </Switch>
        </div>
      </Layout.Content>
      <Footer/>
    </Layout>
  );
}
export default App;
