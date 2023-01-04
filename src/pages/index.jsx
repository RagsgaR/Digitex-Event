import React from "react";
import HeroSection from "../sections/home/hero";
import {Presentation} from "../sections/home/Presentation.section"
import {EngagementSection} from "../sections/home/Engagement.section"
import {PlaneSection} from "../sections/home/Plane.section"

export default function Home() {
  return (
    <div>
     <div>
        <HeroSection />
      </div>
       <div >
        <Presentation/>
      </div>
      <div>
        <PlaneSection/>
      </div>
      <div >
        <EngagementSection/>
      </div>
    </div>
  );
}
