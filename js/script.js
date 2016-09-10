/**
 * Created by wei on 2016/9/9.
 */
var data=['iPhone7','Ipa','华为笔记本','MAC笔记本','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0;
    
window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');
    
    
    play.onclick=playFun;
    stop.onclick=stopFun;

    document.onkeyup=function(event){
        event = event || window.event;
        if(event.keyCode==13){
            if(flag==0){
                playFun();
                flag=1;
            }else{
                stopFun();
                flag=0;
            }
        }
    }
}

function playFun() {
    var title=document.getElementById('title');
    var play=document.getElementById('play');
    clearInterval(timer);
    timer=setInterval(function () {
        var random=Math.floor(Math.random()*data.length);
        title.innerHTML=data[random];

    },50);/*每隔50毫秒娶一个数*/
    play.style.background="#999";

}

function stopFun() {
    clearInterval(timer);
    var play=document.getElementById('play');
    play.style.background="*036";
   
}