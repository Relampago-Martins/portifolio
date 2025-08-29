'use client';

import styles from '@/entities/stacking-cards/styles.module.scss';
import { useState } from 'react';

const LENGTH = 4;

type StackingCardsProps = {
    order?: 'ascending' | 'descending';
};
export function StackingCards({ order = 'ascending' }: StackingCardsProps) {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div
            className={`${styles.stackingCards}`}
            style={{
                ['--length' as string]: `${LENGTH}`,
            }}
        >
            {Array.from({ length: LENGTH }, (_, i) => {
                const isSelected = selected === i;
                const index = order === 'ascending' ? i : LENGTH - 1 - i;
                return (
                    <div
                        key={i}
                        className={`${styles.card} relative rounded-md ${isSelected ? '' : 'shadow-sm'}`}
                        style={{
                            ['--index' as string]: `${index}`,
                        }}
                    >
                        {isSelected ? (
                            <span
                                className="absolute inset-0 cursor-pointer rounded-md border border-dashed"
                                onClick={() => setSelected(null)}
                            ></span>
                        ) : (
                            <button
                                className={`bg-card text-muted-foreground hover:text-foreground flex h-full w-full cursor-pointer items-center justify-center rounded-md border`}
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
