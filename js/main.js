
let cards = document.getElementsByClassName("card");
for(let card of cards){
    card.addEventListener('click',function(){        
        let cardImages = card.getElementsByClassName("img-name");

        function getImage(cardImages) {
            let images = [];
            for (let cardImage of cardImages) {
                let image = cardImage.src;
                images.push(image);
            }
            return images;
        }

        let image = getImage(cardImages);


        let cardTitles = card.getElementsByClassName("product-name");

        function getTitle(cardTitles) {
            let titles = [];
            for (let cardTitle of cardTitles) {
                let title = cardTitle.innerText;
                titles.push(title);
            }
            return titles;
        }

        let title = getTitle(cardTitles);
        

        let cardPrices = card.getElementsByClassName("price");

        function getPrice(cardPrices) {
            let prices = [];
            for (let cardPrice of cardPrices) {
                let price = cardPrice.innerText;
                prices.push(price);

            }
            return prices;
        }

        let price = getPrice(cardPrices);


        // let cardStocks = card.getElementsByClassName("stock");

        // function getStock(cardStocks) {
        //     let stocks = [];
        //     for (let cardStock of cardStocks) {
        //         let stock = cardStock.innerText;
        //         stocks.push(stock);
        //     }
        //     return stocks;
        // }

        // let stock = getStock(cardStocks);


        let shoppingCartArea = document.getElementById("shopping-carts-area");
        let shoppingCart = document.createElement("div");
        shoppingCart.id = "shopping-cart";
        shoppingCart.innerHTML = `
        
        <div class="grid grid-cols-12 items-center border rounded-lg px-3">
            <div class="col-span-2">
                <img class="w-20" src="${image}" alt="">
            </div>
            <div class="col-span-7">
                <h1 class="font-bold ">${title}</h1>
            </div>
            <div class="col-span-1 text-center">
                <h2 class="font-bold"> $ <span>${price}</span></h2>
            </div>
            <div class="col-span-2 flex justify-center">
                <div class="flex justify-between">
                    <button class="rounded-md p-2 btn-outline bg-slate-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
        `
        shoppingCartArea.prepend(shoppingCart);
        
    })
}

let totalPrice = 0;
for (let card of cards){
    card.addEventListener('click', function(){        
        let cardPrices = card.getElementsByClassName("price");
        for (let cardPrice of cardPrices) {
            let price = cardPrice.innerText;
            let priceNum = parseInt(price)
            totalPrice += priceNum;
            let totalPriceText = document.getElementById("total-price")
            totalPriceText.innerText = totalPrice;
            
        }
        
        
    })
    
}







