async function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("hiiii")
},4000)
  })
    }


 async function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            console.log("Abes Engineering College");
         
},2000)
  })
    }

async function test() {
  try{
      await f1();
    await f2();
  }
  catch(err){
    console.log("error"+err);
  }
}  
test();  
