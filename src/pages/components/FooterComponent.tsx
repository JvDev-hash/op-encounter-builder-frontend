import { Roboto } from 'next/font/google'
import styles from '@component/styles/Footer.module.css'
const roboto = Roboto({ weight: "400", subsets: ['latin'] })

const FooterComponent = () => {
    return (
        <>
        <div className={styles.description}>
            <p>Desenvolvido e Mantido por: <strong>JVDev</strong></p>
        </div>
        </>
    )
}

export default FooterComponent;