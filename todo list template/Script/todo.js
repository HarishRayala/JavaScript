var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);
var completed = JSON.parse(localStorage.getItem("completedTodo")) || []


todoItems.map(function (elem,index) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = elem.itemName;
  var td2 = document.createElement("td");
  td2.innerText = elem.itemQty;

  var td3 = document.createElement("td");
  td3.innerText = elem.itemPriority;

  var td4 = document.createElement("td");
  td4.textContent = " complete";
  td4.style.color = "red";
  td4.style.cursor = "pointer";
  td4.addEventListener("click", function () {
    markCompleteFunction(elem,index);
  });
  tr.append(td1, td2, td3, td4);

  document.querySelector("#body").append(tr);
});

function markCompleteFunction(elem,index) {
  //console.log(elem);
  completed.push(elem);
  //console.log(completed);
      localStorage.setItem("completedTodo", JSON.stringify(completed));
      //splice
}


