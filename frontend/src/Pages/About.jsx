import React from 'react'
import AboutItem from '../Components/AboutItem'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import aboutBanner from '../Images/aboutBanner.jpg'
import whyBg from '../Images/whyUs1.jpg'
import { BadgeCheckIcon, BookOpenIcon, FlagIcon, ClockIcon } from '@heroicons/react/solid'

function About() {
    return (
        <div>
            <>
                <Navbar transparent />
                <main>
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
                            <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <div className="md:pr-12 pr-0">
                                        <h1 className="text-white font-semibold text-5xl">
                                            The reimagined way to buy and sell your home.
                                        </h1>
                                        <p className="mt-4 text-lg text-gray-300">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil reiciendis dolorum molestiae delectus,
                                            optio voluptate molestias recusandae sed explicabo error modi iste omnis quibusdam voluptas
                                            iure quod eveniet eius? Ratione?
                                        </p>
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
                                    className="text-white fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>

                    </div>
                    <div className="bottom pt-16 px-16">
                        <div className="grid md:grid-cols-5 col-span-1" style={{
                            minHeight: "75vh"
                        }}>
                            <div className="col-span-2 py-16 md:px-28 px-8">
                                <div className=" bg-center bg-cover my-auto md:pr-16 pr-2 w-full" style={{
                                    backgroundImage: `url(${whyBg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>
                                    <div className="flex py-28 flex-col">
                                        <p className="text-blue-dark text-5xl font-bold">Why choose us.</p>
                                        <div className="border-b-2 border-blue-dark w-24 py-4"></div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-3 pt-16">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-16">

                                    <AboutItem
                                        Icon={BadgeCheckIcon}
                                        className="col-span-1"
                                        title="Company Professional"
                                        description="We are a professinal company with a lot of years of experience, based in Zimbabwe and southern africa as a whole"
                                    />
                                    <AboutItem
                                        Icon={BookOpenIcon}
                                        className="col-span-1"
                                        title="Buy, sell, rent, rent out"
                                        description="We assist you in providing various property assets that you can buy and rent easily"
                                    />
                                    <AboutItem
                                        Icon={FlagIcon}
                                        className="col-span-1"
                                        title="Serving in varous cities"
                                        description="Various clients from cities have experienced the best consulting serices from us"
                                    />
                                    <AboutItem
                                        Icon={ClockIcon}
                                        className="col-span-1"
                                        title="24 Hour consultancy"
                                        description="Do not hesitate to contact us, whenever you want we will be ready to discuss with you"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        </div>
    )
}

export default About
