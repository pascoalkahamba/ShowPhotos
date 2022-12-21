import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = "Kahamba | " + props.title;
  }, [props]);
  return <div></div>;
};

export default Head;
