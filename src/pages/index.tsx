
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import { getAll } from './services/monsterService'
import Select from 'react-select'
import type { GetServerSideProps } from 'next'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

const roboto = Roboto({ weight: "400", subsets: ['latin'] })

const Home = (monsters: any) => {
  const monstersArray = Array.from(monsters.enemies);
  const monstersOptions: any = [];

  monstersArray.forEach(function(x: any){
    let tmpObj = {value: `${x.name}`, label: `${x.name}` + ' | VD: ' + `${x.vd}`}

    monstersOptions.push(tmpObj)
  })

  return (
    <>
    <HeaderComponent/>

      <main className={styles.main}>
        <div>
            <Select options={ monstersOptions }/>
        </div>
      </main>
      <FooterComponent/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const enemies = await getAll();
  return {
      props: { enemies },
  };
}
export default Home