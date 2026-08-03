import React from 'react';
import styles from './WeatherIndustryCard.module.css';

interface WeatherIndustryCardProps {
  name: string;
  desc: string;
  ctaText: string;
}

export const WeatherIndustryCard = ({ name, desc, ctaText }: WeatherIndustryCardProps) => {
  return (
    <div className={styles.cardm}>
      {/* Unified Card Container */}
      <div className={styles.card2}>
        {/* Top Header — Industry Name (Always visible) */}
        <div className={styles.cardHeader}>
          <h3 className={styles.main}>{name}</h3>
          <div className={styles.mainsub}>Siyara Innovations</div>
        </div>

        {/* Middle Section — Featured / Case Study Pills (Reveals on hover) */}
        <div className={styles.upper}>
          <div className={styles.projectItem}>
            <strong>Featured</strong>
            Client Project
          </div>
          <div className={styles.projectItem}>
            <strong>Case Study</strong>
            View Results
          </div>
        </div>

        {/* Lower Section — Description + CTA Button (Reveals on hover) */}
        <div className={styles.lower}>
          <p className={styles.descText}>{desc}</p>
          <div className={styles.card3}>{ctaText}</div>
        </div>
      </div>
    </div>
  );
};
