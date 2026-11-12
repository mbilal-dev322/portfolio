import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Bilal — AI Software Engineer",
  description:
    "Portfolio of Muhammad Bilal, AI Software Engineer: Python, Django, FastAPI, LLMs, RAG, AI agents, and automation.",
  openGraph: {
    title: "Muhammad Bilal — AI Software Engineer",
    description:
      "AI Software Engineer with 3 years of experience: Python, Django, FastAPI, LLMs, RAG pipelines, and AI agents.",
    type: "website",
    images: [{ url: "/generated/project-growlio.jpg", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal — AI Software Engineer",
    description:
      "Python · Django · FastAPI · LLMs · RAG · AI Agents — portfolio and resume.",
    images: ["/generated/project-growlio.jpg"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
