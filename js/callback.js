
function greet(name, callback) {
    console.log(name);
    callback(); 
}

function sayGoodbye() {
    console.log("Goodbye");
}
greet("Aditya", sayGoodbye);


function sum(a,b){
    return a+b;
}
function sumwithmsg(clbk,msg){
    const result=clbk(20,30); //50
    const fresult="hi"+msg+" your score is:"+result;
    console.log(fresult);

}
sumwithmsg(sum," Mr Deepak")


function login(msg){
    return msg;
}
function correct(clbk,pass){
    const result=clbk("Ankit");
     if(result==pass){
        console.log("valid user");
     }
}
correct(login,"Ankit");
