//skrollr初始化
var s = skrollr.init();


//讓Header維持在使用者視窗高度
document.querySelector(".header").style.height = window.innerHeight+"px";
document.querySelector(".intro_section").style.height = window.innerHeight+"px";

window.onresize = function(){
   document.querySelector('.header').style.height = window.innerHeight+"px";
   document.querySelector('.intro_section').style.height = window.innerHeight+"px";
};


//如果使用者視窗移動，執行特定動作
window.onscroll=function(){
        var top = document.documentElement.scrollTop;
        if(top > 0){
        	var top = document.querySelector('.navbar');
            top.classList.add('white_bg');
        }else{ 
            document.querySelector('.navbar').classList.remove('white_bg');
        };
};


//JS自動打字機--------------------------------------------------
initAutoType_dialog1();
initAutoType_dialog2();


function initAutoType_dialog1(){
  var types = ["嗨","我叫黃立寧","歡迎來到我的個人網站"];
  var words = $("#dialog1");

  //停止自動打字
  var stopType = false;

  var index = 0;
  var tempWords = "";
  var isNext = false;
  var time = 300;

  var startType = setInterval(function(){
    if(stopType){

      //如果需要停止打字
      clearInterval(startType);
    };
    if(tempWords.length === 0){
      //如果刪完了，就開始
      if(isNext){
        index++;
        index = index%3;
        isNext = false;
      }
      tempWords = types[index].substring(0,tempWords.length+1);
    }else if(tempWords.length === types[index].length && isNext === false){

      //如果已經打完了，就刪掉
     // tempWords = tempWords.substring(0,tempWords.length-1);
      isNext = true;
      time = 5000;
    }else{
      //如果沒刪完
      if(isNext){
        //如果在減少
        tempWords = tempWords.substring(0,tempWords.length-1);
        time = 150;
      }
      else{
        //如果在增加
        time = 200;
        tempWords = types[index].substring(0,tempWords.length+1);
      }
    }
    words.html("&nbsp;"+tempWords);
  },time);
};



function initAutoType_dialog2(){
  var types = ["我喜歡用JS做點小動畫","用CSS呈現漂亮的版面", "嘗試各種有趣的技巧"];
  var words = $("#dialog2");

  //停止自動打字
  var stopType = false;

  var index = 0;
  var tempWords = "";
  var isNext = false;
  var time = 300;

  var startType = setInterval(function(){
    if(stopType){

      //如果需要停止打字
      clearInterval(startType);
    };
    if(tempWords.length === 0){
      //如果刪完了，就開始
      if(isNext){
        index++;
        index = index%3;
        isNext = false;
      }
      tempWords = types[index].substring(0,tempWords.length+1);
    }else if(tempWords.length === types[index].length && isNext === false){

      //如果已經打完了，就刪掉
     // tempWords = tempWords.substring(0,tempWords.length-1);
      isNext = true;
      time = 5000;
    }else{
      //如果沒刪完
      if(isNext){
        //如果在減少
        tempWords = tempWords.substring(0,tempWords.length-1);
        time = 150;
      }
      else{
        //如果在增加
        time = 200;
        tempWords = types[index].substring(0,tempWords.length+1);
      }
    }
    words.html("&nbsp;"+tempWords);
  },time);
};




//用來監看特定位置，點擊回饋點擊內容
document.querySelector(".header").addEventListener('click',function(e){
	console.log(e);
},false);