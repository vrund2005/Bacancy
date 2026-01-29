const body = document.body
body.style.display = "flex";
body.style.flexWrap = "wrap";
body.style.gap = "10px";

function isPrime(value){
        if ( value <= 1)
            return false;
        for (let j = 2;j<value;j++){
            if (value%j==0)
                return false;
        }
        return true;
    }

for(let i = 1; i<=100; i++){
    
    const div = document.createElement("div");
    if(isPrime(i)){
        div.style.backgroundColor = "red";
    }
    else if( i % 2 === 0){
        div.style.backgroundColor = "green";
    }
    else{
        div.style.backgroundColor = "yellow";
    }
    

    div.innerHTML = `${i}`;
    div.style.height = "40px";
    div.style.width = "40px";
    div.style.padding = "10px";
    body.append(div);
}