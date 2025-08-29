'use client';
import styles from '@/entities/flipping-coin/styles.module.scss';
import { useState } from 'react';

export function FlippingCoin() {
    const [play, setPlay] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <div className={`${styles.flippingCoin}`} data-playing={play}>
                <div
                    className={`border border-yellow-500 bg-yellow-400 ${styles.front}`}
                >
                    <i className="ph ph-currency-dollar text-4xl text-yellow-700"></i>
                </div>
                <div
                    className={`border border-yellow-500 bg-yellow-400 ${styles.back}`}
                >
                    <i className="ph ph-currency-dollar text-4xl text-yellow-700"></i>
                </div>
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
