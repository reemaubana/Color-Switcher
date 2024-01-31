// pahle sare boxes ko select karenge jo ki '.button' me hai.
document.querySelectorAll('.button');
// fir use variable me hold karenge
const colorBox = document.querySelectorAll('.button');
// an use console.log karke output dekhenge
console.log(colorBox);

const bluecode = "#28cff1";

// ab hame body chahiye, to ham 'body' tag name ko lenge aur variable me hold karenge;
const mainBody = document.querySelector("body");
console.log(mainBody);

// hame pata hai ki colorBox pe NodeList mili hai to ham forEach karke function call karwa sakte hai.

colorBox.forEach(function(button){
    console.log(button);
    // ab yaha Event Listener lagayenge taki jo activity ho wo button ko click karne par
    // wo listen kar paye to uske liye 'click' event lagaya aur function callback karenge 'event' object pe.
    button.addEventListener('click', function(event){
        // ab console.log karwayenge
        console.log(event)
        console.log(event.target)
        // event.target se ye pata lagega ki event kaha se ho raha hai.
        if(event.target.id === 'grey'){
            // mainBody.style.backgroundColor = 'grey' OR we can write it as below
            mainBody.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'white') {
            mainBody.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            mainBody.style.backgroundColor = bluecode;
        }
        if (event.target.id === 'yellow') {
            mainBody.style.backgroundColor = event.target.id
        }
    });
});