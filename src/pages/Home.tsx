import { useState } from "react";
import { Description, List } from "../components";
import "../styles/Home.css";
import { options, description } from "../utils/constants"

const Home = () => {
  const [showList, setShowList] = useState(false);
  const [animation, setAnimation] = useState('');

  const renderList = () => {
    setAnimation('fadeOut');
    setTimeout(() => {
      setAnimation('fadeIn');
      setShowList(true);
    }, 500);
  };

  return (
    <article>
      <section className="title">
        <h1>
          Descubre tu mejor descanso con la calculadora de Ciclos de Sueño{" "}
          <br />
          🌙
        </h1>
      </section>
      {showList ? (
        <section className={`list ${animation}`}>
          <List options={options} />
        </section>
      ) : (
        <section className={`description ${animation}`}>
          <Description
            text={description}
            classNameText="description__p"
            classNameButton="description__button"
            onClick={renderList}
          />
        </section>
      )}
    </article>
  );
};

export default Home;
