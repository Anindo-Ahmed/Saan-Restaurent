import { useEffect, useState } from "react";

const MenuCard = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setFoodItems(data))
    },[])
    console.log(foodItems)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {
            foodItems.map(item => <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            >
              <img src={item.image} alt="" />
            </div>
      
            <div className="w-56 -mt-16 overflow-hidden bg-gray-500 rounded-lg shadow-lg md:w-64 ">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {item.category}
              </h3>
      
              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">${item.price}</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>)
        }
    </div>
  );
};

export default MenuCard;
