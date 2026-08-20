 const num=[11,22,32,41,58,69,78,20,90]
const even=num.filter((i)=>(i%2==0))
const square=even.map((i)=>(i*i))
console.log("even",even)
console.log("square",square)