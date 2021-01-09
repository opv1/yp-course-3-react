import React, { useContext, useEffect } from 'react'
import { AppContext } from './contexts/app/AppContext'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import CardList from './components/CardList/CardList'
import Modal from './components/Modal/Modal'
import Loader from './components/Loader/Loader'
import Portal from './components/Portal/Portal'

function App() {
  const { loading, showModal, initialData, setModal } = useContext(AppContext)

  useEffect(() => {
    initialData()
    // eslint-disable-next-line
  }, [])

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
  )
}

export default App
