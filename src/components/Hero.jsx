import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({maxWidth: 767});
  const start = isMobile ? 'top 50%' : 'center 60%';
  const end = isMobile ? '120% top' : 'bottom top';

  useGSAP(() => {
    const heroTitle = new SplitText('.title', {
      type: 'chars, words'
    });
    const paragraphs = new SplitText('.subtitle', {
      type: 'lines'
    });

    heroTitle.chars.forEach(char => char.classList.add('text-gradient'));

    gsap.from(heroTitle.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    });

    gsap.from(paragraphs.lines, {
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      yPercent: 100,
      stagger: 0.06,
      delay: 1
    });

    const leavesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    leavesTimeline.to('.left-leaf', {y: -200}, 0),
    leavesTimeline.to('.right-leaf', {y: 200}, 0);
  });

  return (
    <>
        <section id="hero" className="noisy">
          <h1 className="title">Esocktail</h1>
          <img
            src="/images/hero-left-leaf.png"
            alt="left-leaf"
            className="left-leaf" 
          />
          <img
            src="/images/hero-right-leaf.png"
            alt="right-leaf"
            className="right-leaf" 
          />
          
          <div className="body">
            <div className="content">
              <div className="space-y-5 hidden md:block">
                <p>Cool.Crisp.Classic</p>
                <p className="subtitle">Sip the Spirit <br /> of Summer</p>
              </div>
              <div className="view-cocktails text-center md:text-left">
                <p className="subtitle text-center md:text-left">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                <a href="#cocktails">View Cocktails</a>
              </div>
            </div>
          </div>
        </section>
        <div className="video absolute inset-0">
          <video
            src="/videos/input.mp4"
            muted
            playsInline
            preload="auto" 
            ref={videoRef}
          />
        </div>
    </>
  )
}

export default Hero