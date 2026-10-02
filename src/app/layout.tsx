import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${profileData.name} — ${profileData.role}`,
  description: `${profileData.name} is a ${profileData.role} based in Sri Lanka, passionate about problem solving, scalable architecture, and crafting clean web applications.`,
  keywords: [
    "Anfas Arshad",
    "Software Engineer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Keycloak",
    "MySQL",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: profileData.name, url: "https://github.com/anfasarshad" }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anfasarshad.dev",
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.tagline,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
