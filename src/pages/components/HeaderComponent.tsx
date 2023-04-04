import Head from 'next/head'
import styles from '@component/styles/Header.module.css'

const HeaderComponent = () => {
return (
    <>
        <Head>
            <title>Ordem Paranormal Encounter Generator</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <header>
            <div className={styles.description}>
            <p>
                Bem vindo ao gerador de encontros para <strong>Ordem Paranormal RPG. </strong><br/>
                Essa ferramenta foi desenvolvida para auxiliar mestres na hora de balancear os combates para seus jogadores.
            </p>
            </div>
        </header>
    </>
)
}

export default HeaderComponent;