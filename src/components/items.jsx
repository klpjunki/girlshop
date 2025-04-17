import React from 'react';


const Items = ({girl, onAddToCart}) => {
    return (
        <div className={"grid grid-cols-3 max-w-6xl mx-auto text-center py-14"}>
            {girl.map((el) => (
                <div className={"flex flex-col items-center gap-2"} key={el.id}>
                    <p>{el.title}</p>
                    <img className={"w-64 h-64 rounded-2xl"} src={"./public/images/" + el.img} alt="" />
                    <div>
                        <button className={"border rounded-2xl px-2 py-2 cursor-pointer hover:scale-105"} onClick={() => onAddToCart(el)}>Добавить</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;