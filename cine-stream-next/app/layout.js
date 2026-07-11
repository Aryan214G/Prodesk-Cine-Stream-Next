import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cine Stream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
        <Navbar />
        {children}
    </StoreProvider>
      </body>
    </html>
  );
}