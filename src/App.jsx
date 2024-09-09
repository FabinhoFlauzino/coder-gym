import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import BgImage from "./assets/bg.png"
import { Equipaments } from "./components/Equipaments"
import { Banner } from "./components/Banner"
import Img1 from "./assets/2.png"
import Img2 from "./assets/3.png"
import { Tab } from "./components/Tab"
import { Testimonials } from "./components/Testimonials"

const BannerData = {
  image: Img1,
  title: `The Importants To Take Care Of Yourself`,
  subtitle: `The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.`,
  link: "#"
}

const Banner2Data = {
  image: Img2,
  title: `The Importants To Take Care Of Yourself`,
  subtitle: `The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.`,
  link: "#"
}

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipaments />
      <Banner {...BannerData}/>
      <Tab />
      <Banner {...Banner2Data}/>
      <Testimonials />
    </div>
  )
}

export default App
