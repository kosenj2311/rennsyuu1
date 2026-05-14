function prime(n){
    let j = 0;
    if (n < 2) {
        console.log("not primenumber");
        return;
    }
    for (let i = 2;i<n;i++){
        if(n%i===0){
            j=1;
            break;
        }
        else
         j = 0;
    }
    if(j == 0){
        console.log("primenumber");
    }
    else
        console.log("not primenumber");
}
prime(15);
prime(3);
prime(2);
prime(1);
prime(17);