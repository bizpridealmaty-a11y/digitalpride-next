import { Unbounded, Onest } from 'next/font/google';

export const unbounded = Unbounded({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-unbounded',
    display: 'swap',
    fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const onest = Onest({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-onest',
    display: 'swap',
    fallback: ['system-ui', 'Arial', 'sans-serif'],
});
