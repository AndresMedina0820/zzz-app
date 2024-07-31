import { useState } from "react";
import { Description, List } from "../components";
import "../styles/Home.css";
import { OptionsListProps } from "../components/types";

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

  const descriptionText = (
    <>
      <b>¿Sabías que el secreto está en respetar tus ciclos de sueño?</b><br />
      Tu rendimiento diario comienza con una buena noche de sueño y nuestra
      calculadora te ayudará a encontrar el momento perfecto para despertar
      y que te <b><u>levantes renovado</u></b> y <b><u>lleno de energía</u></b>.
    </>
  )

  const options: OptionsListProps[] = [
    {
      text: 'Si me acuesto ahora',
      highlightedText: '¿A qué hora debo despertarme?',
    },
    {
      text: '¿A qué hora debo dormir?',
      highlightedText: 'Si me quiero levantar a las ...',
    },
    {
      text: '¿A qué hora debo despertar?',
      highlightedText: 'Si me acuesto a las ...',
    },
  ]

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
            text={descriptionText}
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
