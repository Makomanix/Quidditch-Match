import React from "react";

function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <h2>
        This application is collection of Harry Potter characters that you can
        create a Quidditch team with
      </h2>
      <br />
      <h2>
        Client Side routing with React Router v6 Data fetching via JSON server
        to a db.json file Debounced searching via a combination of useState and
        useEffect
      </h2>
      <br />
      <h2>
        Multiple examples of inverse data flow where a child component invokes a
        callback passed from a parent component that causes an update to the
        parent's state and a subsequent re-render
      </h2>
    </section>
  );
}
export default About;
