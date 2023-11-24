import Horse from "../../public/assets/horse.gif"
import Gamebg from "../../public/assets/gamebg.png"


const Content = () => {
  return (
      <div className="py-12"> 
          <div className="container">
              <div className="border border-teal-500 relative p-5">
                  <img className=" w-full  rounded-md" src={Gamebg} alt="bg" />
                  <img className="absolute -z-10" src={Horse} alt="horse" />
              </div>
          </div>
    </div>
  )
}

export default Content