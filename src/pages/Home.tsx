import { Button } from "../components/Button/Button";
import "../styles/Home.css";

const Home = () => {
  const start = () => {
    console.log("This is button");
  };

  return (
    <article>
      <section className="title">
        <h1>
          Descubre tu mejor descanso con la calculadora de Ciclos de Sueño{" "}
          <br />
          🌙
        </h1>
        <p>
          <b>¿Sabías que el secreto está en respetar tus ciclos de sueño?</b>
          <br />
          Tu rendimiento diario comienza con una buena noche de sueño y nuestra
          calculadora te ayudará a encontrar el momento perfecto para despertar
          y que te <b><u>levantes renovado</u></b> y <b><u>lleno de energía</u></b>.
        </p>
      </section>
      <section>
        <Button
          className="bg-primary"
          text="Comenzar"
          onClick={() => start()}
        />
      </section>
    </article>
  );
};

export default Home;
