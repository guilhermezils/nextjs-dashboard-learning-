import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

// This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your <html> and <body> tags, and add metadata, scripts, and styles that are shared across all pages.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>{" "}
      {/* Here, you're also adding the Tailwind antialiased class which smooths out the font. This is a good practice to follow when using Tailwind CSS. */}
    </html>
  );
}
