var arr=[2,4,6,8];
var output=findaverage(arr);
function findaverage()
{
if(arr.length==0)
{
    return 0;
}
var sum=0; count=0;
for(var i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
    count++;
}
var average= sum/count;
return average;
}
console.log("output of average:",output);