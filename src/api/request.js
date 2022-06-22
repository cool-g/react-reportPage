import axios from 'axios'

// const orders = [
//     {
//         id:1,
//         shop:'猫眼电影',
//         state:'待支付',
//         title:'曲奇饼',
//         desc:'悠渡影城',
//         acount:1,
//         price:49.8
//     },
//     {
//         id:2,
//         shop:'猫眼电影',
//         state:'待发货',
//         title:'唐人街探案3',
//         desc:'悠渡影城',
//         acount:1,
//         price:49.8
//     },
//     {
//         id:3,
//         shop:'猫眼电影',
//         state:'评价',
//         title:'小裙子',
//         desc:'悠渡影城',
//         acount:1,
//         price:49.8
//     }
// ]

export const getOrder = ({tab,query}) => 
    axios
    .get('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/order') 
    .then ( res => {
            let result=res.data;
            // let result = orders;
            // console.log(tab);
            if(tab){
                
                switch(tab) {
                    case "待支付":
                        result=result.filter(item => item.state=="待支付");
                        break;
                    case "待发货":
                        result=result.filter(item => item.state=="待发货");
                        break;
                    case "待收货/使用":
                        result=result.filter(item => item.state=="待收货/使用");
                        break;
                    case "评价":
                        result=result.filter(item => item.state=="评价");
                        break;
                    case "退款":
                        result=result.filter(item => item.state=="退款");
                        break;
                    default:
                        break;
                }
            }
            if(query) {
                result = result.filter(item => item.title.includes(query));
            }
            return Promise.resolve({
                result
            });
        }
    )
    
export const getCommend = () => 
    axios.get('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/goods')