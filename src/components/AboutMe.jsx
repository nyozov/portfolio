import Box from "@mui/material/Box";

export default function aboutMe() {
  return (
    <div>
      <Box
        sx={{
          width: 400,
          height: 500,
          color: "white",
          backgroundColor: "rgba(0,0,30,0.4)",
          p: 5,
          position: "relative",
          left: 5,
          borderRadius: 2,
        }}
      >
        <h2>About Me</h2>
        <p>
          Junior full stack web developer with a passion for front-end and
          UI/UX, transitioning from a background in automotive business. As I
          was studying and working in the automotive sector, I discovered my
          passion for software when I started learning code in my spare time. I
          left my position to focus full time on pursuing my passion, which is
          when I decided to further accelerate my learning by enrolling in a
          full stack web development program. I am now searching for the
          opportunity to continue to advance my skills by working with industry
          professionals. SKILLS LANGUAGES: Javascript, HTML, SQL, CSS, Ruby
          FRAMEWORKS/LIBRARIES: React, jQuery, Bootstrap, Express, Rails, Ajax,
          Material UI DATABASES: PostgreSQL TEST-DRIVEN DEVELOPMENT: Cypress,
          Mocha/Chai, Jest
        </p>
      </Box>
    </div>
  );
}
