import { useEffect, useRef, useState } from "react";
import { GlobalStyles } from "../../styles/globalStyles";
import { motion } from "framer-motion";
import { Carousel, FlexImg, Img } from "./style";

import image1 from "../../../public/gallery/image-1.png";
import image2 from "../../../public/gallery/image-2.png";
import image3 from "../../../public/gallery/image-3.png";

const images = [image1, image2, image3];

export const Gallery = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Carousel ref={carousel}>
        <motion.div
          drag="x"
          whileTap={{ cursor: "grabbing" }}
          dragConstraints={{ right: 0, left: -width }}
        >
          <FlexImg>
            {images.map((image) => (
              <motion.div key={image}>
                <Img src={image} />
              </motion.div>
            ))}
          </FlexImg>
        </motion.div>
      </Carousel>
    </>
  );
};
