import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayan Moni Hazarika | Principal IoT Systems Architect",
  description: "Engineering the Autonomy of Things at Scale. Principal IoT Architect specializing in high-concurrency cloud systems and industrial IIoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
