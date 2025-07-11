const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if(inputBox.value === ''){
    alert('You must write something');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); //adds the newly created <li> to end of the list container
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);  
  }
  inputBox.value = '';
  saveData();
}
  inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
  }
  else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);//stores our list
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');//gets the list
}
showTask();