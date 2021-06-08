import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom'
import {LocationMarkerIcon, MailIcon, HeartIcon} from '@heroicons/react/outline'
import Tooltip from '@material-ui/core/Tooltip';
import Money from './Money';


const HouseItem = ({ className, picture, category, userpic, itemname, location, bgColor, price, id, discount, description, owner }) => {
    const history = useHistory()

    const [save, setSaved] = useState(false)

    const addTocart = (e) => {
        e.preventDefault()
        // dispatch({
        //     type: 'ADD_TO_BASKET',
        //     item: {
        //         id: id,
        //         picture: picture,
        //         category: category,
        //         itemname: itemname,
        //         rating: rating,
        //         verified: verified,
        //         catPicture: catPicture,
        //         price: price,
        //         id: id,
        //         discount: discount,
        //         description: description,
        //         owner: owner
        //     }
        // })
    }

    const setDetails = (e) =>{
        e.preventDefault()
        history.push('/propertydetails')
    }

    const setUserStore = (e) => {
        e.preventDefault()
        // const ZOMstoreOwner = {
        //     owner: owner,
        //     userpic: userpic,
        //     rating: rating,
        //     verified: verified,
        // }
        // localStorage.setItem('curstoreowner', JSON.stringify(ZOMstoreOwner))
        // history.push(`/shop/${owner}`)
        // history.push('/dresses?color=blue')
    }

    return (
        <div className={` ${className} items min-w-52 shadow transition border-none duration-100 transform hover:scale-105 rounded-sm overflow-hidden hover:shadow-lg hover:border-none cursor-pointer`}>
            <div onClick={setDetails} className="image h-40 w-full rounded-sm flex justify-end p-2" style={{
                backgroundImage: `url(${picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
               <span className="">
                <p className="bg-blue-light p-1 text-sm rounded-sm text-white">
                    <Money
                        amount={price}
                    />
                </p>
               </span>
            </div>
            <div className="flex flex-col p-2">

                <div className="relatedcategories flex-wrap flex items-center justify-between">
                   
                </div>
            
                <div className="flex-1"></div>

                <span onClick={setUserStore} className="category flex flex-row items-center mb-2">
                    <div className="icon text-gray-500">
                        <LocationMarkerIcon className="h-5 w-5" />
                    </div>
                    <div className={`cat flex flex-row text-sm items-center`}>
                        <p className="text-gray-500 px-2">{location}</p>
                    </div>
                </span>
                <div className="flex-1"></div>
                <div className="border-b  border-gray-300 mb-2"></div>
                <div className="grid grid-cols-5 gap-2">
                    <span onClick={setUserStore} className="text-xs col-span-3 font-semibold text-center border hover:bg-blue-light hover:text-white text-gray-700  border-gray-300 rounded-full p-1">
                        View Details
                    </span>
                    {!save ? (
                        <span onClick={() => setSaved(true)} className="saved col-span-1 flex text-blue-light">
                            <FavoriteIcon />
                            {/* <p className="text-xs">Saved</p> */}
                        </span>) : (
                        <span onClick={() => setSaved(false)} className="saved col-span-1 flex text-gray-600">
                            <HeartIcon className="h-6 w-6" />
                            {/* <p className="text-xs">Save</p> */}
                        </span>)}
                    <span onClick={addTocart} className="text-gray-700 col-span-1">
                        <MailIcon className="h-6 w-6" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HouseItem
