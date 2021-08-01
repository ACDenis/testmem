import React from "react";
import s from "./Carousel.module.css";
import { connect } from "react-redux";
import img1 from "../../assets/main3.jpg";
import img2 from "../../assets/main2.png";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = require("react-responsive-carousel").Carousel;

const CarouselComponent = (props) => {
  return (
    <div className={s.main_wrapper}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="err" className={s.carousel} />
        </div>
        <div>
          <img src={img2} alt="err" className={s.carousel} />
        </div>
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComponent);
