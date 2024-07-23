import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body> {/* Here, you're also adding the Tailwind antialiased class which smooths out the font. This is a good practice to follow when using Tailwind CSS. */}
    </html>
  );
}