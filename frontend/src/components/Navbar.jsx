import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          Opinion
        </a>
      </nav>
    </header>
  )
}

export default Navbar
