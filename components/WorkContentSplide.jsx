"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef } from "react";
/* MUI */
import { Box } from "@mui/material";
/* Next */
import Image from "next/image";

// export default function WorkContent({ work }) {
//   return (
//     <div>
//       <Splide
//         options={{
//           type: "slide",
//           rewind: false,
//           arrows: true,
//           pagination: false,
//           fixedWidth: 800,
//           fixedHeight: 600,
//           cover: true,
//           focus: "center",
//           breakpoints: {
//             600: {
//               fixedWidth: 60,
//               fixedHeight: 4,
//             },
//           },
//         }}
//       >
//         {work.works.map((w, index) => {
//           return (
//             <SplideSlide key={index}>
//               <img src={w.src} alt={w.alt} />
//             </SplideSlide>
//           );
//         })}
//       </Splide>
//       {/* <section
//         id="thumbnail-carousel"
//         className="splide"
//         aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
//       >
//         <div className="splide__track">
//           <ul className="splide__list">
//             {work.works.map((w, index) => {
//               return (
//                 <li className="splide__slide" key={index}>
//                   <img
//                     src={w.src}
//                     alt=""
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </section> */}
//     </div>
//   );
// }

export default function WorkContent({ work }) {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlidesMain = () => {
    return work.works.map((w) => (
      <SplideSlide key={w.src}>
        {/* <div className="splide__slide__container"> */}
        <Box
          key={w.index}
          sx={{
            textAlign: "center",
            mb: { xs: "0dvh", sm: "0.5dvh" },
            height: "68dvh",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              sx={{
                height: "100%",
                ml: "auto",
                mr: "auto",
                position: "relative",
                width: { xs: "max-content", sm: "max-content" },
              }}
            >
              {/* <img src={w.src} alt={w.alt} /> */}
              <Image
                src={w.src}
                width={0}
                height={0}
                alt="Picture of the artwork"
                style={{
                  width: "auto",
                  maxWidth: "100%",
                  height: "100%",
                  maxHeight: "49dvh",
                }}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={true}
              />
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: { xs: 16, sm: 18 },
                  fontFamily: "baskerville-display-pt",
                  color: "#fff",
                }}
                pb={1}
                mt={{ xs: 1, sm: 2 }}
              >
                {w.title}
              </Box>
              {w.info2 ? (
                <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.info2}</Box>
              ) : null}
              <Box
                sx={{ fontSize: { xs: 12, sm: 14 } }}
                dangerouslySetInnerHTML={{ __html: w.info }}
              ></Box>

              <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.year}</Box>
              <Box sx={{ fontSize: { xs: 12, sm: 14 } }}>{w.size}</Box>
            </Box>
            {/* </div> */}
          </Box>
        </Box>
      </SplideSlide>
    ));
  };

  const renderSlides = () => {
    return work.works.map((slide) => (
      <SplideSlide key={slide.src}>
        {/* <img src={slide.src} alt={slide.alt} /> */}
        <Image
          src={slide.src}
          width={0}
          height={0}
          alt="Picture of the artwork"
          style={{
            width: "auto",
            maxWidth: "100%",
            height: "100%",
            // maxHeight: "49dvh",
          }}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority={true}
        />
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: "fade",
    speed: 0,
    rewind: false,
    pagination: false,
    arrows: false,
    // height: "30dvh",
    // fixedHeight: "30dvh",
    // autoHeight: true,
  };

  const thumbsOptions = {
    type: "slide",
    rewind: false,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    isNavigation: true,
    slideFocus: false,
    autoWidth: true,
    snap: false,
  };

  return (
    <Box pt={{ xs: 12, sm: 17 }} pl={{ xs: 0, sm: 0 }} pr={{ xs: 0, sm: 0 }}>
      <div className="wrapper">
        <Box sx={{ mt: 0 }}>
          <Splide
            options={mainOptions}
            ref={mainRef}
            aria-labelledby="thumbnail-slider"
          >
            {renderSlidesMain()}
          </Splide>
        </Box>
        <Box
          sx={{
            mt: 0,
            width: "100vw",
            overflow: "hidden",
            ml: "auto",
            mr: "auto",
          }}
        >
          <Splide
            id="thumbnail-slider"
            options={thumbsOptions}
            ref={thumbsRef}
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
          >
            {renderSlides()}
          </Splide>
        </Box>
      </div>
    </Box>
  );
}
