import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event & Management Lead</h4>
                <h5>Effervescence, IIIT Allahabad</h5>
              </div>
              <h3>Aug 2023 – Apr 2024</h3>
            </div>
            <p>
              Managed a festival with 22,000+ footfall. Led a team of 400+ to coordinate event planning,
              logistics, and execution. Implemented data-driven strategies to optimize marketing and resource allocation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Member</h4>
                <h5>Gravity, IIIT Allahabad</h5>
              </div>
              <h3>Jul 2023 – Jun 2024</h3>
            </div>
            <p>
              Successfully organized hackathons with 2,000+ participants. Spearheaded initiatives and led a 20-member
              team to foster technical interest and engagement in the campus community.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member</h4>
                <h5>Prayaas, IIIT Allahabad</h5>
              </div>
              <h3>Sep 2023 – Mar 2024</h3>
            </div>
            <p>
              Mentored 30+ students from underprivileged backgrounds. Worked in a 20-member team to deliver
              personalized learning sessions and social support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
