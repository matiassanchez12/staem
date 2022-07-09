import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { GameType } from "../../../types/staem.types";
import { Fade, Link, useDisclosure } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";

interface Props {
  games: Array<GameType>;
  screen: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};

const Presentation: React.FC<Props> = (props) => {
  const { games, screen } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const refcarro = React.useRef(null);
  const firstSlidesActive = refcarro.current?.listRef?.current?.childNodes;

  React.useEffect(() => {
    if (firstSlidesActive && (screen === "tablet" || screen === "mobile")) {
      firstSlidesActive.item(2).setAttribute("class", "image-item active-slide-responsive");
    }

    if (firstSlidesActive) {
      firstSlidesActive
        .item(5)
        .setAttribute("class", "react-multi-carousel-item react-multi-carousel-item--active image-item image-start");
      firstSlidesActive.item(6).setAttribute("class", "active-slide");
      firstSlidesActive
        .item(7)
        .setAttribute("class", "react-multi-carousel-item react-multi-carousel-item--active image-item image-end");
      onOpen();
    }
  }, [firstSlidesActive]);

  React.useEffect(() => {
    const slides = document.querySelectorAll('li[aria-hidden="false"]');

    if (slides.length === 1) {
      slides[0].setAttribute("class", "image-item active-slide-responsive");
    }

    if (slides.length > 2) {
      slides[0].classList.remove("active-slide");
      slides[0].setAttribute("class", "react-multi-carousel-item react-multi-carousel-item--active image-item image-start");
      slides[1].setAttribute("class", "active-slide");
      slides[2].classList.remove("active-slide");
      slides[2].setAttribute("class", "react-multi-carousel-item react-multi-carousel-item--active image-item image-end");
    }
  }, [currentSlide]);

  return (
    <Carousel
      showDots
      ssr
      infinite
      ref={refcarro}
      partialVisible={true}
      minimumTouchDrag={20}
      autoPlay
      autoPlaySpeed={6000}
      containerClass="container-carousel"
      dotListClass="custom-dot-list-style"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      deviceType={screen}
      sliderClass="slider"
      itemClass="image-item"
      responsive={responsive}
      beforeChange={(next, state) => onClose()}
      afterChange={(prev, state) => {
        setCurrentSlide(state.currentSlide);
        onOpen();
      }}
    >
      {games.slice(0, 5).map((item, index) => {
        return (
          <div key={index} style={{ width: 550, height: 200 }}>
            <Fade in={isOpen}>
              <Link href={item.link} target="_blank" draggable={false}>
                <Image
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  width={350}
                  height={200}
                  objectFit="fill"
                  objectPosition="center"
                />
              </Link>
            </Fade>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Presentation;
