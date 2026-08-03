'use client'

import React from 'react';
import { IconMap } from '@/components/ui/Icons';
import styles from './WeatherIndustryCard.module.css';

interface WeatherIndustryCardProps {
  name: string;
  desc: string;
  ctaText: string;
  iconKey?: string;
}

export const WeatherIndustryCard = ({ name, desc, ctaText, iconKey }: WeatherIndustryCardProps) => {
  const iconNode = iconKey ? IconMap[iconKey] : null;

  return (
    <div className={styles.cardm}>
      {/* Unified Card Container */}
      <div className={styles.card2}>
        {/* Top Header — Industry Name + Emerald Icon (Always visible) */}
        <div className={styles.cardHeader}>
          <div className={styles.titleWithIcon}>
            {iconNode && <span className={styles.industryIcon}>{iconNode}</span>}
            <h3 className={styles.main}>{name}</h3>
          </div>
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
