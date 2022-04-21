import "./blog.scss";
import mobile from "../img/mobile.png";

export default function Blog() {
  return (
    <div className="blog">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={mobile} alt="cell phone" />
                </div>
                <h2>Title</h2>
                <p>add description here!</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
