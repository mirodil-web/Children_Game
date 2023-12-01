import Horse from "../../public/assets/horse.gif"
import Gamebg from "../../public/assets/gamebg.png"
import I from "../../public/assets/information.png"
import { useState } from "react"
import Cat from "../../public/assets/cat.gif"
import Pet from "../../public/assets/pet.gif"
import Cow from "../../public/assets/cow.gif"
import Rabitt from "../../public/assets/rabbit.gif"
import Chiken from "../../public/assets/chiken.gif"






const Content = () => {

    const [ inter , setInter] = useState(false)

  return (
      <div className="py-12 "> 
          <div className="container">
              <div className="border-dashed border-8 max-h-[600px] max-w-[700px] border-teal-500 relative ">
                   <img onClick={()=>setInter(true)} src={I} className="absolute right-3 top-3" width={30} alt="i" />
                  <img src={Pet} className="absolute w-[90px] right-80 top-40" alt="cat" />

                <img src={Cat} className="absolute w-[70px] right-40 top-44" alt="cat" />
                  <img className=" w-full h-[400px]   rounded-md" src={Gamebg} alt="bg" />
                  <img width={180} className="absolute top-32 left-16 z-10" src={Horse} alt="horse" />
                  <img className="absolute  left-20 bottom-10" width={80} src={Rabitt} alt="Rabbit" />
                  <img className="absolute right-20 bottom-16" width={90} src={Cow} alt="Rabbit" />
                  <img className="absolute top-12 left-[340px]" width={70} src={Chiken} alt="Rabbit" />


              </div>
          </div>

          { inter &&<div className="fixed top-0 left-0 z-20 w-full h-full flex bg-gray-600/50 justify-center items-center">
              <div className="p-5 max-w-lg w-full rounded-md bg-white">
                  <div className="flex justify-between items-center">
                      <h3>Game information</h3>
                      <button onClick={() => setInter(false)}>
                          ⨉
                      </button>
                  </div>
              </div>
          </div>
          }
    </div>
  )
}

export default Content