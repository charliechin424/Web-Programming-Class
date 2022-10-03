var btn = document.getElementById("mic");
var btn1 = document.getElementById("img");
var counts = 0;
btn.onclick = function() {
    counts+=1;
    if (counts % 2 == 1){
        btn.style.backgroundColor = "#d85140";
        btn.firstElementChild.src = "./images./mic_off.png";
        btn1.style.backgroundColor = "#35373a";
        btn1.src = "./images./mic_off.png";
    } else {
        btn.style.backgroundColor = "#3d4043";
        btn.firstElementChild.src = "./images./mic.png";
        btn1.style.backgroundColor = "#3d4043";
        btn1.src = "./images./mic.png";
    }
}
var kick_imgs = document.querySelectorAll(".kick_img");
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var check = 1;
var count = 5;
var count_new_people = 0;
var now_people = count_new_people + 6;
var push = 0;
for (var i=0 ; i<4 ; ++i){
    kick_imgs[i].addEventListener('click', function() {
        this.parentNode.parentNode.style.display = "none";
        kick_imgs[4].parentNode.parentNode.style.display = "none";
        if (check === 1){
            kick_imgs[5].parentNode.parentNode.style.display = "block";
        }
        count--;
        count_new_people--;
        now_people--;
        if (count === 0){
            mainuser.innerHTML = '家逸';
            mainuser.className = 'mainuser';
            mainuser.parentNode.style.backgroundColor = 'green';
            mainid.innerHTML = '&nbsp&nbsp&nbsp你';
            box1.style.display = 'block';
            box2.style.display = 'none';
            box1.style.width = '100vw';
            box1.firstElementChild.style.width = '10%';
            box1.children[2].style.width = '2%';
        }
        if (push === 1){
            if (now_people === 1){
                mainuser.innerHTML = '家逸';
                mainuser.className = 'mainuser';
                mainuser.parentNode.style.backgroundColor = 'green';
                mainid.innerHTML = '&nbsp&nbsp&nbsp你';
                box1.style.display = 'block';
                box2.style.display = 'none';
                box1.style.width = '100vw';
                box1.firstElementChild.style.width = '10%';
                box1.children[2].style.width = '2%';
            }
            if (now_people === 2){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '10%'
                }  
            }
            if (now_people === 3){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 4){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 5){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '25%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '5vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '6.5%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 6){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '2%'
                }     
            }
            if (now_people === 8){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '21.8%'
                    exist[i].style.height = '35%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '25%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '4%'
                } 
            }
            if (now_people === 10){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '17%'
                    exist[i].style.height = '30%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '3vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '30%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '6%'
                } 
            }
            if (now_people === 12){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '20%'
                    exist[i].style.height = '30%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '4%'
                    exist[i].style.marginTop = '1%'
                } 
            }
        }
    }) 
}
kick_imgs[4].addEventListener('click', function() {
    this.parentNode.parentNode.style.display = "none";
    count--;
    check = 0;
    count_new_people--;
    now_people--;
    if (count === 0){
        mainuser.innerHTML = '家逸';
        mainuser.className = 'mainuser';
        mainuser.parentNode.style.backgroundColor = 'green';
        mainid.innerHTML = '&nbsp&nbsp&nbsp你';
        box1.style.display = 'block';
        box2.style.display = 'none';
        box1.style.width = '100vw';
        box1.firstElementChild.style.width = '10%';
        box1.children[2].style.width = '2%';
    }
})
kick_imgs[5].onclick = function() {
    this.parentNode.parentNode.style.display = "none";
    count--;
    count_new_people--;
    now_people--;
    check = 0;
    if (count === 0){
        mainuser.innerHTML = '家逸';
        mainuser.className = 'mainuser';
        mainuser.parentNode.style.backgroundColor = 'green';
        mainid.innerHTML = '&nbsp&nbsp&nbsp你';
        box1.style.display = 'block';
        box2.style.display = 'none';
        box1.style.width = '100vw';
        box1.firstElementChild.style.width = '10%';
        box1.children[2].style.width = '2%';
    }
}
kick_imgs[6].onclick = function() {
    this.parentNode.parentNode.style.display = "none";
    count--;
    count_new_people--;
    now_people--;
    check = 0;
    if (count === 0){
        mainuser.innerHTML = '家逸';
        mainuser.className = 'mainuser';
        mainuser.parentNode.style.backgroundColor = 'green';
        mainid.innerHTML = '&nbsp&nbsp&nbsp你';
        box1.style.display = 'block';
        box2.style.display = 'none';
        box1.style.width = '100vw';
        box1.firstElementChild.style.width = '10%';
        box1.children[2].style.width = '2%';
    }
}
var kick = document.querySelector('#kick');
var ellipse = document.querySelectorAll('.ellipse');
var mainuser = document.querySelector('.mainuser');
var mainid = document.querySelector('#mainid');
var names = document.querySelectorAll('.name');
var trace;
var first = 1;
var trace_text;
var trace_src;
var trace_next_text;
var trace_next_src;
var current = -1;
for (var i=0 ; i<ellipse.length ; ++i){
    ellipse[i].addEventListener('click', function() {
        push = 0;
        if (first != 1 && this.getAttribute('index') == current){
            mainuser.innerHTML = '家逸';
            mainuser.className = 'mainuser';
            mainuser.parentNode.style.backgroundColor = 'green';
            mainid.innerHTML = '&nbsp&nbsp&nbsp你' ;
            var new_img = document.createElement('img');
            this.parentNode.insertBefore(new_img, this.parentNode.firstChild);
            this.parentNode.children[0].className = 'smallcircle1';
            this.parentNode.firstElementChild.src = `${trace_src.substr(36)}`;
            this.parentNode.parentNode.children[1].innerHTML = trace_text;
            this.parentNode.children[1].remove();
            this.parentNode.parentNode.children[3].style.display = 'block';
            box1.children[3].style.display = 'none';
            first = 1;
            current = -1;
            return;
        }
        if (first === 1 || current === this.getAttribute('index')){
            current = this.getAttribute('index');
        }
        if (flag == 1){
            box1.style.display = 'block';
            box2.style.width = '31vw';
            ellipse[current].parentNode.firstElementChild.style.fontSize = '3vmax';
            for (var i=0 ; i<ellipse.length ; ++i){
                if (i != 4 && i != 6){
                    ellipse[i].parentNode.parentNode.style.width = '47%';
                    ellipse[i].parentNode.parentNode.style.height = '24%';
                }
            }
            ellipse[4].parentNode.parentNode.style.display = 'none';
            // ellipse[5].parentNode.parentNode.style.display = 'block';
            ellipse[7].parentNode.parentNode.style.display = 'none';
        }
        if (first === 1 || this.getAttribute('index') != current){
            mainuser.innerHTML = '<img src="' + this.parentNode.firstElementChild.src +'" alt="" class="smallcircle1">';
            mainuser.className = '';
            mainuser.parentNode.style.backgroundColor = '#202124';
            mainid.innerHTML = '&nbsp&nbsp&nbsp' + names[this.getAttribute('index')].innerText;
            box1.children[3].style.display = 'block';
        }
        if (first != 1 && this.getAttribute('index') != current){
            trace_next_text = names[this.getAttribute('index')].innerText;
            trace_next_src = this.parentNode.firstElementChild.src;
            this.parentNode.firstElementChild.src = `${trace_src.substr(36)}`;
            this.parentNode.parentNode.children[1].innerHTML = trace_text;
            trace_text = trace_next_text;
            trace_src = trace_next_src;
        }
        if (first === 1){
            trace_text = names[this.getAttribute('index')].innerText;
            trace_src = this.parentNode.firstElementChild.src;
        }
        if (first === 1){
            this.parentNode.parentNode.children[1].innerHTML = '你';
            this.parentNode.firstElementChild.remove();
            this.parentNode.style.backgroundColor = 'green';
            this.parentNode.children[0].innerHTML = '家逸';
            this.parentNode.children[0].className = 'mainuser';
            this.parentNode.children[0].style.fontSize = '3vmax';
            this.parentNode.parentNode.children[3].style.display = 'none';
            first = 0;
        }
    })
}
var flag = 0;
var ellipse1 = document.querySelector('.ellipse1');
ellipse1.addEventListener('click', function() {
    if (current != -1){
        ellipse[7].parentNode.parentNode = 'block';
        ellipse[7].parentNode.firstElementChild.innerHTML = box1.firstElementChild.firstElementChild.innerHTML;
        ellipse[7].parentNode.firstElementChild.style.backgroundColor = '#202124';
        ellipse[7].parentNode.parentNode.children[1].innerHTML = mainid.innerText.substr(3);
        ellipse[7].parentNode.parentNode.children[3].style.display = 'block';
        ellipse[current].parentNode.firstElementChild.style.fontSize = '5vmax';
    }
    push = 1;
    flag = 1;
    box1.style.display = 'none';
    box2.style.width = '100vw';
    if (ellipse[4].parentNode.parentNode.style.display == ''){
        ellipse[4].parentNode.parentNode.style.display = 'none';
        ellipse[5].parentNode.parentNode.style.display = 'block';
    }
    ellipse[7].parentNode.parentNode.style.display = 'block';
    ellipse[7].parentNode.firstElementChild.style.fontSize = '4vmax';
    ellipse[7].parentNode.firstElementChild.style.margin = '15% auto';
    if (now_people === 1){
        mainuser.innerHTML = '家逸';
        mainuser.className = 'mainuser';
        mainuser.parentNode.style.backgroundColor = 'green';
        mainid.innerHTML = '&nbsp&nbsp&nbsp你';
        box1.style.display = 'block';
        box2.style.display = 'none';
        box1.style.width = '100vw';
        box1.firstElementChild.style.width = '10%';
        box1.children[2].style.width = '2%';
    }
    if (now_people === 2){
        for (var i=0 ; i<exist.length ; ++i){
            exist[i].style.width = '30%'
            exist[i].style.height = '42%'
            exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
            exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
            exist[i].style.marginRight = '14%'
            exist[i].style.marginTop = '10%'
        }  
    }
    if (now_people === 3){
        for (var i=0 ; i<exist.length ; ++i){
            exist[i].style.width = '30%'
            exist[i].style.height = '42%'
            exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
            exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
            exist[i].style.marginRight = '14%'
            exist[i].style.marginTop = '2%'
        }  
    }
    if (now_people === 4){
        for (var i=0 ; i<exist.length ; ++i){
            exist[i].style.width = '30%'
            exist[i].style.height = '42%'
            exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
            exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
            exist[i].style.marginRight = '14%'
            exist[i].style.marginTop = '2%'
        }  
    }
    if (now_people === 5){
        for (var i=0 ; i<exist.length ; ++i){
            exist[i].style.width = '25%'
            exist[i].style.height = '42%'
            exist[5].firstElementChild.firstElementChild.style.fontSize = '5vmax';
            exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
            exist[i].style.marginRight = '6.5%'
            exist[i].style.marginTop = '2%'
        }  
    }
    if (now_people === 6){
        for (var i=0 ; i<exist.length ; ++i){
            exist[i].style.width = '30%'
            exist[i].style.height = '42%'
            exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
            exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
            exist[i].style.marginRight = '2.5%'
            exist[i].style.marginTop = '2%'
        }     
    }
})

