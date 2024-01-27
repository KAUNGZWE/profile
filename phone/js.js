const togglebtn = document.querySelector('.toggle-btn');
const togglebtnicon = document.querySelector('.toggle-btn i');
const dropmenu = document.querySelector('.drop-menu');

togglebtn.onclick = function(){
    dropmenu.classList.toggle('open')
    const isopen = dropmenu.classList.contains('open')

    togglebtnicon.classList = isopen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

//best seller 
const iphsection = document.querySelector('.iphonesection');
const xiaomisection = document.querySelector('.xiaomisection');
const samsungsection = document.querySelector('.samsungsection');
const opposection = document.querySelector('.opposection');
const vivosection = document.querySelector('.vivosection');
const huaweisection = document.querySelector('.huaweisection');

const iphone = document.getElementById('iphone');
const xiaomi = document.getElementById('xiaomi');
const sam = document.getElementById('sam');
const oppo = document.getElementById('oppo');
const vivo = document.getElementById('vivo');
const huawei = document.getElementById('huawei');

let i = 1;
let x = 0;
let s = 0;
let o = 0;
let v = 0;
let h = 0;

iphone.onclick = function(){
    x = 0;
    s = 0;
    o = 0;
    v = 0;
    h = 0;

    i += 1
    if (i == 1){
        iphsection.classList.toggle('ishow');
   
        xiaomisection.classList.remove('xiaoshow');
        samsungsection.classList.remove('samshow');
        opposection.classList.remove('opposhow');
        vivosection.classList.remove('vivoshow');
        huaweisection.classList.remove('huashow');
    }
}
xiaomi.onclick = function(){
    i = 0;
    s = 0;
    o = 0;
    v = 0;
    h = 0;

    x += 1;
    if(x == 1){
        xiaomisection.classList.toggle('xiaoshow');
    
        iphsection.classList.remove('ishow');
        samsungsection.classList.remove('samshow');
        opposection.classList.remove('opposhow');
        vivosection.classList.remove('vivoshow');
        huaweisection.classList.remove('huashow');
        
    }
    
}

sam.onclick = function(){
    i = 0;
    x = 0;
    o = 0;
    v = 0;
    h = 0;

    s += 1;
    if (s == 1){
        samsungsection.classList.toggle('samshow');

        iphsection.classList.remove('ishow');
        xiaomisection.classList.remove('xiaoshow');
        opposection.classList.remove('opposhow');
        vivosection.classList.remove('vivoshow');
        huaweisection.classList.remove('huashow');
    }
}

oppo.onclick = function(){
    i = 0;
    x = 0;
    s = 0;
    v = 0;
    h = 0;

    o += 1;
    if( o==1){
        opposection.classList.toggle('opposhow');

        iphsection.classList.remove('ishow');
        xiaomisection.classList.remove('xiaoshow');
        samsungsection.classList.remove('samshow');
        vivosection.classList.remove('vivoshow');
        huaweisection.classList.remove('huashow');
    }
}
vivo.onclick = function(){
    i = 0;
    x = 0;
    s = 0;
    o = 0;
    h = 0;

    v += 1;
    if( v==1){
        vivosection.classList.toggle('vivoshow');

        iphsection.classList.remove('ishow');
        xiaomisection.classList.remove('xiaoshow');
        samsungsection.classList.remove('samshow');
        opposection.classList.remove('opposhow');
        huaweisection.classList.remove('huashow');
    }
}


huawei.onclick = function(){
    i = 0;
    x = 0;
    s = 0;
    o = 0;
    v = 0;

    h += 1;
    if( h==1){
    
    huaweisection.classList.toggle('huashow');

    iphsection.classList.remove('ishow');
    xiaomisection.classList.remove('xiaoshow');
    samsungsection.classList.remove('samshow');
    opposection.classList.remove('opposhow');
    vivosection.classList.remove('vivoshow');
    }
}

//auto type
let type = new Typed('.auto-input',{
    strings:['budget', 'selling', 'trading' ,'mobile'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true,
})