import { OptionsListProps } from "../components/types";

export const options: OptionsListProps[] = [
  {
    id: 1,
    text: 'Si me acuesto ahora',
    highlightedText: '¿A qué hora debo despertarme?',
  },
  {
    id: 2,
    text: '¿A qué hora debo dormir?',
    highlightedText: 'Si me quiero levantar a las ...',
  },
  {
    id: 3,
    text: '¿A qué hora debo despertar?',
    highlightedText: 'Si me acuesto a las ...',
  },
];

export const description = (
  <>
    <b>¿Sabías que el secreto está en respetar tus ciclos de sueño?</b><br />
    Tu rendimiento diario comienza con una buena noche de sueño y nuestra
    calculadora te ayudará a encontrar el momento perfecto para despertar
    y que te <b><u>levantes renovado</u></b> y <b><u>lleno de energía</u></b>.
  </>
);
