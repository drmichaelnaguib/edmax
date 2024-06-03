import "@/app/assets/scss/index.scss";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
