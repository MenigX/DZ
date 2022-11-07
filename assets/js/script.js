function classes(elem){
    elem.classList.add("WWW");
    elem.classList.remove("WWW");
    elem.classList.contains("WWW");
    elem.classList.toggle("WWW");
    let sum = 0;
    elem.classList.forEach(elem => sum += 1);
    alert(sum);
    for (let i of elem.classList){
        alert(i);
    }
}

function css(){
    let elem = document.querySelector('#elem');
    elem.style.cssText = 'color: red; font-size: 40px;';
}

function func(elem){
    elem.innerHTML = elem.innerHTML + '_' + elem.tagName;
}

let turn = current > x? 1: -1;
current += step * turn;