import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppRoute } from './hooks/useAppRoute';
import { withAuth } from './common/utils/withAuth';

const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  const { pathname } = useLocation();
  const appRoute = useAppRoute();
  const routesName = appRoute.map(item => item.path);

  return (
    <Suspense fallback={<span>loading...</span>}>
      <Routes>
        {
          appRoute.map((item, i) => {
            const El = withAuth(item.compoennt);

            return (
              <Route key={i} exact path={item.path} element={<El />} />
            )
          })
        }
      </Routes>

      {!routesName.includes(pathname) && <NotFound />}
    </Suspense>
  );
}

export default App;
