import Head from "next/head"
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css';
import { CountdownContext, CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
