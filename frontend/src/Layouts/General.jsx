import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function General({children}) {
    return (
        <div>
            <div className="nav">
                <Navbar/>
            </div>
            <div className="body pb-16 min-h-screen">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default General
