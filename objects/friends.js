/*
var friends=[
    {name:"Ganesh",age:24,city:"vizag"},
    {name:"paul",age:24,city :"vizag"},
    {name:"yogi",age:25,city:"vizag"}
]
console.log(friends);
console.log(friends[0].name)

for(var i=0;i<friends.length;i++)
{
    console.log(friends[i].name, friends[i].age, friends[i].city);
}
*/


/*
var amazon = [
    {name : "Speaker", price : 5400, rating: 4},
    {name : "cooker", price : 1400, rating: 3},
    {name : "playstation", price : 20000, rating: 4},
    {name : "sony", price : 10000, rating: 3},
    {name : "Walkman", price : 10000, rating: 4},
    {name : "sony", price : 20000, rating: 4}
  
  ];
  
  for(var i=0; i<amazon.length; i++)
  {
    if(amazon[i].rating>3)
    {
      console.log(amazon[i]);
    }
  }

  for(var i=0;i<amazon.length;i++){
      if(amazon[i].price>=5000 && amazon[i].price<=15000){
          console.log(amazon[i]);
      }
  }
  */
  
/*
  var details = {
    name : "Harish",
    age : 24,
  
    print : function(x,y,z){
              console.log("My name is ",x);
              console.log("My age is",y);
              console.log("My hobbies are",z)
            }
  };

  details.print("Harish", 24, "sketching and Badminton");
  
  */

  var rectangle = {
    length : 30,
    breadth : 40,
  
    area : function(){
                console.log("Area of rectangle is", this.length*this.breadth);
            },
  
    perimeter : function(){
                    console.log("perimeter of rectangle is",2*(this.length+this.breadth));
                }
  };
  
  rectangle.area();
  rectangle.perimeter();

  

  /*
  var e_commerce = {

    products : ["earphone", "headphone", "earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function(){
                    var x=this.quantity[0]*this.price[0]
                    var y=this.quantity[1]*this.price[1]
                    var z=this.quantity[2]*this.price[2]
                    console.log(this.products[0],x)
                    console.log(this.products[1],y)
                    console.log(this.products[2],z)
                    console.log(x+y+z);
                 }
  };
  
  e_commerce.total_price();

  */


  /*
  var e_commerce = {

    products : ["earphone", "headphone", "earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function(){
                    var sum=0;
                    for(var i=0;i<this.products.length;i++)
                    {
                        sum=sum+(this.quantity[i]*this.price[i]);
                    }
                    console.log("total price is", sum);
                 }
  };
  
  e_commerce.total_price();

  */

/*
var products = ["macbook", "iphone", "ipad"];
var prices = [500000, 40000, 50000];

var data = [];
for(i=0;i<products.length;i++)
{
var obj={};
obj.name=products[i]
obj.prices=prices[i];

data.push(obj);
}
console.log(data);

*/


/*
var details = {
    data : [],
    addStudent : function(name1, maths1,science1, english1)
                {
                        var obj={}
                        obj.name=name1;
                        obj.maths=maths1;
                        obj.science=science1;
                        obj.english=english1;

                        this.data.push(obj);

                    
                }
  }
  
  
  details.addStudent("Shubham", 10, 20, 30);
  details.addStudent("Rajesh", 15, 25, 35);
  details.addStudent("Rohit", 20, 30, 40);

  console.log(details.data);

  */

