// import { Analytics } from "../components/Analytics.jsx";
import { SocialIcon } from 'react-social-icons'
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Welcome to @ StartupX</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At StartupX,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="error__button">connect now</button>
                </a>
                {/* <a href="/services">
                  <button className="error__button secondary-btn">learn more</button>
                </a> */}
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="../../public/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

     
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
          <SocialIcon network="github" url="https://github.com/2103323" />
          <p>
            GitHub
          </p>
          </div>
          <div className="div1">
          <SocialIcon network="linkedin" url="https://github.com/2103323" />
          <p>
            LinkedIn
          </p>
          </div>
          <div className="div1">
          <SocialIcon network="sharethis" url="https://2103323.github.io/Profile-Suyash/" />
          <p>
            My Profile
          </p>
          </div>
          <div className="div1">
          <SocialIcon network="leetcode" url="https://leetcode.com/u/suyash_jadaun/" />
          <p>
            Leetcode
          </p>
          </div>
        </div>
      </section>


      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src='../../public/design.png'
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how StartupX can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="error__button">connect now</button>
              </a>
              {/* <a href="/service">
                <button className="error__button secondary-btn">learn more</button>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};