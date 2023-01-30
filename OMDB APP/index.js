
function searching(){
    let movie=document.getElementById("movie").value;
    let url="https://www.omdbapi.com/?apikey=56f55046&t="+movie
    // let url=`https://www.omdbapi.com/?s=${movie}&apikey=56f55046`
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
            appendData(res)
    })
    .catch(function(err){
        console.log("err:",err)
    })
}

function appendData(data){
    let container=document.getElementById("container");
    console.log(data)
    container.innerHTML=null;
    if(data.Response=="False" || data.Poster== "N/A"){
        let image=document.createElement("img");
        image.src="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg";
        image.style.width="100%";
        let button =document.createElement("button");
        button.innerText="Back";
        button.style.width="15%";
        button.style.marginBottom="20px"
        button.addEventListener("click",function(){
          window.location.href="index.html";
        });
        container.append(button,image);
    }else{
    let innnerBox= document.createElement("div");
    innnerBox.setAttribute("class","innerBox");
    let image=document.createElement("img");
    image.src=data.Poster;
    let Title=document.createElement("p");
    Title.innerText=data.Title;
    let director=document.createElement("p");
    director.innerText=`Directed By:${data.Director}`;
    let Year=document.createElement("p");
      Year.innerText=data.Year;
      var extra=document.createElement("div");
      let Rating=document.createElement("p");
      Rating=data.Ratings[0].Value;
      var check=parseInt(Rating);
      if(check>=8){
          console.log(check)
          let Recommended=document.createElement("p");
          Recommended.innerText="Recommended";
          Recommended.style.backgroundColor="green";
          Recommended.style.color="white";
          Recommended.style.padding="5px";
          Recommended.style.borderRadius="10px"

          extra.append(Rating,Recommended);
          
        }
        else{
            extra.append(Rating);
        }
        let button =document.createElement("button");
    button.innerText="Back";
    button.style.width="15%";
    button.style.marginBottom="20px"
    button.addEventListener("click",function(){
      window.location.href="index.html";
    })
    innnerBox.append(button,image,Title,director,Year,extra);
    container.append(innnerBox);

    document.getElementById("movie").value=null;
    }
}
