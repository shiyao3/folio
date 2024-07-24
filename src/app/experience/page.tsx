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
                            <i className="fa fa-calendar" /> June 2017 - Present
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">RF System Engineer</h5>
                          <ul className="timeline-text">
                            <li>
                              AI/ML for instrumentation, radiation pattern
                              prediction, antenna performance prediction.
                            </li>
                            <li>
                              Design and develop software for test, calibration,
                              instrumentation, automation for wireless systems:
                              GSM/LTE/5G/Experimental
                            </li>
                            <li>
                              Oversee software projects from design to
                              deployment, provide guidance and oversight for
                              engineering initiatives.
                            </li>
                            <li>
                              Develop/manage cloud infrastructure to support
                              engineers and factories. Manage factory
                              operations, engineers, contractors.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2016 -
                            December 2016
                          </h6>
                          <h4 className="timeline-title">Apple</h4>
                          <h5 className="timeline-text">
                            RF Cellular Test & Automation Engineering
                            (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Developed test application to automate CMW500 for
                              testing cellular technologies (LTE, GSM, UMTS).
                            </li>
                            <li>
                              Work with RF engineers to develop cellular tests
                              from 3GPP and system requirements, correlation
                              study between solutions.
                            </li>
                            <li>
                              Work with contract manufacturers to validate and
                              deploy RF test solution in a production
                              environment.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2015 -
                            December 2015
                          </h6>
                          <h4 className="timeline-title">ON Semiconductor</h4>
                          <h5 className="timeline-text">
                            DSP Firmware and Algorithm Development
                            (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Develop milti-core DSP audio encoding/compression
                              (G.722, CVSD), custom codec to increase
                              compression, retaining quality.
                            </li>
                            <li>
                              Evaluate codec performance, develop firmware
                              tests, fixes for reliability and security.
                              Optimize assembly and C code.
                            </li>
                            <li>
                              Develop algorithms for memory management to
                              optimize usage and read/write, data transfer
                              speed.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> January 2015 - May
                            2015
                          </h6>
                          <h4 className="timeline-title">
                            Department of National Defence
                          </h4>
                          <h5 className="timeline-text">
                            Defence Research & Technical Lead (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Design and develop high performance and
                              versatility simulator for sensor data fusion
                              research in intelligence aircraft (ISR).
                            </li>
                            <li>
                              Developed algorithms to track targets,
                              identify/assess threats, predict trajectory,
                              conforming to NATO military standards.
                            </li>
                            <li>
                              Collaborate with defence companies, foreign
                              engineers, scientists, air force pilots for
                              development of future research projects.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2014 - August
                            2014
                          </h6>
                          <h4 className="timeline-title">Symantec</h4>
                          <h5 className="timeline-text">
                            Network Security Software Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Developed tests, fix bugs for access and content
                              control, encryption, security vulnerabilities and
                              exploits, system crashes.
                            </li>
                            <li>
                              Created comprehensive automated and manual tests
                              based on future project road map.
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2013 -
                            December 2013
                          </h6>
                          <h4 className="timeline-title">Siemens</h4>
                          <h5 className="timeline-text">
                            Network Hardware/Firmware Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Generate, analyze packets to debug complex
                              computer networks. Develop and test recovery
                              systems and solutions (PRP, HSR).
                            </li>
                            <li>
                              Implemented and tested high precision clock
                              synchronization, contributing to IEEE 1588
                              Precision Time Protocol (PTP).
                            </li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> January 2013 -
                            April 2013
                          </h6>
                          <h4 className="timeline-title">Siemens</h4>
                          <h5 className="timeline-text">
                            Network Software Engineering (Co-op/Intern)
                          </h5>
                          <ul className="timeline-text">
                            <li>
                              Develop automated tests, fix network security and
                              reliability bugs, develop libraries for IETF
                              protocols.
                            </li>
                            <li>
                              Back-end server and in-house tools development for
                              automating calculations and documentation.
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
                              href="hhttps://link.springer.com/content/pdf/10.1007/978-3-319-40244-4_22.pdf"
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
