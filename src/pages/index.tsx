import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import product1 from '@/assets/product-1.png';
import product2 from '@/assets/product-2.png';
import product3 from '@/assets/product-3.png';
import product4 from '@/assets/product-4.png';

import { HomeContainer, Product } from '@/styles/pages/home';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <HomeContainer className="keen-slider" ref={sliderRef}>
      <Product className="keen-slider__slide">
        <Image src={product1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta A</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={product2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta B</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={product3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta C</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={product4} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta D</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
