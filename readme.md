# 抖音订单管理组件开发
    
## 新 get 知识点

- react 中input绑定enter事件 (无onsubmit按钮情况)  
    - 在js里绑定onkeypress,onkeydown事件，判断e.keycode === 13即可  

    - 在React中不直接操作DOM，使用两种方式解决：
        1. 通过 e.nativeEvent 来获取  
            ```js
            onKeyPress={handleEnterKey}  

            const handleEnterKey = (e) => {
                if(e.nativeEvent.keyCode === 13){
                setQuery(e.target.value);
                }
            }
            ```
        
        2. 通过addEventListener注册事件 (慎用)

- css 实现文字超出显示省略号  
    1. 两行：
        ```css
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
        ```
    
    2. 单行  
        ```css
            overflow:hidden;
            text-overflow:ellipsis; 
            white-space:nowrap;
        ```