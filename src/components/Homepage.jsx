import React from "react";
import ArtisanRegistration from "./Homepage/ArtisanRegistration";
import FeatureSection from "./Homepage/FeatureSection";
import HeroSection from "./Homepage/HeroSection";

import FAQSection from "./Homepage/FAQSection";
import Third from "./Homepage/Third";
import QRCodePage from "./Homepage/QRCodePage";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Third />
      <ArtisanRegistration />
      <FAQSection />
      <QRCodePage />
    </>
  );
}
