import styled from "styled-components";

export const OrderListWrapper = styled.div`
    background-color:#f6f6f6;
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    align-items:center;
    margin-bottom:10px;
    margin-top:110px;
    /* position:fixed; */
    h3 {
        letter-spacing:3px;
        font-size:16px;
    }
`

export const NoteWrapper = styled.div`
    width:95%;
    /* height:100px; */
    margin:8px;
    background-color:white;
    border-radius:20px;
    padding:15px;
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
    .body{
        margin-top:15px;
        display:flex;
        /* justify-content:space-between; */
        img{
            display:block;
            width:100px;
            height:100px;
        }
        .body_right {
            flex:1;
            text-align:left;
            margin-left:20px;
            .row {
                /* width:100%; */
                display:flex;
                justify-content:space-between;
                margin-bottom:10px;
                div{
                    flex-shrink:0;
                }
                .title {
                    font-size:17px;
                    color:black;
                    font-weight:600;
                    white-space:nowrap;                    
                    width:10rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    -webkit-line-clamp:1;
                }
            }
        }  
    }
    .foot {
        font-size:17px;
        color:black;
        font-weight:500;
        text-align:right;
        .totle {
            margin-bottom:15px;
            span{
                font-weight:bolder;
            }
        }
        .btngroup{
            button {
                background-color: #ffffff;
                border:1px #666 solid;
                padding:5px 8px;
                border-radius:5px;
                font-size:14px;
                margin-left:5px;
            }
        }
    }
`