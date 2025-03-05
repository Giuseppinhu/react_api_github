import styles from './WebHeader.module.css'

const WebHeader = () => {
   return (
        <header className={styles.header}>  
        <h1 className={styles.titulo}>Portifolio do GitHub:</h1>
        <h2 className={styles.subtitulo}>Digite seu Username</h2>
        </header>
   )
}

export default WebHeader