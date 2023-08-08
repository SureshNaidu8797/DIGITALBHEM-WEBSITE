const product = [
    {
        id: 1,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 20
    },
    {
        id: 2,
        image: 'image/appleWatch.jpg',
        title: 'Apple Watch',
        price: 45
    },
    {
        id: 3,
        image: 'image/p1.jpg',
        title: 'Navy Blue Shirt',
        price: 10,
    },
    {
        id: 4,
        image: 'image/dd-1.jpg',
        title: 'HP Laptop Next Generation',
        price: 40,
    },
    {
        id: 5,
        image: 'image/ee-1.jpg',
        title: '250D DSLR Camera',
        price: 65,
    },
    {
        id: 6,
        image: 'image/p5.png',
        title: 'Nike Blue Shoe',
        price: 15,
    },
    {
        id: 7,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 55,
    },
    {
        id: 8,
        image: 'image/hh-1.jpg',
        title: 'Ari Pods Pro',
        price: 50,
    },
];
    const categories = [...new Set(product.map((item)=>
        {return item}))]
        let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')
    
    var cart =[];
    
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    function displaycart(){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    
        
    }