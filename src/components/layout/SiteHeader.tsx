import Link from 'next/link';
import { getSiteConfig } from '@/lib/content-parser';
import { Container } from './Container';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const { title, navigation } = getSiteConfig();
  const nameplate = title.split('|')[0].trim();

  return (
    <header className={styles.header}>
      <Container size="standard">
        <div className={styles.navInner}>
          <Link href="/" className={styles.nameplate}>
            {nameplate}
          </Link>
          <nav aria-label="Primary" className={styles.primaryNav}>
            {navigation.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.label} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
