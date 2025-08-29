'use client';
import styles from '@/entities/flipping-coin/styles.module.scss';
import { useState } from 'react';

export function FlippingCoin() {
    const [play, setPlay] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <div className={`${styles.flippingCoin}`} data-playing={play}>
                <div className={`bg-muted border ${styles.front}`}>Cara</div>
                <div className={`bg-muted border ${styles.back}`}>Coroa</div>
            </div>
            <button
                className="bg-primary text-primary-foreground cursor-pointer rounded-md transition-transform active:scale-95"
                onClick={() => setPlay(!play)}
            >
                {play ? 'Stop' : 'Start'}
            </button>
        </div>
    );
}
