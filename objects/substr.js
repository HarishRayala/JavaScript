var str="masai";
var count=0;
for(var i=0;i<str.length;i++){
   var bag="";
    for(var j=i;j<str.length;j++){
    bag=bag+str[j];
    console.log(bag);
    if(bag[0]==bag[bag.length-1]){
        count++;
        }   
    }
}
console.log(count);

console.log("*******************************")

var str="1001";
var min=-Infinity;
var count=0;
for(var i=0;i<str.length;i++){
    var bag="";
    for(var j=i;j<str.length;j++){
        bag=bag+str[j];
        console.log(bag);
        if(str[i]==str[str.length-1]){
            count++;
            if(count>min){
                min=count;
            }
        }
    }
}console.log(min);