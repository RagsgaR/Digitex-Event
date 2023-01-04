import React from "react";
import HeroSection from "../sections/home/hero";
import {Presentation} from "../sections/home/Presentation.section"
import {EngagementSection} from "../sections/home/Engagement.section"

export default function Home() {
  return (
    <div>
     <div id="Date">
          <HeroSection />
      </div>
       <div id="Presentation">
        <Presentation/>
      </div>
      <div id="Objectif">
        <EngagementSection/>
      </div>
    </div>
  );
}
