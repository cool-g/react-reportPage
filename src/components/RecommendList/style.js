import styled from 'styled-components'

export const RecommendWrapper = styled.div`
    h2 {
        text-align:left;
        padding-left:10px;
        color:#010101;
        font-size:19px;
        font-weight:550;
        letter-spacing:1px;
    }
    .list {
        margin:0 5px;
        column-count:2;
        div {
            background-color:#fff;
            break-inside:avoid;
            margin-bottom:10px;
            text-align:left;
            /* padding:0 5px; */
            border-radius:5px;
            img {
                width:100%;
                border-radius:5px 5px 0 0;
            }
            .title{
                width:95%;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:2;
                display:-webkit-box;
                line-clamp:2;
                -webkit-box-orient:vertical;
                color:black;
                font-size:17px;
                font-weight:520;
                padding-left:5px;
                margin-bottom:5px;
            }
            .coupon{
                padding:2px 5px;
                border:1px #f23562 solid;
                color:#f23562;
                background-color:#fff;
                font-size:12px;
                margin-left:10px;
                margin-bottom:10px;
            }
            .price {
                padding-left:8px;
                font-size:18px;
                color:#f23562;
                font-weight:bold;
            }
        }
        
    }
`