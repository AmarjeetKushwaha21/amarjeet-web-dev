function vovelcount(str){
    let count=0;
    for(const s in str){
if(s==="a"||s==="e"||s==="i"||s==="o"||s==="u"){
count++;
}
    }
console.log(count);
}
//  let ans=vovelcount("amarjeetkushwaha");
//  console.log(ans);