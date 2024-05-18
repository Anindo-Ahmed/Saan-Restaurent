import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Parallax } from "react-parallax";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle>
                subHeading= "Check it out"
                heading= "From our Menu"
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-24'>
            {
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
            </div>
            <div className='text-center'>
            <button className="btn border-b-2 border-b-stone-900 mb-20">View full Menu</button>
            </div>
            <Parallax strength={300}>
                <div className="bg-black h-[170px] flex lg:flex-row justify-center items-center">
                    <div className='text-white font-semibold text-4xl '>Call us: 0192345678910</div>
                </div>
            </Parallax>

        </section>
    );
};

export default PopularMenu;