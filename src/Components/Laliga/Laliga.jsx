import "./Laliga.css";

const Laliga = () => {
  return (
    <div className="Laliga">
      <h2 className="Laliga-head">La liga</h2>
      <img
        className="Laliga-headpost"
        src="..\src\Assets\headpost.png"
        alt=""
      />
      <div className="Laliga-mid">
        <a className="tags" href="#">
          League
        </a>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </h2>
      </div>
      <div className="Laliga-down">
        <div className="Laliga-inside1">
          <img className="Laliga-post1" src="" alt="" />
          <div className="Laliga-inside-posts">
            <a className="tags" href="#">
              League
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
          </div>
        </div>
        <div className="Laliga-inside2">
          <img className="Laliga-post2" src="" alt="" />
          <div className="Laliga-inside-posts">
            <a className="tags" href="#">
              League
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
          </div>
        </div>
        <div className="Laliga-inside3">
          <img className="Laliga-post3" src="" alt="" />
          <div className="Laliga-inside-posts">
            <a className="tags" href="#">
              League
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laliga;
