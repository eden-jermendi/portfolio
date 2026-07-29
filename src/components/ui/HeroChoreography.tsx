'use client';

import { motion } from 'framer-motion';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { TextRotator } from './TextRotator';
import { StackSymbols } from './StackSymbols';
import styles from '@/app/page.module.css';

export function HeroChoreography({ nameplate }: { nameplate: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <motion.div 
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <Heading level={1}>{nameplate}</Heading>
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-4)', maxWidth: '65ch', height: '1.5em', display: 'flex', alignItems: 'center' }}>
        <BodyText variant="primary">
          <TextRotator phrases={['Problem solver', 'Systems-oriented thinker', 'Full-stack developer', 'AI developer']} /> based in Wellington, Aotearoa New Zealand.
        </BodyText>
      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-6)' }}>
        <StackSymbols />
      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-6)', maxWidth: '65ch' }}>
        <BodyText variant="primary">
          I build resilient, thoughtful software with a focus on good structure, useful interfaces, and code that feels deliberate rather than flashy.
        </BodyText>
      </motion.div>
    </motion.div>
  );
}
