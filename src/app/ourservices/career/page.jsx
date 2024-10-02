"use client";
import React from "react";
import "./careerPage.css";
import Image from "next/image";

const Careerpage = () => {
  const scrollToJobs = () => {
    const jobsDiv = document.getElementById("jobs");
    jobsDiv.scrollIntoView({ behavior: "smooth" });
  };

  // Dummy job data
  const jobOpenings = [
    {
      title: "Taxi Dispatcher",
      posted: "2 days ago",
      positions: 3,
      location:"Islamabad"
    },
    {
      title: "Supervisor",
      posted: "5 days ago",
      positions: 2,
      location:"Edinburgh"
    },
    {
      title: "IT Director",
      posted: "1 week ago",
      positions: 1,
      location:"London"
    },
    {
      title: "Web Developer",
      posted: "3 days ago",
      positions: 2,
      location:"Liverpool"
    },
  ];

  return (
    <div className="career-page">
      {/* First Div */}
      <div className="career-section">
        <h1>Join Our Team</h1>
        <p>
          Build a career that suits your lifestyle, in a company where your
          voice matters.
          <br />
          Let’s build a sustainable world together.
        </p>
        <button onClick={scrollToJobs}>View Job Openings</button>
      </div>

      {/* Second Div */}
      <div className="working-section">
        <h2>
          Working at LetsOutsource means <span>flexibility,trust and </span>
          <span>meaningful choices</span>
        </h2>
        <div className="working-content">
          <div className="working-text">
            <p>
              Working at LetsOutsource means being a part of a community that
              values growth, mutual trust, and respect.
              <br />
              We maintain a feedback-oriented mindset to continuously learn and
              improve. We care about creating sustainable software and each
              employee’s experience.
              <br />
              At LetsOutsource, we understand the importance of work-life
              balance. We offer flexible working hours and remote work options
              to help our team members maintain a healthy balance between their
              professional and personal lives. Our comprehensive benefits
              package includes health insurance, wellness programs, and support
              for mental health, ensuring that our employees are well taken care
              of.
              <br />
              As a Certified B Corporation®, we offer a safe, inclusive, and
              productive environment for all team members.
            </p>
          </div>
          <div className="working-image">
            <Image
              src="/happy-company.jpg"
              alt="Working at LetsOutsource"
              width={680}
              height={500}
              className="working-img"
            />
          </div>
        </div>
      </div>

      {/* Third Div */}
      <div className="values-section">
        <h2>
          Our <span>Values</span>
        </h2>
        <p>
          Our values shape the way we work with clients and each other. They are
          the foundation of our culture and evolve with us. We use internal
          initiatives, such as Ask Me Anything sessions, to keep our values
          alive.
        </p>
      </div>

      {/* Fourth Div - Job Openings Section */}
      <div className="jobs-section" id="jobs">
        <h2>Recent Job Openings</h2>
        {jobOpenings.length > 0 ? (
          <div className="job-cards">
            {jobOpenings.map((job, index) => (
              <div className="job-card" key={index}>
                <h3>{job.title}</h3>
                <p className="job-posted">{job.posted}</p>
                <p className="job-positions">
                  {job.positions} position(s) available
                </p>
                <p className="job-location">{job.location}</p>
                <button className="apply-button">Apply Now</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-jobs">
            <h3>Currently, We Are Not Hiring</h3>
            <p>Please check back later for future opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careerpage;
