import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lpkpms.my.id";

export const SITE_NAME = "LPK Panca Multiguna Sukses";

/**
 * Build a per-page Metadata with canonical URL + Open Graph url.
 * Next.js reads `alternates.canonical` to emit <link rel="canonical">.
 */
export function pageSeo(opts: {
  path: string; // e.g. "/program/pemagangan" or "/"
  title: string; // page title WITHOUT site suffix
  description: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const canonical = `${SITE_URL}${opts.path === "/" ? "" : opts.path}`;
  // Avoid duplicating the site suffix when a page title already carries it.
  const fullTitle = opts.title.includes(SITE_NAME)
    ? opts.title
    : `${opts.title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description: opts.description,
    keywords: opts.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: opts.ogImage
            ? `${SITE_URL}${opts.ogImage}`
            : `${SITE_URL}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${opts.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [
        opts.ogImage
          ? `${SITE_URL}${opts.ogImage}`
          : `${SITE_URL}/images/logo.png`,
      ],
    },
  };
}

/**
 * BreadcrumbList JSON-LD for Google rich results.
 * Pass crumbs from root → current page.
 */
export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/** FAQPage JSON-LD for FAQ rich results. */
export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** EducationalOccupationalProgram JSON-LD for program detail pages. */
export function programJsonLd(program: {
  title: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: program.title,
    description: program.description,
    url: `${SITE_URL}${program.path}`,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    ...(program.category
      ? {
          educationalCredentialAwarded: {
            "@type": "EducationalOccupationalCredential",
            name: program.category,
          },
        }
      : {}),
  };
}

/**
 * Server component helper: renders JSON-LD <script> tags.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
