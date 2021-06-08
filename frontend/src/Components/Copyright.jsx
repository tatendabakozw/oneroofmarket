import React from 'react'

function Copyright() {
    return (
        <>
            <div className="text-gray-50 text-xs font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}EsbyProperties{" "}
                <a
                    href="/"
                    className="text-gray-200 hover:text-gray-900"
                >
                    Tatenda Bako
                </a>.
              </div>
        </>
    )
}

export default Copyright
