import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex +1) % 2 )
  }
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 2) % 2)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return ( 
    <div className='homepage'>
        <div className={`slide ${slideIndex === 0 ? 'zoom-in' : ''}`}>
          <img src="/images/hom3.jpg" alt="food" />
          <article>
          <h1>Celebrate</h1>
          <h2>LOCAL & SEASONAL FOOD</h2>
          </article>
        </div>
        <div className={`slide ${slideIndex === 1 ? 'zoom-in' : ''}`}>
          <img src="/images/home4.jpg" alt="food" />
          <section>
          <h1>Tast the difference</h1>
          <h2>Fine & Deliciouse Food</h2>
          </section>
        </div>
        <i class="fa-solid fa-chevron-left prev" onClick={prevSlide}></i>
      <i class="fa-solid fa-chevron-right next" onClick={nextSlide}></i>
    </div>
  )
}

export default HomePage