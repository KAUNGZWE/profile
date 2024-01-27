//header
let Menubtn = document.getElementById('Menubtn')
Menubtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('xmark');
    this.classList.toggle('fa-xmark');
})
//auto type
let type = new Typed('.auto-input',{
    strings:['a student', '20 years old', 'from webdesign and development class' ,'a programmer', 'single', ],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true,
})
//intro animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const animate1 = document.querySelectorAll('.anti1');
animate1.forEach((e) => observer.observe(e));

const animate2 = document.querySelectorAll('.anti2');
animate2.forEach((e) => observer.observe(e));

const animate3 = document.querySelectorAll('.anti3');
animate3.forEach((e) => observer.observe(e));

const animate4 = document.querySelectorAll('.anti4');
animate4.forEach((e) => observer.observe(e));

const animate5 = document.querySelectorAll('.img-1');
animate5.forEach((e) => observer.observe(e));

const animate6 = document.querySelectorAll('.img-2');
animate6.forEach((e) => observer.observe(e));

const animate7 = document.querySelectorAll('.img-3');
animate7.forEach((e) => observer.observe(e));

//card slider
const productContainer = [...document.querySelectorAll('.project-container')];
const nxtbtn = [...document.querySelectorAll('.next-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})