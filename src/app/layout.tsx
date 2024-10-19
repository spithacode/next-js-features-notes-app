import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Notes App
            </Link>
            <div className="space-x-4">
              <Link href="/notes">Notes</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/error-page">Error</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
