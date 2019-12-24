import React from "react";
import styled from "styled-components";
import RBCarousel from "react-bootstrap-carousel";

export default function Hero({ slides }) {
  return (
    <HeroContainer className="col-12">
      <RBCarousel
        animation={true}
        autoplay={true}
        slidesshowSpeed={1500}
        defaultActiveIndex={0}
        version={4}
      >
        {slides.map((slide, i) => {
          return (
            <div key={i} style={{ height: "70vh" }}>
              <img
                src={`/${slide.img}`}
                alt="background"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="carousel-center text-center hero-info">
                <h1 className="text-uppercase">{slide.center.h1 || ""}</h1>
                <h4 className="text-muted">{slide.center.h4 || ""}</h4>
                {slide.center.btn ? (
                  <button className="btn btn-success mt-4">
                    {slide.center.btn.text}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </RBCarousel>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  max-height: 80vh !important;
  padding: 0;
  max-width: 100%;
  .hero-info {
    background: rgba(255, 255, 255, 0.75);
    padding: 2rem;
    border-radius: 10px;
    max-width: 100%;
    h1 {
      font-size: 3rem;
      letter-spacing: 0.5rem;
    }
  }
`;
