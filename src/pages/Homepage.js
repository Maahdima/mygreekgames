/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import "../main.css";
import logoImg from "../img/mygreekgameslogo.png";
import { ReactComponent as SearchIcon } from "../img/Icon-search.svg";
import { ReactComponent as LoveIcon } from "../img/Icon-love.svg";
import { ReactComponent as ShopIcon } from "../img/Icon-shop.svg";
import { ReactComponent as PersonIcon } from "../img/Icon-person.svg";
import { ReactComponent as InstaIcon } from "../img/Icon-insta.svg";
import { ReactComponent as FacebookIcon } from "../img/Icon-facebook.svg";
import { ReactComponent as YoutubeIcon } from "../img/Icon-youtube.svg";
import search from "../img/Icon-search.svg";
import banner from "../img/Banner.jpg";
import banner2 from "../img/Banner2.jpg";
import banner3 from "../img/Banner3.jpg";
import banner4 from "../img/Banner4.jpg";
import feature1 from "../img/Feature1.jpg";
import feature2 from "../img/Feature2.jpg";
import outline1 from "../img/outline.png";
import story1 from "../img/Story1.jpg";
import story2 from "../img/Story2.jpg";
import story3 from "../img/Story3.jpg";
import story4 from "../img/Story4.jpg";
import story5 from "../img/Story5.jpg";
import story6 from "../img/Story6.jpg";
import hero1 from "../img/Hero1.jpg";
import set1 from "../img/Set1.png";
import set2 from "../img/Set2.png";
import set3 from "../img/Set3.png";
import check1 from "../img/Check1.webp";
import check2 from "../img/Check2.webp";
import check3 from "../img/Check3.webp";
import check4 from "../img/Check4.webp";
import check5 from "../img/Check5.webp";
import check6 from "../img/Check6.webp";
import check7 from "../img/Check7.webp";
import awards1 from "../img/Awards1.png";
import awards2 from "../img/Awards2.png";
import awards3 from "../img/Awards3.png";
import awards4 from "../img/Awards4.png";
import awards5 from "../img/Awards5.png";
import awards6 from "../img/Awards6.png";
import awards7 from "../img/Awards7.jpg";
import payments from "../img/payments.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function Homepage() {
  const [shopHoverState, setShopHoverState] = useState(false);

  return (
    <div className="container">
      <div className="header-1">
        <h2 className="header-1-text">We ship worldwide</h2>
      </div>
      <header className="header-2">
        <div className="header-2-left">
          <img
            className="header-2-left-logo"
            src={logoImg}
            alt="geek for gamers logo"
          />
          <a
            onClick={() => setShopHoverState(!shopHoverState)}
            class="header-2-left-category"
            href="#"
          >
            shop
          </a>
          <a className="header-2-left-category" href="#">
            our world
          </a>
          <a className="header-2-left-category" href="#">
            gods & heroes
          </a>
        </div>
        <div class="header-2-right">
          <SearchIcon className="header-2-right-searchlogo" />
          <LoveIcon className="header-2-right-lovelogo" />
          <ShopIcon className="header-2-right-shoplogo" />
          <PersonIcon className="header-2-right-personlogo" />
          <a className="header-2-right-lang" href="#">
            EN
          </a>
        </div>
      </header>
      {shopHoverState && (
        <div className="header-2-left-category-div">salaaaaaaaaaaaaam</div>
      )}

      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        speed={700}
        className="mySwiper-1"
      >
        <SwiperSlide>
          <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="feature-1">
        <div className="feature-1-description">
          <h1 className="feature-1-description-white">The Maturity</h1>
          <h1 className="feature-1-description-blue">of being a child</h1>
          <div className="feature-1-description-container">
            <h4 className="feature-1-description-container-text">
              MyGreekGames is a series of products that entertain children of
              all ages and at the same time, provide knowledge on Greek
              mythology and history, with an artistic twist.
            </h4>
            <button className="feature-1-description-container-button">
              Read our story
            </button>
          </div>
          <div className="feature-1-description-logo">
            <img
              className="feature-1-description-logo-image"
              src={outline1}
              alt=""
            />
          </div>
        </div>
        <div className="feature-1-container">
          <img className="feature-1-container-image" src={feature1} alt="" />
        </div>
      </div>

      <div className="feature-2">
        <div className="feature-2-description">
          <h1 className="feature-2-description-white">More than just games</h1>
          <div className="feature-2-description-container">
            <h4 className="feature-2-description-container-text">
              Board games, puzzles, posters, t-shirts, paper crafts, are just a
              few of the products that our small company provides. Products with
              an aesthetic outcome that provokes and stimulates the eye, but at
              the same time gives a sense of familiarity, acceptance and
              balance, through the simple way that this visual is presented
            </h4>
            <button className="feature-2-description-container-button">
              See our products
            </button>
          </div>
        </div>
        <div className="feature-2-container">
          <img className="feature-2-container-image" src={feature2} alt="" />
        </div>
      </div>

      <div className="story-1">
        <div className="story-1-description">
          <div className="strory-1-description-title">
            <h1 className="story-1-description-title-1">
              Inspired by Ancient Gods
            </h1>
            <h1 className="story-1-description-title-2">
              Played by Modern Heroes
            </h1>
          </div>
          <div className="story-1-description-container">
            <h2 className="story-1-description-container-text">
              Products focus on entertaining, teaching and bonding kids and
              families around the world.
            </h2>
            <button className="story-1-description-container-button">
              Shop now
            </button>
          </div>
        </div>
        <div className="story-1-image">
          <img className="story-1-image-1" src={story1} alt="" />
        </div>
      </div>

      <div className="story-2">
        <div className="story-2-description">
          <div className="strory-2-description-title">
            <h1 className="story-2-description-title-1">
              Our world is closer than you
            </h1>
            <h1 className="story-2-description-title-2">think!</h1>
          </div>
          <div className="story-2-description-container">
            <h2 className="story-2-description-container-text">
              No need to travel the world to find us! Check our map of partners
              and find a store near you.
            </h2>
            <button className="story-2-description-container-button">
              Store locator
            </button>
          </div>
        </div>
        <div className="story-2-image">
          <img className="story-2-image-1" src={story2} alt="" />
        </div>
      </div>

      <div className="story-3">
        <div className="story-3-description">
          <div className="strory-3-description-title">
            <h1 className="story-3-description-title-1">
              We create your world!
            </h1>
          </div>
          <div className="story-3-description-container">
            <h2 className="story-3-description-container-text">
              Board games, concept ideas, stories or anything else you and your
              company might want, our team of expertise will work with you on
              creating a product you are dreaming of.
            </h2>
            <button className="story-3-description-container-button">
              Contact us
            </button>
          </div>
        </div>
        <div className="story-3-image">
          <img className="story-3-image-1" src={story3} alt="" />
        </div>
      </div>

      <div className="story-4">
        <div className="story-4-description">
          <div className="strory-4-description-title">
            <h1 className="story-4-description-title-1">
              Always want to learn
            </h1>
            <h1 className="story-4-description-title-2">more!</h1>
          </div>
          <div className="story-4-description-container">
            <h2 className="story-4-description-container-text">
              Get all the stories and infos about all the Gods and Heroes of our
              games
            </h2>
            <button className="story-4-description-container-button">
              Check the list
            </button>
          </div>
        </div>
        <div className="story-4-image">
          <img className="story-4-image-1" src={story4} alt="" />
        </div>
      </div>

      <div className="story-5">
        <div className="story-5-description">
          <div className="strory-5-description-title">
            <h1 className="story-5-description-title-1">
              We travel the world with you!
            </h1>
          </div>
          <div className="story-5-description-container">
            <h2 className="story-5-description-container-text">
              Our maps are more than a journey! Travel the world and collect
              memories that will last forever
            </h2>
            <button className="story-5-description-container-button">
              See our maps
            </button>
          </div>
        </div>
        <div className="story-5-image">
          <img className="story-5-image-1" src={story5} alt="" />
        </div>
      </div>

      <div className="hero">
        <div className="hero-container">
          <img className="hero-container-image" src={hero1} alt="" />
        </div>
        <div className="hero-text">
          <h1 className="hero-text-1">Follow us on</h1>
          <h1 className="hero-text-2">social media</h1>
          <h2 className="hero-text-3">
            Share your photos and ideas with the hashtags
          </h2>
          <h2 className="hero-text-4">#mygreekgames #mgg</h2>
        </div>
      </div>

      <div className="story-6">
        <div className="story-6-description">
          <div className="strory-6-description-title">
            <h1 className="story-6-description-title-1">
              Remember not to forget!
            </h1>
          </div>
          <div className="story-6-description-container">
            <h2 className="story-6-description-container-text">
              Sign up for our newsletter and be the first to know about all the
              latest from our fun world.
            </h2>
            <form className="story-6-description-container-form" action="">
              <input
                className="story-6-description-container-form-input"
                type="text"
                placeholder="Enter e-mail address"
              />
              <button
                className="story-6-description-container-form-button"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="story-6-image">
          <img className="story-6-image-1" src={story6} alt="" />
        </div>
      </div>

      <div className="set">
        <div className="set-1">
          <img className="set-1-image" src={set1} alt="" />
          <h1 className="set-1-title">
            We play with creativity, not with quality
          </h1>
          <h2 className="set-1-text">
            The best materials are chosen into making each component emphasise
            our effort in creating products that really stand out from the
            crowd.
          </h2>
        </div>
        <div className="set-2">
          <img className="set-2-image" src={set2} alt="" />
          <h1 className="set-2-title">We love learning through playing</h1>
          <h2 className="set-2-text">
            Our products focus on making playing and having fun part of gaining
            knowledge. Never before learning was so easy and entertaining.
          </h2>
        </div>
        <div className="set-3">
          <img className="set-3-image" src={set3} alt="" />
          <h1 className="set-3-title">
            We are part of nature, we respect nature
          </h1>
          <h2 className="set-3-text">
            As being part of nature we try our most to create products from
            eco-friendly and non toxic materials.
          </h2>
        </div>
      </div>

      <Swiper
        autoplay={{ delay: 6000 }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        speed={400}
        className="mySwiper-2"
      >
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check1} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                Two designers from Thessaloniki create your own Greek games.
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check2} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                Two young creators make the coolest Greek educational games
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check3} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                Efi Karagounis, Christos Papachristou: Founders of My Greek
                Games
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check1} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check4} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check5} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check7} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check7} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="check">
            <div className="check-container">
              <img className="check-container-image" src={check6} alt="" />
              <h4 className="check-container-date">17/05/2021</h4>
            </div>
            <div className="check-title">
              <a href="#" className="check-title-text">
                "MORIAS '21": 21 routes inspired by the Revolution in the
                Peloponnese
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="awards">
        <img className="awards-1" src={awards7} alt="" />
        <img className="awards-2" src={awards6} alt="" />
        <img className="awards-3" src={awards5} alt="" />
        <img className="awards-4" src={awards4} alt="" />
        <img className="awards-5" src={awards4} alt="" />
        <img className="awards-6" src={awards3} alt="" />
        <img className="awards-7" src={awards2} alt="" />
        <img className="awards-8" src={awards1} alt="" />
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top-1">
            <h1 className="footer-title">My account</h1>
            <h4 className="footer-title-text">Sign in</h4>
            <h4 className="footer-title-text">Create account</h4>
          </div>
          <div className="footer-top-2">
            <h1 className="footer-title">Info</h1>
            <h4 className="footer-title-text">Gift Certificate</h4>
            <h4 className="footer-title-text">Payment Methods</h4>
            <h4 className="footer-title-text">Returns & Changes</h4>
            <h4 className="footer-title-text">Cookies Policy</h4>
            <h4 className="footer-title-text">Privacy Policy</h4>
            <h4 className="footer-title-text">Terms & Conditions</h4>
          </div>
          <div className="footer-top-3">
            <h1 className="footer-title">Our company</h1>
            <h4 className="footer-title-text">Who we are</h4>
            <h4 className="footer-title-text">Contact Us</h4>
            <h4 className="footer-title-text">Store Locator</h4>
            <h4 className="footer-title-text">B2B</h4>
            <h4 className="footer-title-text">FAQ</h4>
          </div>
          <div className="footer-top-4">
            <h1 className="footer-title">Follow us</h1>
            <div className="footer-top-4-container">
              <FacebookIcon className="footer-top-4-container-facebook" />
              <InstaIcon className="footer-top-4-container-insta" />
              <YoutubeIcon className="footer-top-4-container-youtube" />
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="footer-bottom">
          <div className="footer-bottom-cr">
            © 2021 - 2022 MyGreekGames. Designed & Developed by momedia
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
