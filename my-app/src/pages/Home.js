import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import ServicesTitle from "../components/ServicesTitle";
import Author from "../components/Author";
import Autobiography from "../components/Autobiography";
import ImagesGallery from "../components/ImagesGallery";
import BookPromotion from "../components/BookPromotion";
import Client from "../components/Client";
import homeImg from "../images/home.jpg";

export default function Home() {
  return (
    <>
      <Hero>
        <img src={homeImg} alt="shop list image" />
        <Title
          subtitle="It's chapterone"
          title="Your world of words"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna"
        >
          <Link to="/" className="btn-primary">
            read more
          </Link>
        </Title>
      </Hero>
      <FeaturedProducts />
      <Services />
      <ServicesTitle />
      <Author />
      <Autobiography />
      <ImagesGallery />
      <BookPromotion />
      <Client />
    </>
  );
}
