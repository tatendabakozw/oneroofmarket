import React from 'react'
import General from '../Layouts/General'
import house from '../Images/house3.png'
import Search from '../Components/Search'
import HouseItem from '../Components/HouseItem'
import housePic from '../Images/house-1.jpg'

function Home() {   

    return (
        <General>
            <div className="home pb-16">
                <div className="banner grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="left lg:col-span-1 md:col-span-2 col-span-1 md:pt-16 pt-16 md:pl-16 md:mr-4 px-8">
                        <p className="text-6xl text-blue-light font-extrabold mb-8">Your dream house is no longer just a dream</p>
                        <p className="text-gray-500 mx-4 mb-6">
                            Real estate is an imperishable asset, ever increasing in value.
                            It is the most solid security that human ingenuity has devised.
                            It is the basis of all security and about the only indestructible security.</p>

                        <div className="search">
                            <Search />
                        </div>
                    </div>
                    <div className="right md:col-span-1 col-span-1 lg:grid-cols-2">
                        <img src={house} alt="" />
                    </div>
                </div>
                <div className="below flex flex-col">
                    <p className="text-blue-light font-extrabold text-2xl text-center mt-16">Featured properties</p>
                    <div className="linw w-16 border-blue-light rounded mt-4 border-2 self-center"></div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-32 md:mx-16 mx-8 mt-16">
                        <HouseItem
                            picture={housePic}
                            category="family"
                            price={`${500000}`}
                            location="15002 Zengeza 3 extension"
                            className="col-span-1"
                        />
                        <HouseItem
                            picture={housePic}
                            category="family"
                            price={`${500000}`}
                            location="15002 Zengeza 3 ext"
                        />
                        <HouseItem
                            picture={housePic}
                            category="family"
                            price={`${500000}`}
                            location="15002 Zengeza 3 ext"
                        />
                        <HouseItem
                            picture={housePic}
                            category="family"
                            price={`${500000}`}
                            location="15002 Zengeza 3 ext"
                        />
                    </div>
                </div>
            </div>
        </General>
    )
}

export default Home
