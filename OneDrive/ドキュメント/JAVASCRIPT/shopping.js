
/*let shop=  {

     items : [
        {name:"Apple", price:300},
        {name:"Orange",price:220},
        {name:"Mango",price:100},
        {name:"papaya",price:180}
    ],

    shoppingCart:[],

    addItem:function(itemName)
    {
        let item=this.items.find(i=>i.name.toLowerCase()==itemName.toLowerCase())

        if(item)
        {
            this.shoppingCart.push(item);
            console.log(itemName+" Item added");
        }

        else{
            console.log("Item not found!")
        }
    },

    calculateTotal:function()
    {
        let sum=0;
        for(let i of this.shoppingCart)
        {
            sum+=i.price;
        }
        console.log("\nTotal : ",sum);
        if(sum>300)
        {
            console.log("10% discount apply");
            let discount=sum*0.10;
            console.log("Disocunt : ",discount);
            sum=sum-(sum*0.10);
            console.log("Final amount: ",sum);
        }
    },
    updatePrice:function(itemName,newPrice)
    {
        let item=this.items.find(i=>i.name.toLowerCase()==itemName.toLowerCase());

        if(item)
        {
           item.price=newPrice;
           console.log(itemName," price changed into ",newPrice);
        }else{
            console.log("Item no found");
        }
    }

};
console.log("\n");
shop.addItem("apple");
shop.addItem("banana");
shop.updatePrice("Orange",180);
shop.addItem("Orange");
shop.addItem("papaya");
shop.addItem("papaya");
shop.calculateTotal();
console.log("\n");
*/

let shop={
    items:[
        {name:"Apple",price:250,quantity:10},
        {name:"Orange",price:100,quantity:15},
        {name:"Banana",price:50,quantity:20},
        {name:"Papaya",price:180,quantity:12}
    ],

    shoppingCart:[],

    addItemWithQuantity:function(itemName,q)
    {
        let item=this.items.find(i=>i.name.toLowerCase()==itemName.toLowerCase());

        if(item)
        {
            if(item.quantity>=q)
            {
              this.shoppingCart.push({
                name:item.name,
                price:item.price,
                quantity:q
            })

            item.quantity-=q;

            console.log(itemName," Added");
            }
        }else
        {
            console.log("Item not found");
        }
        
    },

    addNewProduct:function(itemName,p,q)
    {
        let item=this.items.find(i=>i.name.toLowerCase()==itemName.toLowerCase())
        
        if(item)
        {
            this.items.push(
                {
                    name:itemName,
                    price:p,
                    quantity:item.quantity+q
                }
            )
        }
        this.items.push({
            name:itemName,
            price:p,
            quantity:q
        })
        console.log(itemName," Added successfully");
    },

    
    updateQuantity:function(itemName,q)
    {
        let item=this.items.find(i=>i.name.toLowerCase()==itemName.toLowerCase())
        {
            if(item)
            {
                item.quantity=q;
                console.log("Quantity update-",itemName," ",q);
            }
            else
            {
                console.log("Item not found");
            }
        }
    },

    calculateTotal:function()
    {
        let sum=0;
        for(i of this.shoppingCart)
        {
            sum+=i.price*i.quantity;
        }
        console.log("Total : ",sum);

        if(sum>500)
        {
            let discount=sum*0.10;
            console.log("Discount : ",discount);
            let amount=sum-discount;
            console.log("Final AMount : ",amount);
        }else{
            console.log("Discount not applied ");
            console.log("Final Amount : ",sum);
        }
    },

    display:function()
    {
        for(i of this.items)
        {
            console.log(i.name," ",i.price," ",i.quantity,"\n");
        }
    }

}

shop.addItemWithQuantity("Apple",2);
shop.updateQuantity("Apple",10);
shop.addItemWithQuantity("Banana",2);
shop.addNewProduct("Banana",50,15);
shop.addItemWithQuantity("Mango",3);

shop.calculateTotal();


shop.display();
