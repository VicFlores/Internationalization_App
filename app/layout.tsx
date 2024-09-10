import { LocaleProvider } from './context/LocaleContext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </LocaleProvider>
  );
}
