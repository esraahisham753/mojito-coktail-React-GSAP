import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const About = () => {
 
  return (
    <section id="about">
        <div className="content">
            <div className="md:col-span-8">
                <div className="mb-16 md:px-0 px-2">
                    <p className="badge">Best Cocktails</p>
                    <h2>Where every detail matters<span className="text-white-100">-</span>from muddle to garnish</h2>
                </div>
            </div>
            <div className="sub-content">
                <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                <div>
                    <span className="md:text-3xl text-xl">4.5/5</span>
                    <p className="text-sm text-white-100">More than +12000 customers</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About