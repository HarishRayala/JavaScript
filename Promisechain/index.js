function getName(){
    let student={Name:"Hari"};
    return new Promise((resolve,reject)=> resolve(student));
}

function getClass(data){
    let student={...data,class:7};
    return new Promise((resolve,reject)=> resolve(student));
}

function getGrade(data){
    let student={...data,grade:"A"};
    return new Promise((resolve,reject)=> resolve(student));
}

function print(data){
   console.log(data);
}

    getName()
    .then((res)=>getClass(res))
    .then((res)=>getGrade(res))
    .then((res)=>print(res))