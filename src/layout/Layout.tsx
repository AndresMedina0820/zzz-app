import { ReactNode } from "react";
import { Header } from "../components";
import '../styles/layout.css';

type Props = {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
    </>
  )
}
