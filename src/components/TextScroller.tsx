'use client'
import styles from '@/components/style/TextScroller.module.css';

import React from 'react';

export default function TextScroller({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.scrollerOuter}>
            <div className={styles.scrollerInner}>
                <div className={styles.scrollerContent}>
                    {children}
                </div>
                <div className={styles.scrollerContent} aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
}