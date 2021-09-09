import styles from './styles.module.scss'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logoPb.png" alt="teste" />
        <nav>
          <a className={styles.active}>A Empresa</a>
          <a>Serviços</a>
          <a>Comunicação</a>
          <a>Consultoria Online</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  );
}