export const metadata = {
  title: "Bhumi's 18th Birthday",
  description: "A special surprise from Shreyaa 💙",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
