import './globals.css';

export const metadata = { title: 'DSA Vault', description: 'Your personal DSA problem tracker' };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
