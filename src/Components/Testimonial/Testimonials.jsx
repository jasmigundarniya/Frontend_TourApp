import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/pic-1.png";
import ava02 from "../../assets/images/pic-2.png";
import ava03 from "../../assets/images/pic-3.png";
import ava04 from "../../assets/images/pic-4.png";
import ava05 from "../../assets/images/pic-5.jpg";
import ava06 from "../../assets/images/pic-6.jpg";

function Testinomials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I was visiting Turkey for the first time in May and had no idea how to
          get to the places around turkey that I wanted to see so this company
          made a customer tour just for me! I was able to cut out all the hassle
          of trying to arrange everything myself.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Juhil Godhani</h6>
            <p>customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          After reading positive feedback on Tripadvisor we arranged from the
          Netherlands a four day trip to the riceterraces of Banaue. All settled
          and paid before the trip. Very good experience with one of their
          drivers/guides who accompanied us during the 4 days.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mansi Sangani</h6>
            <p>customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Very good tour. All hotels were great, a couple were superb 5 star.
          Breakfasts and lunches were great. Highly organised, punctual,
          friendly and knowledgeable tour guides. Turkey is a beautiful country
          with some extraordinary sights and we felt safe at all times.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Harsh Nariya</h6>
            <p>customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I went there with my friends, it was awesome trip. I went manywhere
          across india but did not get too much enjoyment which i get through
          this trip. The tourism company and there manager is awesome. Thanks a
          lot trivago to give me a splendid experience in my life.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Jasmi Gundarniya</h6>
            <p>customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          The best place to be for young and old. Very nice surroundings and
          atmosphere. The experience is unique, everything you taste is new. We
          really enjoyed our time here. Love all the attractions and rides. It's
          an Amazing experience.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Dhruvi Narola</h6>
            <p>customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          It was a wonderful experience for us. All your arrangements were up to
          the mark. All hotels and transportation arrangements were excellent.
          Thanks for your support and prompt response. We look forward to
          collaborating with you in future.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava06} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Tanisha Patel</h6>
            <p>customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
export default Testinomials;