var number_people = document.querySelector('.number_people');
var add = document.querySelector('.add');
var newpeople = document.querySelectorAll('#add');
var exist = document.querySelectorAll('.exist');
add.addEventListener('click', function() {
    if (push == 1){
        kick_imgs[4].parentNode.parentNode.style.display = "none";
        kick_imgs[5].parentNode.parentNode.style.display = "block";
        for (var i=0 ; i<exist.length ; ++i){
            if (i===5){
                continue;
            }
            if (exist[i].style.display === 'none'){
                exist[i].style.display = 'block';
                break;
            }
        }
        count_new_people++;
        now_people++;
        count++;
        number_people.innerHTML = 'now_people';
        if (now_people === 7){
            for (var i=0 ; i<exist.length ; ++i){
                exist[i].style.width = '21.8%'
                exist[i].style.height = '35%'
                exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                exist[5].firstElementChild.firstElementChild.style.marginTop = '25%';
                exist[i].style.marginRight = '2.5%'
                exist[i].style.marginTop = '4%'
            }     
        }
        if (now_people === 9){
            for (var i=0 ; i<exist.length ; ++i){
                exist[i].style.width = '17%'
                exist[i].style.height = '30%'
                exist[5].firstElementChild.firstElementChild.style.fontSize = '3vmax';
                exist[5].firstElementChild.firstElementChild.style.marginTop = '30%';
                exist[i].style.marginRight = '2.5%'
                exist[i].style.marginTop = '6%'
            } 
        }
        if (now_people === 11){
            for (var i=0 ; i<exist.length ; ++i){
                exist[i].style.width = '20%'
                exist[i].style.height = '30%'
                exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                exist[i].style.marginRight = '4%'
                exist[i].style.marginTop = '1%'
            } 
        }
        if (now_people === 13){
            for (var i=0 ; i<exist.length ; ++i){
                exist[i].style.width = '18%'
                exist[i].style.height = '25%'
                exist[5].firstElementChild.firstElementChild.style.fontSize = '3vmax';
                exist[5].firstElementChild.firstElementChild.style.marginTop = '19%';
                exist[i].style.marginRight = '1.7%'
                exist[i].style.marginTop = '2.3%'
            } 
        }
    }
})

