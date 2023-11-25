
import GitHub from "../../public/assets/github.png"
import Telegram from "../../public/assets/Telegram_logo.svg.webp"


const Header = () => {
    return (
        <header className=" py-5 bg-gradient-to-r from-cyan-600 to-violet-500">
            <div className="container flex items-center justify-between">
                <h1 className="font-bold text-2xl  text-green-300   shadowx">Animals</h1>
                
                <div className="flex space-x-3 bg-teal-400 rounded-full py-1.5 px-3">
                    <a href="https://t.me/mirodildev/">
                        <img width={30} src={Telegram} alt="telegram icon" />
                    </a>
                    <a href="https://github.com/tolamirzayev-077/Children_Game">
                        <img width={30} src={GitHub} alt="github icon" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header