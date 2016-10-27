
var database = $.post('http://tail.business-labs.com.ua/test/', function(data) {
  console.log(data);

    var newElem = document.createElement("table");
    document.body.appendChild(newElem);
    newElem.className="tl";
    newElem.width='100%';
    newElem.border=1;
    newElem.style.borderColor="red";
    newElem.style.fontFamily="Calibri";
    newElem.style.textAlign = "center";

    var head = document.createElement('thead');
    head.className ="thead";
    var table = document.querySelector('.tl');
    table.appendChild(head);
    head.style.background="#b7b7b7";

    var rowHead = document.createElement('tr');
    rowHead.className = "tr";
    var rowTable = document.querySelector('.thead');
    rowTable.appendChild(rowHead);

    var cellHead1 = document.createElement('th');
    rowHead.appendChild(cellHead1);
    cellHead1.innerHTML = "Created At";
    var cellHead2 = document.createElement('th');
    rowHead.appendChild(cellHead2);
    cellHead2.innerHTML = "Adress";
    var cellHead3 = document.createElement('th');
    rowHead.appendChild(cellHead3);
    cellHead3.innerHTML = "Message";

    var newBody = document.createElement('tbody');
    var rowBody = document.querySelector('.tl');
    rowBody.appendChild(newBody);

    for (var i=0; i<data.length;i++) {
      var newRow=newBody.insertRow(0);
      var newCell = newRow.insertCell(0);
      newCell.innerHTML= data[i].created_at;
      var newCell = newRow.insertCell(1);
      newCell.innerHTML=data[i].formatted_address;
      var newCell = newRow.insertCell(2);
      newCell.innerHTML=data[i].message;
    }

    $(document).ready(function(){
      $(".tl").tablesorter();
    });

  });






// 1. Отправить ajax post на урл -
// http://tail.business-labs.com.ua/test/.
// 2. Полученный объект вывести в качестве таблицы по примеру,
// предоставленному в прикрепленном к письму изображении.
// 3. По клику на ячейку в хеде  таблицы (th) должна происходить
//  сортировка таблицы по выбранному полю
//  ("клик" на ячейку "Created At" - сортировка по created_at,
//  "клик" на "Address" - сортировка по formatted_address и так далее).
