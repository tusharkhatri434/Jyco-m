import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getImageLoadingProps } from "@/utils/imageOptimization";
interface SlideshowImage {
  src: string;
  alt: string;
}
interface ImageSlideshowProps {
  images: SlideshowImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}
const ImageSlideshow = ({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: ImageSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  if (images.length === 0) return null;
  return;
};
export default ImageSlideshow;
