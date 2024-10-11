import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: "Website Title",
  description: "This is a website description",
};

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}