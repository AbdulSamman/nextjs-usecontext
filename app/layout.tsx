"use client";
import "../styles/site.scss";
//tailwind
import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
//automatisch erstellt
