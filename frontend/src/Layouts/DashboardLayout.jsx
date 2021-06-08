import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function DashboardLayout({children}) {
    return (
        <>
        <Navbar/>
        <div className="more">
        <Sidebar/>
            {/* <div>
                {children}
            </div> */}
        </div>
        </>
    )
}

export default DashboardLayout
