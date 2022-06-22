import React from 'react'
import { OrderListWrapper,NoteWrapper } from './style'

export default function OrderList({list,deleteOrder}) {
    // console.log(list)
  return (
    <OrderListWrapper>
      <h3>美好生活&nbsp;&nbsp;触手可得</h3>
      {
        list.map(item => (
            <OrderNote key={item.id} data={item} deleteOrder={()=>deleteOrder(item.id)}/>
        ))
      }
    </OrderListWrapper>
  )
}

const OrderNote = (props) => {
    const { data } =props;
    const { deleteOrder } =props
    return (
        <NoteWrapper>
            <div className="listhead">
                <span>{data.shop} &gt;</span>
                <span style={{color:'#ef3863'}}>{data.state}</span>
            </div>
            <div className="body">
                <img src={data.img}/>
                <div className="body_right">
                    <div className="row">
                        <div className="title">{data.title}</div>
                        <div>￥ {data.price}</div>
                    </div>
                    <div className="row">
                        <div>{data.desc}</div>
                        <div>x {data.acount}</div>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="totle">合计￥<span>{data.price}</span></div>
                <div className="btngroup">
                    <button onClick={deleteOrder}>删除订单</button>
                    <button>查看相似</button>
                </div>
            </div>
        </NoteWrapper>
    )
}