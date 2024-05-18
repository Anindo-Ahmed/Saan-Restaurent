
const MenuItem = ({item}) => {
    const { _id, recipe, name, image, category, price} = item;
    return (
        <div className="flex gap-3">
            <img className="w-24 rounded-lg" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}  -------------------------</h2>
                <p className="text-sm text-gray-400">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;