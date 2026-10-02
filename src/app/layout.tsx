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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anfasarshad.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.name} — ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: `${profileData.name} is a ${profileData.role} based in Sri Lanka, passionate about problem solving, scalable architecture, and crafting clean web applications.`,
  keywords: [
    "Anfas Arshad",
    "Anfas",
    "Arshad",
    "Anfas Arshad Portfolio",
    "Anfas Arshad Software Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "Java Developer Sri Lanka",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Keycloak",
    "MySQL",
    "Sri Lanka Developer",
    "Portfolio",
  ],
  authors: [{ name: profileData.name, url: "https://github.com/AnfasArshad" }],
  creator: profileData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.tagline,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: profileData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.role}`,
    description: profileData.tagline,
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "vLt1tIdmQm7xCa-iVah5nwDeZdpMYhv7rE19KhppA3A",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profileData.name,
      givenName: "Anfas",
      familyName: "Arshad",
      jobTitle: "Software Engineer",
      description: profileData.tagline,
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      sameAs: [
        "https://github.com/AnfasArshad",
        "https://www.linkedin.com/in/anfas-arshad-887108221",
        "https://wa.me/94788999196",
      ],
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Development",
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Keycloak",
        "REST APIs",
        "Microservices",
        "Database Architecture",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Coventry University",
        },
        {
          "@type": "EducationalOrganization",
          name: "National Institute of Business Management (NIBM)",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wattala",
        addressCountry: "Sri Lanka",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profileData.name} — Portfolio`,
      description: profileData.tagline,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
