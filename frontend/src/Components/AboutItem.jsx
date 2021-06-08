import React from 'react'

function AboutItem({Icon, title, description, className}) {
    return (
        <div className={`${className}`}>
            <span className="text-blue-dark  h-6 w-6">
                <Icon className="h-6 w-6" />
            </span>
            <p className="font-semibold mt-2 text-blue-dark">{title}</p>
            <p className="text-gray-500 mt-2 text-sm">{description}</p>
        </div>
    )
}

export default AboutItem
