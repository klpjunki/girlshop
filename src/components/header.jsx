import React, {useEffect, useState} from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";



function Header({card,deleteCart}) {
    const [isCartOpen, setCart] = useState(false)

    const showCart = (card) => {
        return card.map(el => (
            <div className={"flex gap-48 items-center w-full justify-start relative"} key={el.id}>
                <img src={"./public/images/" + el.img} className={"w-auto h-32 rounded-2xl"} alt={el.title} />
                <button className={"flex justify-center items-center cursor-pointer absolute right-10 hover:scale-105"} onClick={() => {deleteCart(el.id)}}>Удалить <MdDeleteForever/></button>
            </div>
        ))
    }


    const cartNothing = (
       <div className={"relative"}>
           <img className={"absolute max-w-8 top-11"} src={"./public/images/hat.png"} alt="" />
           <div className={"flex justify-center items-center h-38 "}>nothing here</div>
       </div>
)
    return (
        <header className="flex justify-between items-center max-w-6xl mx-auto py-7 relative">
            <div className={"hover:scale-105"}>
                <a className={"text-2xl"}  href="/">Girl shop</a>
            </div>
            <nav>
                <ul className={"flex gap-4"}>
                    <li>
                        <a href={"https://lolz.live/mrfimoz/"} target={"_blank"}>
                            <button className={"cursor-pointer hover:scale-105"}>Автор</button>
                        </a>
                    </li>
                    <li>
                        <button className={`flex justify-center items-center cursor-pointer gap-1 hover:scale-105 ${isCartOpen && "text-red-800"}`} onClick={() => setCart(!isCartOpen)}>Корзина <FiShoppingCart /></button>
                    </li>
                </ul>
            </nav>
            {isCartOpen && (
                <div className={"absolute top-20 right-0 bg-gray-200 rounded-3xl w-128 min-h-38 px-10 py-4 flex flex-col items-center gap-8 "}>
                    {card.length > 0 ?
                    showCart(card) : cartNothing}
                </div>
            )}
        </header>
    );
}

export default Header;