const items = [
    {
        item: 'Apple',
        cost: 85.00,
        id: 1,
        discount: 5,
        rate: function () {
            let afterDiscount = (this.cost / 100) * this.discount;
            let finalRate = this.cost - afterDiscount;
            return finalRate;
        }
    },
    {
        item: 'Orange',
        cost: 75.00,
        id: 2,
        discount: 10,
        rate: function () {
            let afterDiscount = (this.cost / 100) * this.discount;
            let finalRate = this.cost - afterDiscount;
            return finalRate;
        }
    },
    {
        item: 'Watermelon',
        cost: 175.00,
        id: 3,
        discount: 10,
        rate: function () {
            let afterDiscount = (this.cost / 100) * this.discount;
            let finalRate = this.cost - afterDiscount;
            return finalRate;
        }
    },
    {
        item: 'Peach',
        cost: 150.00,
        id: 4,
        discount: 10,
        rate: function () {
            let afterDiscount = (this.cost / 100) * this.discount;
            let finalRate = this.cost - afterDiscount;
            return finalRate;
            // console.log(`Final Rate is :  ${finalRate}`);
        }
    },
];

// global cart object
const cart = {};


items.forEach((ele) => {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    div.innerHTML = `<h3>${ele.item}</h3><strike><h4>PKR: ${ele.cost}</h4></strike>
                     <h4>discount ${ele.discount}%</h4><h4>PKR: ${ele.rate()}</h4>`;
    div.appendChild(btn);
    let p = document.createElement('p');
    div.appendChild(p);

    div.style.border = "1px solid #cccccc";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.style.padding = "5px";
    div.style.textAlign = "center";
    p.innerText = 0
    document.body.appendChild(div);
    // add click event-listener
    div.addEventListener('click', function () {
        let namer = ele.item.toLocaleLowerCase();
        if (!cart[namer]) {
            cart[namer] = {
                name: ele.item,
                price: ele.rate(),
                qty: 1,
                subTotal : function(){
                    return this.qty * this.price
                },
            }
        } else {
            cart[namer].qty++;
        }
        p.innerText = `${cart[namer].qty++}`
        relist(cart);
    });
})

const output = document.createElement('div');
document.body.appendChild(output);

// showing total qty and price
function relist(cartObj) {
    output.innerHTML="";
    let total = 0;
    for (let pro in cartObj) {
        let subTotal = cartObj[pro].subTotal();
        total += subTotal;
        output.innerHTML += `<strong>${cartObj[pro].name}</strong> Pkr${cartObj[pro].price} x `;
        output.innerHTML += `<strong>${cart[pro].qty}</strong> <strong>Pkr${subTotal}</strong> <br>`;
    }
    output.innerHTML += `<b>Total = $${total}<b>`;
    // console.log(cartObj)     
}
