import React, { useEffect, useState } from "react";
import AllAboutUs from "../../components/allAboutUs/AllAboutUs";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";

const AboutUs = () => {
  const [isloading, setIsloading] = useState(true);
  const onLessonFetch = () => {
    setIsloading(false);
  };
  useEffect(() => {
    onLessonFetch(); // Fetch lessons on component mount
  }, []);

  return (
    <>
      {isloading ? <Spinner /> : <AllAboutUs />}

      <div className="mt-40">
        <FooterCard />
      </div>
    </>
  );
};

export default AboutUs;
