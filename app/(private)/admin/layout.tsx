import React from 'react';
import "./globals.css";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {  
    return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
      {children}
      </body>
    </html>
  );
}