import { useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          Opinion
        </a>
        <form className={styles.search} role="search">
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            className={styles.searchInput}
            type="search"
            name="q"
            placeholder="Search ratings, reviews and more..."
            aria-label="Search"
          />
        </form>
        <div className={styles.profile}>
          <button
            className={styles.profileButton}
            type="button"
            aria-label={isMenuOpen ? 'Close profile menu' : 'Open profile menu'}
            aria-expanded={isMenuOpen}
            aria-controls="profile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className={styles.profileMenu} id="profile-menu">
              <span className={styles.menuTitle}>Profile menu</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
