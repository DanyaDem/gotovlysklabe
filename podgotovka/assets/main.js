// function js_style(){ 
//     text.style.fontSize = "18pt"; 
//     text.style.color = 'red';
//     text.style.background = 'black';
//     text.style.border = '5px solid red';
//     text.style.width = '90px';
//     text.style.height = '90px';
// }

// document.getElementById('form1').onclick = function getFormvalue(event){
//     event.preventDefault();
//     let name = document.getElementsByName('fname')[0].value;
//     let surname = document.getElementsByName('lname')[0].value;
//     document.body.insertAdjacentHTML('beforeend',`${name}   ${surname}`);
   
// }

// function getAttributes() {
//     let w3r = document.getElementById('w3r');
//     let href = w3r.getAttribute('href');
//     let hreflang = w3r.getAttribute('hreflang');
//     let rel = w3r.getAttribute('rel');
//     let target = w3r.getAttribute('target');
//     let type = w3r.getAttribute('type');
//     document.getElementsByTagName('h1')[0].innerHTML = href + "<br>"  + hreflang + "<br>" + rel + "<br>" + target + "<br>" + type ;
    
// }


// function insert_Row(){
//     let table = document.getElementById('sampleTable');
//     table.insertAdjacentHTML('beforeend', `<tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>`)


// }




// let row = prompt('Введите номер строки'); 
// let cell = prompt('Введите номер столбца'); 
// let content = prompt('Введите будущий текст ячейки'); 
// let myTable = document.getElementById('myTable'); 
// myTable.children[0].children[row -1].children[cell -1].innerHTML = content

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}