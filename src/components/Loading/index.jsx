import React from 'react'
import './style.css'

const index = () => {
    return (
        <div className="container_login">
            <div className="sk-circle">

                {
                    [...Array(12)].map((_, i) => (
                        <div key={i} className={`sk-child sk-circle${i + 1}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default index
