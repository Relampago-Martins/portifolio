import '@/public/phosphor/regular/regular.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portifólio',
    description: 'Meu portifólio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${poppins.className} bg-background my-30 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
