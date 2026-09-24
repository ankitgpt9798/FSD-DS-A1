function test1(cb){
    setTimeout(()=>{
        console.log("Task1");
        cb();
    },4000)
}

function test2(cb){
    setTimeout(()=>{
        console.log("Task2");
        cb();
    },2000)
}

function test3(cb){
    setTimeout(()=>{
        console.log("task3");
        cb();
    },200)
}

function test4(){
    setTimeout((cb)=>{
        console.log("test4");
        cb();
    },100)
}

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});
