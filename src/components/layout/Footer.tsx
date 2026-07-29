import Link from 'next/link';
import { getSiteConfig } from '@/lib/content-parser';
import { Container } from './Container';
import styles from './Footer.module.css';

export function Footer() {
  const { author, footerNavigation } = getSiteConfig();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="standard">
        <div className={styles.footerInner}>
          <div className={styles.copyright}>
            © {year} {author}
          </div>
          {footerNavigation && footerNavigation.length > 0 && (
            <nav aria-label="Footer" className={styles.footerNav}>
              {footerNavigation.map((item) => (
                item.isExternal ? (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.footerLink}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          )}
        </div>
      </Container>
    </footer>
  );
}
