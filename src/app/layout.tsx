import type { Metadata } from "next";

import "../styles/main.css";
import "../styles/page.css";

export const metadata: Metadata = {
  title: "Nathan Somsa-ard | Full-Stack Software Developer | React | .NET | Power Platform",
  description:
    "Hello! I am Nathan Somsa-ard. I am a full-stack software developer well-versed in TypeScript and C#. I'll be happy to help you with the next project!",
    manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
