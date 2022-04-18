import React from "react";
import me from "../../images/IMG_20191111_121405 (2).jpg";

const About = () => {
  return (
    <div className="my-5">
      <img
        width="200"
        height="200"
        className="img-fluid my-5"
        style={{ borderRadius: "50%" }}
        src={me}
        alt=""
      />
      <div className="container">
        <p>
          Hello! I'm Iftekhar Alam Utsho. Completed my B.Sc from Green
          University of Bangladesh. I want to be a full stack developer. And
          this dream brings me here to fulfill. In my whole versity life i
          didn't pay attention on my carrer but at that certain point I realize
          to building a carrer on web developing and fortunetely I found
          Programming Hero. <br /> I work hard a lot now-a days to full-fill my
          dream. I never shared it to anyone before. I work almost 14 hours in
          front of my PC. Just a 6 hours nap and having food thats breaks me
          from doing my work. And I belive that{" "}
          <span className="fw-bold">Hard work always pays off.</span> One day
          Inshallah I will reach my goal with Programming hero team.
        </p>
      </div>
    </div>
  );
};

export default About;
