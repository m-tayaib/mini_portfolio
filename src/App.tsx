import Background from "./component/Background"
import Content from "./component/Content"
import SocialIcon from "./component/SocialIcon"
import ToolTip from "./component/ToolTip"
function App() {
  return (
    <>
      <div className="p-3 md:py-8 md:px-24 h-screen w-full">
        <Background />
        <SocialIcon />
        <div className="mt-14 md:mt-0">
          <ToolTip />
        </div>

        <div className="flex justify-center md:justify-start items-center md:items-start flex-col w-full h-[40vh] ">

          <Content />
        </div>

      </div>
    </>
  )
}

export default App