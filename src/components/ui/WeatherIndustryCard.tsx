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
      <div className={styles.card}>
        <div className={styles.main}>{name}</div>
        <div className={styles.mainsub}>Siyara Innovations</div>
      </div>

      <div className={styles.card2}>
        <div className={styles.upper}>
          {/* Projects on top, as requested */}
          <div className={styles.projectItem}>
            <strong>Featured</strong>
            Client Project
          </div>
          <div className={styles.projectItem}>
            <strong>Case Study</strong>
            View Results
          </div>
        </div>

        <div className={styles.lower}>
          {/* Description in the bottom */}
          <p className={styles.descText}>{desc}</p>
          <div className={styles.card3}>{ctaText}</div>
        </div>
      </div>
    </div>
  );
};
