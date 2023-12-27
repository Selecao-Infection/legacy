'use client'
import "./index.css"
import React, { useState } from "react"

interface CustomComponentProps {
    isLoading: boolean;
}

const IsLoading = () => {



    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div role="status">
                    <div className="loader">
                        <svg className="svg-wrap" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle stroke-linecap="round" stroke-width="2" className="svg-stroke" cy="25" cx="50" r="15"></circle>
                            <circle className="circle circle-one" cy="25" cx="35" r="1"></circle>
                            <circle className="circle circle-two" cy="25" cx="45" r="1"></circle>
                            <circle className="circle circle-three" cy="25" cx="55" r="1"></circle>
                        </svg>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default IsLoading 