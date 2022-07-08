import React from "react";
import "../styles/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";
import Footer from "./Footer";

const Widget = () => {
  
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleleft">
        <FiberManualRecord />
      </div>
      <div className="widgets-articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="widgets">
        {/* <div className="widgets-users">
          {users.id}
        </div> */}
        <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("Opened to React Jobs", "Top News")}
        {newsArticle("Linkedin clone built on React", "Top News")}
        {newsArticle("Linkedin clone by Zeek", "Top News")}
      </div>
      <Footer />
    </div>
  );
};

export default Widget;
