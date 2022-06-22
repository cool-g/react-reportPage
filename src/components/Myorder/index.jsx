import React,{useEffect, useState} from 'react'
import { OrderWrapper,EmptyItem } from './style'
import OrderList from '../OrderList'
import { getOrder,getCommend} from '../../api/request'
import WeUI from 'react-weui'
import fanhui from '../../assets/images/fanhui.svg'
import gengduo from '../../assets/images/gengduo.svg'
import sousuo from '../../assets/images/sousuo.svg'
import empty from '../../assets/images/empty.png'
import RecommendList from '../RecommendList'
const {
  Toast
} = WeUI;

export default function Myorder() {
  const [loading,setLoading]=useState(false);
  const [tab,setTab] = useState('全部');
  const [query,setQuery] = useState('');
  const [list,setList] =useState([]);
  const [recommend,setRecommend] = useState([]);

  const changeTab= (target) => {
    setTab(target);
  }
  const handleEnterKey = (e) => {
    if(e.nativeEvent.keyCode === 13){
      setQuery(e.target.value);
    }
  }
  const deleteOrder = (id) => {
      setList(list.filter(order => order.id!==id));
  }
  useEffect(()=> {
    (async()=> {
      // console.log(await getCommend());
      const {data} = await getCommend();
      setRecommend([...data]);
    })()
  })
  useEffect(()=>{
    setLoading(true);
    (async()=>{
      // console.log(await getOrder({tab,query}))
      const {result} = await getOrder({tab,query});
      // console.log(result);
      setList([
        ...result
      ])
      setLoading(false);
    })()
  },[tab,query])

  
  return (
    <OrderWrapper>
      <div className="head">
        <div className="searchOrder">
          <img src={fanhui} alt="返回"/>
          <div className='searchgroup'>
            <input 
              placeholder="搜索订单" 
              // value={query} 
              // onChange={e=>setQuery(e.target.value)}
              onKeyPress={handleEnterKey}
            />
            <img className="searchimg" src={sousuo} alt="搜索"/>
          </div>
          <img src={gengduo} alt="更多"/>
        </div>

        <ul>
          <li className={tab=='全部'?'active':''} onClick={()=>changeTab('全部')}>全部</li>
          <li className={tab=='待支付'?'active':''} onClick={()=>changeTab('待支付')}>待支付</li>
          <li className={tab=='待发货'?'active':''} onClick={()=>changeTab('待发货')}>待发货</li>
          <li className={tab=='待收货/使用'?'active':''} onClick={()=>changeTab('待收货/使用')}>待收货/使用</li>
          <li className={tab=='评价'?'active':''} onClick={()=>changeTab('评价')}>评价</li>
          <li className={tab=='退款'?'active':''} onClick={()=>changeTab('退款')}>退款</li>
        </ul> 
      </div>

      <Toast show={loading} icon="loading">加载中...</Toast>
      {list.length>0&&<OrderList list={list} deleteOrder={deleteOrder}/>}
      {list.length==0&&loading==false&&
        <EmptyItem>
           <h3>美好生活&nbsp;&nbsp;触手可得</h3>
          <img src={empty} />
          <h2>暂无订单</h2>
          <p>你还没有产生任何订单</p>
        </EmptyItem>
      }
      
      {recommend.length>0 && <RecommendList recommend={recommend}/>}
    </OrderWrapper>
  )
}
