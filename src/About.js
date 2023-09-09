import Dough from "./img/dough.png";
import Cake from "./img/macaroncake.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src={Dough} alt="banner" width="100%" />
        <div className="text">
          <p id="title-text">ABOUT FIBI'S</p>
          <p id="desc">Founded in 2023</p>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <img id="cake" src={Cake} alt="cake" />
          <div className="text-content">
            <p>
              Welcome to Fibi's Sweets, where passion meets pastry! Our journey
              began with a simple love for baking, and today, we are delighted
              to share our delectable creations with you. Nestled in the heart
              of Houston, Fibi's Sweets is not just a bakery; it's a haven for
              all things sweet and savory. Our dedicated team of bakers and
              confectioners pour their hearts into every delightful treat we
              create, from scrumptious cupcakes and mouthwatering cookies to
              artisanal bread and custom-designed cakes that celebrate life's
              special moments. Quality ingredients, an unwavering commitment to
              craftsmanship, and a dash of creativity are the secret ingredients
              that make Fibi's Sweets a destination for those seeking an
              unforgettable taste experience. We invite you to explore our world
              of flavors and make us a part of your sweet memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
