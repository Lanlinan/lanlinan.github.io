var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="┏ (゜ω゜)=👉",clearTimeout(titleTime)):(document.title="ฅ۶•🐽• 欢迎光临~"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));