var navbar = document.getElementsByClassName('navbar'),
    head1 = document.getElementById('head1'),
    texth1 = 'We Are aweb Design agency',
    i = 0,
    l = 0,
    par1 = document.getElementById('par1'),
    textp = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy',
    item = document.getElementsByClassName("item"),
    li = document.getElementsByTagName('li'),
    span = document.getElementsByClassName("glyphicon"),
    all = document.getElementById('all'),
    workli = document.getElementsByClassName('workli'),
    squar = document.getElementsByClassName('squar'),
    countnum = document.getElementsByClassName('countnum'),
    input = document.getElementsByTagName("input"),
    textarea = document.getElementsByTagName("textarea"),
    scroltop = document.getElementById('scrolltop');
function typeWriter() {
    
    'use strict';
    if (i < texth1.length) {
        head1.innerHTML += texth1[i];
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter();
function typeWriterP() {
    
    'use strict';
    if (l < textp.length) {
        par1.innerHTML += textp[l];
        l++;
        setTimeout(typeWriterP, 20);
    }
}
window.onload = typeWriterP();
all.onclick = function () {
    'use strict';
    all.classList.add('active');
    workli[1].classList.remove('active');
    workli[0].classList.remove('active');
    squar[0].classList.replace("hidshow","col-md-3");
    squar[3].classList.replace("hidshow","col-md-3");
    squar[4].classList.replace("hidshow","col-md-3");
    squar[6].classList.replace("hidshow","col-md-3");
};
workli[0].onclick = function () {
    
    'use strict';
    all.classList.remove('active');
    workli[1].classList.remove('active');
    workli[0].classList.add('active');
    squar[0].classList.replace("col-md-3","hidshow");
    squar[3].classList.replace("col-md-3","hidshow");
    squar[4].classList.replace("hidshow","col-md-3");
    squar[6].classList.replace("hidshow","col-md-3");
};
workli[1].onclick = function () {
    
    'use strict';
    all.classList.remove('active');
    workli[0].classList.remove('active');
    workli[1].classList.add('active');
    squar[0].classList.replace("hidshow","col-md-3");
    squar[3].classList.replace("hidshow","col-md-3");
    squar[4].classList.replace("col-md-3","hidshow");
    squar[6].classList.replace("col-md-3","hidshow");
};

function incress () {
    
    'use strict';
    if (countnum[0].innerHTML < 350) {
        countnum[0].innerHTML = +countnum[0].innerHTML + 10;
        setTimeout(incress , 100);
    }
    if (countnum[1].innerHTML < 780) {
        countnum[1] .innerHTML =+ countnum[1].innerHTML + 10;
        setTimeout(incress , 1000);
    }
    if (countnum[2].innerHTML < 850) {
        countnum[2] .innerHTML =+ countnum[2].innerHTML + 10;
        setTimeout(incress , 1000);
    }
    if (countnum[3].innerHTML < 650) {
        countnum[3] .innerHTML =+ countnum[3].innerHTML + 10;
        setTimeout(incress , 1000);
    }
}
window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 4440){
        incress();
    }
    if(window.pageYOffset >= 150){
        navbar[0].style.backgroundColor = '#222';
        scroltop.style.display = "block";
    } else {
        navbar[0].style.background = 'transparent';
        scroltop.style.display = "none";
    }
};
scroltop.onclick = function(){
    'use strict';
    window.scrollTo(0, 0);
};
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
function foucusColor(f,itemf) {
    'use strict';
    itemf[f].style.transition = "all .5s ease-in-out";
    itemf[f].style.backgroundSize = "100% 100%";
    
}
function bluerColor(p,itemp) {
    'use strict';
    itemp[p].style.transition = "all .5s ease-in-out";
    itemp[p].style.backgroundSize = "0% 100%";
}
input[0].onfocus = function () {foucusColor(0,input)};
input[0].onblur = function () {bluerColor(0,input)};
input[1].onfocus = function () {foucusColor(1,input)};
input[1].onblur = function () {bluerColor(1,input)};
input[2].onfocus = function () {foucusColor(2,input)};
input[2].onblur = function () {bluerColor(2,input)};
input[3].onfocus = function () {foucusColor(3,input)};
input[3].onblur = function () {bluerColor(3,input)};
textarea[0].onfocus = function () {foucusColor(0,textarea)};
textarea[0].onblur = function () {bluerColor(0,textarea)};


$('.carousel').carousel({
  interval: 650 * 10
});
