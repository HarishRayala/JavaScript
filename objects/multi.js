var items = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

console.log("***********************************************")
var symbols=[];
var symbol1=["* * *"];
var symbol2=["# #"];
var symbol3=["% % %"];
symbols.push(symbol1);
symbols.push(symbol2);
symbols.push(symbol3);
console.log(symbols);

console.log("***************************************************")

var items = [
    ["vatsal", 28, "male"],
    ["Hitesh", 30, "male"]
];

console.log(items[0][0]);
console.log(items[0][1]);
console.log(items[0][2]);
console.log(items[1][0]);
console.log(items[1][1]);
console.log(items[1][2]);

console.log("****************************************************")

var matrix=[
    ["A","B","C","D"],
    ["E","F","G","H"],
    ["I","J","K","L"],
];
var rows=matrix.length;
console.log("rows:",rows);
var coloumn=matrix[0].length;
console.log("coloumn:",coloumn);

console.log("****************************************************");

var matrix=[
    ["A","B","C","D"],
    ["E","F","G","H"],
    ["I","J","K","L"],
];
var rows=matrix.length;
var coloumn=matrix[0].length;
for(var father=0;father<=coloumn-1;father++){
    var output="";
    for(var son=0; son<=rows-1;son++){
        output=output+matrix[son][father]+" ";
    }
    console.log(output);
}

console.log("****************************************************");

var matrix=[
    ["A","B","C","D"],
    ["E","F","G","H"],
    ["I","J","K","L"],
];
var rows=matrix.length;
var coloumn=matrix[0].length;
for(var father=0;father<=rows-1;father++){
    var output="";
    for(var son=coloumn-1; son>=0;son--){
        output=output+matrix[father][son]+" ";
    }
    console.log(output);
}

console.log("****************************************************");

