export const metadata = {
  title: "Bhumi 18th Birthday",
  description: "A special birthday surprise"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
