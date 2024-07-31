import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { routes } from "./routes";
import { Layout } from '../layout';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          { routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={ <Component /> } />
          )) }

          {/* Router Default */}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
