import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src="/imgs/portfolio/movie-recommender.png"
                    alt="Movie Recommendation"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Movie Recommendation Web App</h4>
                  <h5>
                    Provide movie recommendations based on user preferences by
                    using user-based and item-based collaborative filtering.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-link"
                      href="https://shiyao3.shinyapps.io/shinyapp/"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src="https://avatars.githubusercontent.com/u/88361827"
                    alt="SurvTRACE"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Survival Prediction Using Transformers</h4>
                  <h5>
                    Reproduction and analysis of the BERT-based SurvTRACE model
                    for survival prediction.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-github"
                      href="https://github.com/shiyao3/DLHC-SurvTRACE"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"
                    alt="Intelligent Webpage Link Search"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Intelligent Webpage Link Search</h4>
                  <h5>
                    Chrome extension that uses information retrieval algorithms
                    to scrape and rank links on a webpage by relevance based on
                    a search term.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-github"
                      href="https://github.com/shiyao3/BrowserExtension"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src="https://s3.amazonaws.com/files.open.nasa.gov/spaceapps/media/6b6fad36-8c44-4568-8a2b-290062cbdc4e.png"
                    alt="ACTR"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Asteroid Composition Through Reflectance (ACTR)</h4>
                  <h5>
                    Determine the metal composition of asteroids for space
                    mining by analyzing the spectrum of reflected light as it
                    passes by a star.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-link"
                      href="https://2016.spaceappschallenge.org/challenges/solar-system/asteroid-mining/projects/actr-asteroid-composition-through-reflectance"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/370/898/datas/original.png"
                    alt="MyOrchestra"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>MyOrchestra</h4>
                  <h5>
                    Conduct a virtual orchestra by hand gestures and arm motion,
                    through the use of sensors that detect neural impulses,
                    acceleration, and gyroscopes.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-link"
                      href="https://devpost.com/software/myorchestra-yxl37m/"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/warg.png" />
                </div>
                <div className="portfolio-info">
                  <h4>Waterloo Aerial Robotics Group (WARG)</h4>
                  <h5>
                    Long-range drone for forest fire detection and
                    search-and-rescue missions. Designed and developed
                    electrical and software systems for control and navigation.
                  </h5>
                  <div className="icon">
                    <a
                      className="fa fa-plane"
                      href="https://www.uwarg.com/home/"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
