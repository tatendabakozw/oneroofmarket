import React from 'react'

const FeatureItem = ({ feature }) => {
    return (
        <>
            <div className="flex flex-col items-start mr-4">
                <p className="bg-blue-100 text-blue-800 font-semibold capitalize text-xs p-2 rounded ">{feature}</p>
            </div>
        </>
    )
}

export default FeatureItem
