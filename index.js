

var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');
var list = document.getElementById('list');

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
    }
}

selectField.onclick = function(){
    list.classList.toggle('hide');
}
