import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { hoppies } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const HoppyCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm truly glad to introduce myself to you!
        <br className="sm:block hidden" />
        I'm a self-assertive and passionate Software Engineer skilled in Web
        Development, UI/UX fields and Software Systems. Aim to build reliable,
        modern solutions that can scale. Always looking forward into learning
        new Technologies & Frameworks to cope with the field! I thrive on team
        synergy, embracing a collective exchange of enriching experiences that
        drive me forward in my domain with unwavering passion.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {hoppies.map((hoppy, index) => (
          <HoppyCard key={hoppy.title} index={index} {...hoppy} />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-8">
        <button className="bg-tertiary py-3 px-8 rounded-xl outline-none xs:w-[40%] w-full text-white text-[20px] shadow-md shadow-primary border-[1.5px]">
          <a href="/Rayan-Aljoufi's CV.pdf">Download My Resume!</a>
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
