'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import styles from './Footer.module.css';

interface FooterProps {
  author: string;
}

const GithubIcon = () => (
  <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer({ author }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <Container size="standard">
        <div className={styles.footerInner}>
          <div className={styles.topTier}>
            <p className={styles.contactText}>
              Feel free to <strong><a href="mailto:edenjermendi@gmail.com" className={styles.contactLink}>contact</a></strong> me with any sort of question.
            </p>
            <div className={styles.socials}>
              <a href="https://github.com/eden-jermendi" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Github"><GithubIcon /></a>
              <a href="https://linkedin.com/in/eden-jermendi" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div className={styles.bottomTier}>
            <div className={styles.copyright}>
              Copyright © {year}
            </div>
            <div className={styles.madeBy}>
              Made by {author}
            </div>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
