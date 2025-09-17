import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import { featureLists, goodLists } from "../../constants"
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#art',
            start,
            end: 'bottom center',
            scrub: 1.5,
            pin: true
        }
    });

    // Ensure scaling happens from center
    gsap.set('.masked-img', { transformOrigin: '50% 50%' });

    scrollTimeline.to('.will-fade', {
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power1.inOut'
    });

    scrollTimeline.to('.masked-img', {
        scale: 1.3,
        duration: 1,
        maskPosition: 'center',
        maskSize: '400%',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: '400%',
        ease: 'power1.inOut'
    });

    scrollTimeline.to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    });

    // Recalculate after layout/images load to avoid initial misalignment on desktop
    gsap.delayedCall(0.1, () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }, []);

  return (
    <div id="art">
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">The ART</h2>
            <div className="content">
                <ul className="space-y-4 will-fade">
                    {
                        goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check"/>
                                <p>{feature}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className="cocktail-img">
                    <img 
                        src="/images/under-img.jpg"
                        alt="cocktail"
                        className="abs-center masked-img size-full object-contain"
                    />
                </div>
                <ul className="space-y-4 will-fade">
                    {
                        featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 justify-start">
                                <img src="/images/check.png" alt="check"/>
                                <p>{feature}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="masked-container">
            <h2 className="will-fade">Sip-Worthy Perfection</h2>
            <div id="masked-content">
                <h2>Made with Craft, Poured with Passion</h2>
                <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
            </div>
        </div>
    </div>
  )
}

export default Art