import '@/public/phosphor/regular/regular.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Prototipagem',
    description: 'Meu portifólio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
