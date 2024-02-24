import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Calendar from './pages/Calendar';
import Chart from './pages/Chart';

import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import VaultList from './pages/Vaults/VaultList';
import HomePage from './pages/HomePage/HomePage';
import { DashBoard } from './pages/Dashboard/DashBoard';
import SDnod from './pages/SDnod/SDnod';
import Boardroom from './pages/Boardroom/Boardroom';
import Labs from './pages/Labs/Labs';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
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
            <SDnod />
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

      <Route
        path="/calendar"
        element={
          <>
            <PageTitle title="Calendar | DefiNodal" />
            <Calendar />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <PageTitle title="Profile | DefiNodal" />
            <Profile />
          </>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <>
            <PageTitle title="Form Elements | DefiNodal" />
            <FormElements />
          </>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <>
            <PageTitle title="Form Layout | DefiNodal" />
            <FormLayout />
          </>
        }
      />
      <Route
        path="/tables"
        element={
          <>
            <PageTitle title="Tables | DefiNodal" />
            <Tables />
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <>
            <PageTitle title="Settings | DefiNodal" />
            <Settings />
          </>
        }
      />
      <Route
        path="/chart"
        element={
          <>
            <PageTitle title="Basic Chart | DefiNodal" />
            <Chart />
          </>
        }
      />
      <Route
        path="/ui/alerts"
        element={
          <>
            <PageTitle title="Alerts | DefiNodal" />
            <Alerts />
          </>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <>
            <PageTitle title="Buttons | DefiNodal" />
            <Buttons />
          </>
        }
      />
    </Routes>
  );
}

export default App;
