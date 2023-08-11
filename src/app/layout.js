import './globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'OKTOPALS LLC',
  description:
    'Software Development Company and the core focus is to build useful and easy-to-use software solutions for our customers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
