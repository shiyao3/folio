import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="buttons padd-15">
              <a
                href="/assets/docs/resume.pdf"
                target="_target"
                className="btn"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Professional</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> November 2024 - Present
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">AI/ML for RF Engineering</h5>
                          <ul className="timeline-text">
                            <li>
                              Deep learning models for hardware design, performance optimizations, instrumentation accuracy, and manufacturing.
                            </li><li>  
                              Develop and deploy models for manufacturing to predict hardware performance, increase efficiency and measurement accuracy.
                            </li><li>
                              Lead data infrastructure engineers, architect data pipeline solutions for automated telemetry, model generation, evaluation.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2022 - November 2024
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">AI/ML/SW Engineer</h5>
                          <ul className="timeline-text">
                            <li>
                              Established the foundations of AI/ML for RF engineering, developed and deployed the first model for RF hardware engineering.
                            </li><li>  
                              Architect cloud infrastructure solutions, lead and manage cloud infrastructure engineering team, manage outage response.
                            </li><li>
                              Oversee software projects from design to deployment, provide guidance and oversight for engineering initiatives.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> June 2017 - March 2022
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">RF System and Software Engineer</h5>
                          <ul className="timeline-text">
                            <li>
                              Develop automated testing and calibration algorithms for RF systems. Debug baseband, antenna, RF and EE hardware issues.
                            </li><li>
                              Provide system-level expertise for design and product development, instrumentation, testing, and calibration solutions.
                            </li><li>
                              Develop and manage cloud infrastructure critical to product development, engineering, manufacturing.
                            </li><li>
                              Deployment and debug in manufacturing/factory environments, managing cross-functional, manufacturing/factory operations.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2016 - December 2016
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">
                            RF Cellular Test & Automation Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Develop test application to automate CMW500 for testing cellular technologies (LTE, GSM, UMTS).
                            </li><li>
                              Work with RF engineers to develop cellular tests from 3GPP and system requirements, correlation studies between solutions.
                            </li><li>
                              Work with contract manufacturers to validate and deploy RF test solution in production environments.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2015 - December 2015
                          </h6>
                          <h4 className="timeline-title">ON Semiconductor</h4>
                          <h5 className="timeline-text">
                            DSP Firmware and Algorithm Development (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Develop milti-core DSP audio encoding/compression (G.722, CVSD), custom codecs to increase compression, retaining quality.
                            </li><li>
                              Evaluate codec performance, develop firmware tests, fixes for reliability and security. Optimize assembly and C code.
                            </li><li>
                              Develop algorithms for memory management to optimize usage and read/write, data transfer speed.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> January 2015 - May 2015
                          </h6>
                          <h4 className="timeline-title">
                            Department of National Defence
                          </h4>
                          <h5 className="timeline-text">
                            Defence Research & Technical Lead (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                          <li>
                            Design and develop high performance and versatility simulator for sensor data fusion research in intelligence aircraft (ISR).
                          </li><li>
                            Develop algorithms to track targets, identify/assess threats, predict trajectory, conforming to NATO military standards.
                          </li><li>
                            Engage with defence companies, foreign engineers/scientists, military to cultivate future research opportunities.
                          </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2014 - August 2014
                          </h6>
                          <h4 className="timeline-title">Symantec</h4>
                          <h5 className="timeline-text">
                            Network Security Software Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Developed tests, fix bugs for access and content control, encryption, security vulnerabilities and exploits, system crashes.
                            </li><li>
                              Created comprehensive automated and manual tests and plans based on future project road map.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2013 - December 2013
                          </h6>
                          <h4 className="timeline-title">Siemens</h4>
                          <h5 className="timeline-text">
                            Network Hardware/Firmware Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Generate, analyze packets to debug complex computer networks. Develop and test recovery systems and solutions (PRP, HSR).
                            </li><li>
                              Implemented and tested high precision clock synchronization, contributing to IEEE 1588 Precision Time Protocol (PTP).
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> January 2013 - April 2013
                          </h6>
                          <h4 className="timeline-title">Siemens</h4>
                          <h5 className="timeline-text">
                            Network Software Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Develop automated tests, fix network security and reliability bugs, develop libraries for IETF protocols.
                            </li><li>
                              Back-end server and in-house tools development for automating calculations and documentation.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Academia</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022
                          </h6>
                          <h4 className="timeline-title">
                            Private Pilot Certification
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-plane" /> 14 CFR Part 61
                          </h5>
                          <p className="timeline-text">
                            Specialized in airplane, single-engine, land (ASEL).
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">
                            University of Illinois Urbana-Champaign
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-graduation-cap" /> Computer
                            Science and Data Science (Master&apos;s Degree)
                          </h5>
                          <ul className="timeline-text">
                            <li>Deep learning</li>
                            <li>Statistical learning</li>
                            <li>Natural language processing</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2017
                          </h6>
                          <h4 className="timeline-title">
                            University of Waterloo
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-graduation-cap" /> Electrical
                            and Computer Engineering (Bachelor&apos;s Degree)
                          </h5>
                          <ul className="timeline-text">
                            <li>RF and wireless systems</li>
                            <li>Computer architecture</li>
                            <li>Integrated circuits</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016
                          </h6>
                          <h4 className="timeline-title">
                            University of Waterloo
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-flask" /> Electrical and
                            Computer Engineering (Research)
                          </h5>
                          <p className="timeline-text">
                            Memory Coherency and Approximate Caching.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016
                          </h6>
                          <h4 className="timeline-title">
                            University of Waterloo
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-flask" /> Electrical and
                            Computer Engineering (Research)
                          </h5>
                          <p className="timeline-text">
                            Effects of Haptic Feedback in Virtual Reality.{" "}
                            <a
                              className="fa fa-link"
                              href="https://link.springer.com/content/pdf/10.1007/978-3-319-40244-4_22.pdf"
                              target="_blank"
                            ></a>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2015
                          </h6>
                          <h4 className="timeline-title">
                            Department of National Defence
                          </h4>
                          <h5 className="timeline-text">
                            <i className="fa fa-flask" /> Defence Research and
                            Development Canada (Research)
                          </h5>
                          <p className="timeline-text">
                            Data and Sensor Fusion for ISR Systems.{" "}
                            <a
                              className="fa fa-link"
                              href="https://cradpdf.drdc-rddc.gc.ca/PDFS/unc339/p810380_A1b.pdf"
                              target="_blank"
                            ></a>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
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

export default Service;
