let screen= document.querySelector(".screen")
let button = document.querySelector(".button")
let calc = document.querySelector(".calc")

button.addEventListener("click",(e) =>{

    switch(e.target.innerText){
   
        case 'C':
        screen.innerText="";
        break;

        case '=' :
        let result = eval(screen.innerText).toString()
        if(result.indexOf(".") !== -1){
            result= result.substring(0, result.indexOf(".")+4)
        }
        screen.innerText= result;
        break;

        case '⬅':
        let op = screen.innerText;
        op = op.substring(0,op.length-1)
        screen.innerText = op;
        break;

        case '%':
            let expression = screen.innerText;
            let percentage = parseFloat(expression) / 100;
            screen.innerText = percentage.toString();
            break;  

        default:
        screen.innerText += e.target.innerText;
}
})