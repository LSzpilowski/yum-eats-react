import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "LucAround Restaurant",
    template: `LucAround Restaurant`,
  },
  description: "Restaurant App - learning purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fontSans.className, "min-h-screen antialiased w-full overflow-y-scroll")}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="w-full min-h-screen flex flex-col justify-between items-center">
            <Navbar />
            <div
              className="w-full flex flex-col items-center "
            >
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
