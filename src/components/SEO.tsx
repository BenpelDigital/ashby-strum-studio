import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://37d7c052-9311-4258-8a46-399ec2886015.lovableproject.com/lovable-uploads/a8fd1305-4e24-4e36-9341-53a6e6da862f.png",
  ogType = "website",
  schema
}: SEOProps) => {
  const fullTitle = `${title} | Ashby Guitar Tuition`;
  const baseUrl = "https://37d7c052-9311-4258-8a46-399ec2886015.lovableproject.com";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Combine all schemas into a single JSON-LD graph
  const combinedSchema = schema 
    ? Array.isArray(schema)
      ? { "@context": "https://schema.org", "@graph": schema.map(s => ({ ...s, "@context": undefined }))}
      : schema
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ashby Guitar Tuition" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {combinedSchema && (
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      )}
    </Helmet>
  );
};
