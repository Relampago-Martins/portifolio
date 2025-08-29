import { FlippingCoin } from '@/entities/flipping-coin';
import { StackingCards } from '@/entities/stacking-cards';

export default function Home() {
    return (
        <div className="my-30 flex h-screen flex-col items-center gap-12">
            <h1 className="text-3xl font-bold text-gray-700">
                Meu portfólio de Animações
            </h1>
            <div className="flex items-center justify-center gap-12">
                <StackingCards />
                <FlippingCoin />
            </div>
        </div>
    );
}
