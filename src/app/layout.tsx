import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "L.E.V.I",
  description: "Luz, Energia, Vida e Inovação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
