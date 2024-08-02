import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          
            <main className="main-content">
              {children}
            </main>
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}