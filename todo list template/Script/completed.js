var completed = JSON.parse(localStorage.getItem("completedTodo"));
console.log(completed);

completed.map(function (elem) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = elem.itemName;
  var td2 = document.createElement("td");
  td2.innerText = elem.itemQty;

  var td3 = document.createElement("td");
  td3.innerText = elem.itemPriority;

tr.append(td1, td2, td3);

document.querySelector("#body").append(tr);
})