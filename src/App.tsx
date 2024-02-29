import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAccount } from 'wagmi';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import VaultList from './pages/Vaults/VaultList';
import HomePage from './pages/HomePage/HomePage';
import { DashBoard } from './pages/Dashboard/DashBoard';
import SDnod from './pages/SDnod/SDnod';
import Boardroom from './pages/Boardroom/Boardroom';
import Labs from './pages/Labs/Labs';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { address, chain } = useAccount();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="DefiNodal" />
              <HomePage />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | Definodal" />
              <DashBoard />
            </>
          }
        />

        <Route
          path="/vaults"
          element={
            <>
              <PageTitle title="Vaults | Definodal" />
              <VaultList />
            </>
          }
        />

        <Route
          path="/sdnod"
          element={
            <>
              <PageTitle title="SDnod | Definodal" />
              <SDnod address={address} chain={chain} />
            </>
          }
        />

        <Route
          path="/boardroom"
          element={
            <>
              <PageTitle title="Boardroom | Definodal" />
              <Boardroom />
            </>
          }
        />

        <Route
          path="/labs"
          element={
            <>
              <PageTitle title="DeFiLabs | Definodal" />
              <Labs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
