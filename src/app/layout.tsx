import ErrorGenerator from "@/components/ErrorGenerator";
import MainNav from "@/components/MainNav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <MainNav />
        <div className="ml-44 p-3">{children}</div>
      </body>
    </html>
  );
}
