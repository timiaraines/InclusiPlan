import React from "react"
import { awrapper } from "../../dummydata"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
