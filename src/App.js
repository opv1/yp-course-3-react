import React, { useContext, useEffect } from 'react';
import './App.scss';
import { AppContext } from './store/app/appContext';
import Layout from './containers/Layout/Layout';
import Header from './containers/Header/Header';
import Profile from './containers/Profile/Profile';
import CardList from './containers/CardList/CardList';
import Modal from './containers/Modal/Modal';
import Loader from './components/Loader/Loader';
import Portal from './components/Portal/Portal';

function App() {
  const { loading, showModal, initialData, setModal } = useContext(AppContext);

  useEffect(() => {
    initialData();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <main onClick={(event) => setModal(event)}>
          <Profile />
          <CardList />
        </main>
      )}
      {showModal ? (
        <Portal>
          <Modal />
        </Portal>
      ) : null}
    </Layout>
  );
}

export default App;