let time = document.querySelector('.time');
getTime()
setInterval(getTime, 1000)
function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    if (hour < 10){
        if (min < 10){
            time.innerHTML = `上午 0${hour}:0${min} &nbsp|&nbsp Web Programming`;
        }else {
            time.innerHTML = `上午 0${hour}:${min} &nbsp|&nbsp Web Programming`;
        }
    }else if (hour < 12){
        if (min < 10){
            time.innerHTML = `上午 ${hour}:0${min} &nbsp|&nbsp Web Programming`;
        }else {
            time.innerHTML = `上午 ${hour}:${min} &nbsp|&nbsp Web Programming`;
        }
    }else if (hour < 18){
        if (min < 10){
            time.innerHTML = `下午 ${hour}:0${min} &nbsp|&nbsp Web Programming`;
        }else {
            time.innerHTML = `下午 ${hour}:${min} &nbsp|&nbsp Web Programming`;
        }
    }else if (hour < 24){
        if (min < 10){
            time.innerHTML = `晚上 ${hour}:0${min} &nbsp|&nbsp Web Programming`;
        }else {
            time.innerHTML = `晚上 ${hour}:${min} &nbsp|&nbsp Web Programming`;
        }
    }
}

for (var i=8 ; i<17 ; ++i){
    kick_imgs[i].addEventListener('click', function() {
        number_people.innerHTML = now_people;
        this.parentNode.parentNode.style.display = "none";
        count--;
        count_new_people--;
        now_people--;
        if (push == 1){
            if (now_people === 1){
                mainuser.innerHTML = '家逸';
                mainuser.className = 'mainuser';
                mainuser.parentNode.style.backgroundColor = 'green';
                mainid.innerHTML = '&nbsp&nbsp&nbsp你';
                box1.style.display = 'block';
                box2.style.display = 'none';
                box1.style.width = '100vw';
                box1.firstElementChild.style.width = '10%';
                box1.children[2].style.width = '2%';
            }
            if (now_people === 2){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '10%'
                }  
            }
            if (now_people === 3){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 4){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '14%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 5){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '25%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '5vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '6.5%'
                    exist[i].style.marginTop = '2%'
                }  
            }
            if (now_people === 6){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '30%'
                    exist[i].style.height = '42%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '6vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '2%'
                }     
            }
            if (now_people === 8){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '21.8%'
                    exist[i].style.height = '35%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '25%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '4%'
                } 
            }
            if (now_people === 10){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '17%'
                    exist[i].style.height = '30%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '3vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '30%';
                    exist[i].style.marginRight = '2.5%'
                    exist[i].style.marginTop = '6%'
                } 
            }
            if (now_people === 12){
                for (var i=0 ; i<exist.length ; ++i){
                    exist[i].style.width = '20%'
                    exist[i].style.height = '30%'
                    exist[5].firstElementChild.firstElementChild.style.fontSize = '4vmax';
                    exist[5].firstElementChild.firstElementChild.style.marginTop = '15%';
                    exist[i].style.marginRight = '4%'
                    exist[i].style.marginTop = '1%'
                } 
            }
        }
    })
}







