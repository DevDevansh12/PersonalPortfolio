import React from "react";
import "./../Css/Button.css";
const Button = (props) => {
  return (
    <>
      <div className="buttons">
        <button className="blob-btn">
          {props.value}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob" />
              <span className="blob-btn__blob" />
              <span className="blob-btn__blob" />
              <span className="blob-btn__blob" />
            </span>
          </span>
        </button>
        <br />
      </div>
    </>
  );
};

export default Button;
