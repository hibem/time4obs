var time=$('#time');
var save=$('#save');
var reset=$('#reset');
var fzs=$("#fzd").find('span');
//字号
$("#fzd").find("button").click(function(){
  var fz=parseInt(time.css('font-size').slice(0,-2)) + parseInt(this.dataset.value) +"px";
  time.css('font-size',fz);
  fzs.html(time.css('font-size'));
})
//字色
jscolor.presets.default = {value: 'rgba(255,255,255,1)',};
function updateTime(){
  time.html(moment().format('YYYY-MM-DD HH:mm:ss'));
}
function update(picker) {
  $('#time').css ('color',picker.toRGBAString())
}
jscolor.trigger('input');
//字体
$('#ftcInput').blur(function(){
  $('#ftc').val(this.value)
  time.css('font-family',this.value)  
})
$('input[name=cf]').change(function(){
  time.css('font-family',this.value)  
})

//每秒更新
updateTime();
setInterval(updateTime,1000);
// 本地缓存
save.click(function(){
  localStorage.fz=time.css('font-size');
  localStorage.fc=time.css('color');
  localStorage.ft=time.css('font-family');
})
//载入缓存
time.css('font-size',fzs.html());
if (localStorage.fz){
  fzs.html(localStorage.fz);
  time.css('font-size',localStorage.fz);
  jscolor.presets.default = {value: localStorage.fc}; 
  time.css('font-family',localStorage.ft);
}
//清除缓存
reset.click(function(){
  localStorage.clear()
  location.reload()
})