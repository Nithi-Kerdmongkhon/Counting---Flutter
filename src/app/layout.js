import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          
            <main className="main-content">
              {children}
            </main>
        </div>
      </body>
    </html>
  );
}
