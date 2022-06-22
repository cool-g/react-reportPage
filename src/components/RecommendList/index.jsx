import React from 'react'
import { RecommendWrapper } from './style'

export default function RecommendList({recommend}) {
  // console.log(recommend)
  return (
    <RecommendWrapper>
      <h2>你可能还会喜欢</h2>
      <div className='list'>
        {
          recommend.map(item => 
            <div key={item.id}>
              <img src={item.img}/>
              <p className='title'>{item.title}</p>
              <button className='coupon'>{item.coupon}</button>
              <p className='price'><span style={{fontSize:'16px',fontWeight:'normal'}}>券后 </span>￥{item.price}</p>
            </div>
          )
        }
      </div>
    </RecommendWrapper>
  )
}
