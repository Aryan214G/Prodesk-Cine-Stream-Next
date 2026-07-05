import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cine Stream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
        <Navbar />
        {children}
    </FavoritesProvider>
      </body>
    </html>
  );
}