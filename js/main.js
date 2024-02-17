
let cards = document.getElementsByClassName("card");
for(let card of cards){
    card.addEventListener('click',function(){
        let productName = document.getElementById("product-name");
        let productNameInner = productName.innerText;
        console.log(productNameInner);
    })
}