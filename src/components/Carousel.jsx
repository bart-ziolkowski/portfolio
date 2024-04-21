import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <CarouselCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  {
    url: "/assets/about.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "../assets/about.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default Carousel;
