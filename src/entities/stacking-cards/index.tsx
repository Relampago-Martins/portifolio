'use client';

import styles from '@/entities/stacking-cards/styles.module.scss';
import { useState } from 'react';

export function StackingCards() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className={`${styles.stackingCards}`}>
            {Array.from({ length: 4 }, (_, i) => {
                const isSelected = selected === i;
                return (
                    <div
                        key={i}
                        className={`${styles.card} relative`}
                        style={{
                            ['--offset' as string]: `${i}`,
                        }}
                    >
                        {isSelected ? (
                            <span
                                className="absolute inset-0 cursor-pointer rounded-md border border-dashed"
                                onClick={() => setSelected(null)}
                            ></span>
                        ) : (
                            <button
                                className={`bg-muted text-muted-foreground hover:text-foreground flex h-full w-full cursor-pointer items-center justify-center rounded-md border`}
                                onClick={() => setSelected(i)}
                            >
                                {i + 1}
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
