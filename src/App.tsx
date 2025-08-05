import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Stack } from "./components/Stack"
import { WhoamiSection } from "./components/Whoami"

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <div id="whoami">
          <WhoamiSection/>
        </div>
        
        <div id="stack">
          <Stack/>
        </div>

        <div id="experience">
          <Experience/>
        </div>

        <div id="education">
          <Education/>
        </div>
      </div>
    </>
  )
}

export default App
