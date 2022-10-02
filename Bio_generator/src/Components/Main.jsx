import React from 'react'
import { Resultdiv } from './Resultdiv.jsx'

export const Main = () => {
  return (
    <div className="flex w-10/12 maindiv text-center border-2 border-red-500 m-auto">
        <div className="ml-10  w-6/12   ">
            <div className="optiondiv  h-20">
                <h1>Option</h1>
            </div>
        </div>
        <div className="w-5/12  ml-10  h-20 border-2 border-red-500 resultdiv">
            <Resultdiv/>
        </div>
    </div>
  )
}
