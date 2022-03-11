import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubIcon = () => {
  return (
    <div >
    <button>
      <span className='text-3xl'> <FontAwesomeIcon icon={faGithub} /> </span>
    </button>
    </div>
  );
};

export default GithubIcon;
