import React from "react";
import { BsTwitter, BsInstagram, BsHandIndex } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  const handleClickBs = (clickBs) => {
    console.log("you cliked social media");
    <a href="https://twitter.com/nkhwazi__eden">
      https://twitter.com/nkhwazi__eden
    </a>;
  };

  const handleClickFa = (e) => {};

  const handleClickBsi = (e) => {
    return <a href="https://www.instagram.com/edie4th/">Instagram</a>;
  };

  return (
    <div className="app__social">
      <div>
        <BsTwitter onClick={handleClickBs} />
      </div>
      <div>
        <FaFacebookF onClick={handleClickFa} />
      </div>
      <div>
        <BsInstagram onClick={handleClickBsi} />
      </div>
    </div>
  );
};

export default SocialMedia;
