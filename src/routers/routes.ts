import { Home, Time, Cycles } from "../pages";
import { Routes } from "../types/routes.types";

export const routes: Routes[] = [
  {
    path: '',
    Component: Home,
  },
  {
    path: 'time',
    Component: Time,
  },
  {
    path: 'cycles',
    Component: Cycles,
  },
]
