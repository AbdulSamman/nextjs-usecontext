import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/site.scss";
import { AppProvider } from "../AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <head />
        <body>
          <AppProvider>{children}</AppProvider>
        </body>
      </html>
    </>
  );
}
//automatisch erstellt
