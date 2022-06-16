import React, { FC } from "react";
import Member from "./member";
import Image from "next/image";

const AboutUs: FC = () => {
  return (
    <section
      className="
      min-w-full  min-h-screen
      bg-zinc-200
      flex flex-col  py-20 px-10 text-3xl md:text-4xl text-zinc-800"
    >
      <div className="container mx-auto">
        <p
          className="leading-tight max-w-5xl mx-auto
             text-4xl lg:text-5xl tracking-tight"
        >
          <strong>We will help you ship better app, faster.</strong>
          Our team of expert engineers has created the best user experinces in
          some of the most popular apps worldwide.
        </p>
      </div>
      <div className="min-w-full text-center mt-20">
        <h2>Our Team</h2>
        <div>the &ldquo;spec-ops&rdquo;</div>
        <div
          className="grid mt-10
            grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            gap-6 lg:gap-20  "
        >
          <Member id="0" name="Darrell Rogers" socialID="@darrel_rogers" />
          <Member id="1" name="Bernard Horton" socialID="@bernard_horton" />
          <Member id="2" name="Gwen Norris" socialID="@gwen_norris" />
          <Member id="3" name="Alyssa Bowers" socialID="@alyssa_bowers" />
          <Member id="4" name="Kay Klein" socialID="@kay_klein" />
          <Member id="5" name="Penny Hayes" socialID="@penny_hayes" />
          <Member id="6" name="Cecelia Weaver" socialID="@cecelia_weaver" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
