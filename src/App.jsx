import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Items from "./components/items.jsx";
import {useEffect, useState} from "react";
function App() {

 const girl = {
   girls: [
     {
       id:1,
       title: 'малышка 1',
         img: 'photo9.jpg'
     },
     {
       id:2,
       title: 'малышка 2',
         img: 'photo8.jpg'
     },
     {
       id:3,
       title: 'малышка 3',
         img: 'photo7.jpeg'
     },
       {
           id:4,
           title: 'малышка 4',
           img: "photo4.jpeg"
       },
       {
           id:5,
           title: 'малышка 5',
           img: "photo5.jpeg"
       },
       {
           id:6,
           title: 'малышка 6',
           img: "photo6.jpeg"
       },
       {
           id:7,
           title: 'малышка 7',
           img: "photo3.jpeg"
       },
       {
           id:8,
           title: 'малышка 8',
           img: "photo2.jpeg"
       },
       {
           id:9,
           title: 'малышка 9',
           img: "photo1.jpeg"
       },
   ]
 }

 const [card, setCard] = useState([]);

 useEffect(() => {
     console.log(card);
 })

    const addToCart = (girl) => {
        setCard(prevCard => {
            const alreadyExists = prevCard.some(item => item.id === girl.id);
            if (!alreadyExists) {
                return [...prevCard, girl];
            }
            return prevCard;
        });
    };

 const deleteCart = (id) => {
     setCard([...card.filter((item) => item.id !== id)]);
 }

  return (
      <div className="relative max-w-full">
         <Header card={card} deleteCart={deleteCart} />
          <hr/>
          <Items girl={girl.girls}  onAddToCart={addToCart} />
          <hr/>
          <Footer />
      </div>
  )
}

export default App
