import { KrisaFromDb } from "../../types";
import CarouselStyled from "./CarouselStyled";
import KrisaCard from "../KrisaCard/KrisaCard";
import { useEffect, useRef } from "react";

interface CarouselProps {
  krisas: KrisaFromDb[];
  rolling: boolean;
  selectedIndex: number | null;
}

const Carousel = ({ krisas, rolling, selectedIndex }: CarouselProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (rolling && selectedIndex !== null && listRef.current) {
      const selectedElement = listRef.current.children[
        selectedIndex
      ] as HTMLElement;
      const offset = selectedElement.offsetLeft;
      const carouselWidth = listRef.current.offsetWidth;

      // Calculate the position to end the animation
      const endPosition =
        -offset + carouselWidth / 2 - selectedElement.offsetWidth / 2;
      listRef.current.style.animation = `rollToSelected 5s ease-out forwards`;

      // Create a keyframe animation dynamically
      const keyframes = `
      @keyframes rollToSelected {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(${endPosition}px);
        }
      }
    `;

      // Append the keyframes to the document
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);
    }
  }, [rolling, selectedIndex]);

  return (
    <CarouselStyled className="carousel" rolling={rolling}>
      <div className="carousel__viewport">
        <ul className="carousel__list" ref={listRef}>
          {krisas.map((krisa) => (
            <KrisaCard key={krisa._id} krisa={krisa} />
          ))}
        </ul>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
