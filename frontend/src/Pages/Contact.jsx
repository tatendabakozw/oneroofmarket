import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import aboutBanner from '../Images/contactBanner.jpg'
import contact from '../Images/contact.jpg'


function Contact() {
    return (
        <>
            <Navbar transparent />
            <main className="contact">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${aboutBanner})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 pr-0">
                                    <h1 className="text-white text-left text-5xl">
                                        The reimagined way to buy and sell your home.
                                        </h1>
                                    {/* <p className="mt-4 text-lg text-gray-300">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil reiciendis dolorum molestiae delectus,
                                        optio voluptate molestias recusandae sed explicabo error modi iste omnis quibusdam voluptas
                                        iure quod eveniet eius? Ratione?
                                        </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px", transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-100 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                </div>
                <div className="below bg-gray-100 min-h-screen py-16 grid grid-cols-5">
                    <div className="col-span-1 bg-gray-100">

                    </div>
                    <div className="col-span-4 bg-white shadow grid grid-cols-3">
                        <div className="col-span-1 p-8 flex flex-col items-center">
                            <p className="font-bold text-blue-light text-5xl">Contact Us</p>
                        </div>
                        <div className="col-span-2 bg-blue-light" style={{
                            backgroundImage: `url(${contact})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </>
    )
}

export default Contact
