import React from 'react'

const App = () => {


  return (
    <div>
      
      <TopComponent/>
      <FoodList/>

  
    </div>
  )
}

export default App



const TopComponent = () => {


  
  return (
     <div id="">


      <h1 id="Heading">RESTURANT MENU APPLICATION</h1>
      <h3 id="Heading2">Our Menu</h3>

      <p className="Para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias repellendus dolore blanditiis optio quos voluptatem
        praesentium soluta perspiciatis.
      </p>

    </div>
  )
}

export  {TopComponent}





const FoodList = () => {


  const dummayData = [
  {
    title: 'Biryani',
    img: 'https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5-500x500.jpg',
    para: 'Karachi most Favourite Biryani',
    quantity: 10
  },
  {
    title: 'Karahi',
    img: 'https://www.sprinklesandsprouts.com/wp-content/uploads/uploads/2021/10/Chicken-Karahi-SQ.jpg',
    para: 'Spicy traditional chicken karahi',
    quantity: 8
  },
  {
    title: 'Burger',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    para: 'Juicy beef burger with cheese',
    quantity: 12
  },
  {
    title: 'Pizza',
    img: 'https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg',
    para: 'Cheesy loaded pizza',
    quantity: 6
  },
  {
    title: 'Roll Paratha',
    img: 'https://images.deliveryhero.io/image/fd-pk/LH/h7pv-listing.jpg',
    para: 'Spicy chicken roll paratha',
    quantity: 15
  },
  
  {
    title: 'Pulao',
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
    para: 'Aromatic rice pulao',
    quantity: 0
  },
  {
    title: 'Fries',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
    para: 'Crispy golden fries',
    quantity: 19
  },
  {
    title: 'Sandwich',
    img: 'https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg',
    para: 'Fresh veggie chicken sandwich',
    quantity: 14
  },
  {
    title: 'Samosa',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    para: 'Crispy spicy samosa',
    quantity: 25
  },
  {
    title: 'Zinger Burger',
    img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086',
    para: 'Crunchy zinger burger',
    quantity: 7
  }
];

  return (


    <div>

          <ul id="Foodlist">
        {dummayData.map((foodItem)=>{
          return <li>
          <img
          src={foodItem.img}
            alt=""
          />

          <div className="content">
            <h4>{foodItem.title}</h4>
            <p>
             {foodItem.para}
            </p>
            <span>{foodItem.quantity == 0 || foodItem.quantity <= 1 ? 'Sold Out' : `Quantity : ${foodItem.quantity}`}
            </span>
            <p id='discount'> {foodItem.quantity >= 20 ? 'Buy 1 Get One Free' : ''}</p>
          </div>
        </li>
        })}
        

 
      </ul>
    </div>
  )
}

export {FoodList}