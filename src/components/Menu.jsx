import { useState } from "react"
import { sliderLists } from "../../constants";

const Menu = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const totalSize = sliderLists.length;

  const goToSlide = index => setCurrentIndex((index + totalSize) % totalSize);

  const getCocktail = offset => sliderLists[(currenIndex + offset + totalSize) % totalSize];

  const currentCocktail = getCocktail(0);
  const prevCocktail = getCocktail(-1);
  const nextCocktail = getCocktail(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="slider left leaf" id="m-left-leaf"/>
      <img src="/images/slider-right-leaf.png" alt="slider right leaf" id="m-right-leaf"/>

      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="cocktail navigation">
        {
          sliderLists.map((cocktail, index) => {
            const isActive = index == currenIndex;

            return (
              <button className={isActive ? 'text-white border-bottom-white' : 'text-white/50 border-bottom-white/50'} onClick={() => goToSlide(index)}>{cocktail.name}</button>
            )
          })
        }
      </nav>
    </section>
  )
}

export default Menu