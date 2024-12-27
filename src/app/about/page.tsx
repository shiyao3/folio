import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    AI/ML, Software, Hardware <span>Engineer</span>
                  </h2>
                  <p>
                    My first degree is in electrical engineering from the
                    University of Waterloo. Throughout my academic career, I was
                    heavily involved in research, projects, engineering teams,
                    and co-op/internships. During my first job, I acquired my
                    degree in computer science and data science from the
                    University of Illinois Urbana-Champaign. I have worked with
                    many people from many backgrounds, and always looking for
                    new opportunities!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <h3>AI/ML Expertise</h3>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>Deep Learning Models</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Transformers</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Hyperparameter Search</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Distributed Training</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>PyTorch</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>SciKit-Learn</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>AutoGluon</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <h3>Languages and Tools</h3>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>Python</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>C/C++</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Swift</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Java</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>R / Matlab</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Kubernetes</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Postgres / SQL</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Redis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <h3>Cloud / Web</h3>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>AWS S3</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>AWS Lambda</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>AWS DynamoDB</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>AWS EC2</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>AWS EKS / Kubernetes</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Apache Hadoop / HDFS</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Apache Spark</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Flask</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <h3>Technical Skills</h3>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>Automation</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Instrumentation</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>System Design/Integration</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Testing / Calibration</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Data Analysis</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Factory Operations</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>NPI / Mass Production</p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Project Management</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {/* <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download My Resume
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
