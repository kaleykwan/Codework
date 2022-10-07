import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feed from '../components/Feed';
import RightSideBar from '../components/RightSideBar';
import LeftSideBar from '../components/LeftSideBar';

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  )
}

export default Home
