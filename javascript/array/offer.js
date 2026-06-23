let price=[100, 200, 300, 400, 500];
for(let i=0;i<price.length;i++){
    let dis=price[i]/10;
    price[i]=price[i]-dis;
}
for(let i=0;i<price.length;i++){
    console.log(price[i]);
}