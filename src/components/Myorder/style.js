import styled from 'styled-components'

export const OrderWrapper = styled.div`
    /* width:100%; */
    background-color:#f6f6f6;
    /* z-index:999; */
    .head{
        position:fixed;
        top:0;
        width:99%;
        background-color:#ffffff;
        border-radius:20px;
         .searchOrder {
            /* width:100%; */
            height:77px;
            padding:20px 10px;
            display:flex;
            justify-content:space-around;
            .searchgroup{
                width:100%;
                position:relative;
                input {
                    width:95%;
                    height:35px;
                    border:0;
                    background-color:#f4f4f4;
                    border-radius:10px;
                    padding:2px 0 2px 40px;
                    font-size:18px;
                }
                img{
                    width:22px;
                    height:22px;
                    position:absolute; 
                    left:18px;
                    top:7px;
                }
            }
            
            img {
                width:30px;
                height:30px;
            }
         }
         ul{
            background-color:#ffffff;
            width:100%;
            display:flex;
            overflow-x:auto;
            li{
                height:30px;
                line-height:30px;
                margin:0 15px;
                font-size:18px;
                float:left;
                flex-shrink:0;
                margin-bottom:30px;
                position:relative;
                &.active{
                    color:black;
                    font-weight:bold;
                }
                &.active::after{
                    content:"";
                    display:block;
                    width:50%;
                    height:3px;
                    background-color:#ff244e;
                    position:absolute;
                    top:36px;
                    left:25%;
                }
            }
         }
    }
   
`

export const EmptyItem = styled.div`
    text-align:center;
    padding-bottom:30px;
    margin-top:110px;
    h3 {
        letter-spacing:3px;
        font-size:16px;
    }
    .listhead {
        height:19px;
        line-height:19px;
        display:flex;
        justify-content:space-between;
        font-size:16px;
        color:black;
        font-weight:500;
        letter-spacing:1px;
    }
    img {
        margin:10px auto;
        width:200px;
        height:200px;
    }
    h2 {
        color:black;
    }
`