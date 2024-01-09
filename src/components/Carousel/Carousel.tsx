import { KrisaFromDb } from "../../types";
import CarouselStyled from "./CarouselStyled";
import KrisaCard from "../KrisaCard/KrisaCard";
import { useEffect, useRef } from "react";

interface CarouselProps {
  krisas: KrisaFromDb[];
  rolling: boolean;
}

const Carousel = ({ krisas, rolling }: CarouselProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (rolling && listRef.current) {
      const winningCardPosition = krisas.length / 2; // Middle of the array
      const selectedElement = listRef.current.children[
        winningCardPosition
      ] as HTMLElement;
      const animationDuration = 6; // Slowed down animation
      listRef.current.style.transition = `transform ${animationDuration}s ease-out`;
      const offset = -selectedElement.offsetLeft;
      listRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [rolling, krisas.length]);

  return (
    <CarouselStyled className="carousel" rolling={rolling}>
      <div className="carousel__viewport">
        <ul className="carousel__list" ref={listRef}>
          {krisas.map((krisa, index) => (
            <KrisaCard key={`${krisa._id}-${index}`} krisa={krisa} />
          ))}
        </ul>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
