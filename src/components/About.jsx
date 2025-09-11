import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const About = () => {
  useGSAP(() => {
    const titleWords = new SplitText('#about h2', {
        type: 'words'
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top center'
        }
    });

   tl.from(titleWords.words, {
    opacity: 0,
    duration: 1,
    ease: 'expo.inOut',
    stagger: 0.02,
    yPercent: 100
   });

   tl.from('.top-grid div, .bottom-grid div', {
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
    stagger: 0.04
   }, '-=0.5')
    
  })
 
  return (
    <section id="about">
        <div className="mb-16 md:px-5 px-0">
            <div className="content">
                <div className="md:col-span-8">
                    <div className="mb-16 md:px-0 px-2">
                        <p className="badge">Best Cocktails</p>
                        <h2>Where every detail matters<span className="text-white">-</span>from muddle to garnish</h2>
                    </div>
                </div>
                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                    <div>
                        <p className="md:text-3xl text-xl font-bold">
                            <span>4.5</span>/5
                        </p>
                        <p className="text-sm text-white-100">More than +12000 customers</p>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="top-grid">
            <div className="md:col-span-3">
                <div className="noisy"/>
                <img src="/images/abt1.png" alt="cocktail image"/>
            </div>
            <div className="md:col-span-3">
                <div className="noisy"/>
                <img src="/images/abt2.png" alt="cocktail image"/>
            </div>
            <div className="md:col-span-6">
                <div className="noisy"/>
                <img src="/images/abt5.png" alt="cocktail image"/>
            </div>
        </div>
        <div className="bottom-grid">
            <div className="md:col-span-9">
                <div className="noisy"/>
                <img src="/images/abt3.png" alt="cocktail image"/>
            </div>
            <div className="md:col-span-3">
                <div className="noisy"/>
                <img src="/images/abt4.png" alt="cocktail image"/>
            </div>
        </div>
    </section>
  )
}

export default About