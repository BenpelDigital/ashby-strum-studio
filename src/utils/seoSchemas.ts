export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  "name": "Ashby Guitar Tuition",
  "description": "Professional guitar lessons in Ashby de la Zouch with Gary Crosby. Expert teaching for all ages and levels.",
  "url": "https://37d7c052-9311-4258-8a46-399ec2886015.lovableproject.com",
  "telephone": "01530-457659",
  "email": "garydean777@yahoo.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ashby de la Zouch",
    "addressLocality": "Leicestershire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.7463",
    "longitude": "-1.4700"
  },
  "areaServed": [
    "Ashby de la Zouch",
    "Leicester",
    "Derby",
    "Burton-on-Trent",
    "Leicestershire"
  ],
  "priceRange": "££",
  "currenciesAccepted": "GBP",
  "paymentAccepted": "Cash, Bank Transfer",
  "openingHours": "Mo-Su 09:00-20:00",
  "instructor": {
    "@type": "Person",
    "name": "Gary Crosby",
    "jobTitle": "Guitar Instructor",
    "description": "Over 40 years of guitar playing and 25+ years of teaching experience"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ashby Guitar Tuition",
  "image": "https://37d7c052-9311-4258-8a46-399ec2886015.lovableproject.com/lovable-uploads/a8fd1305-4e24-4e36-9341-53a6e6da862f.png",
  "telephone": "01530-457659",
  "email": "garydean777@yahoo.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ashby de la Zouch",
    "addressRegion": "Leicestershire",
    "addressCountry": "GB"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Guitar Lessons",
  "provider": {
    "@type": "MusicSchool",
    "name": "Ashby Guitar Tuition"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ashby de la Zouch"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Guitar Lesson Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "30 Minute Guitar Lesson",
          "description": "Perfect for younger students or those with busy schedules"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "45 Minute Guitar Lesson",
          "description": "Our most popular lesson length"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "60 Minute Guitar Lesson",
          "description": "Ideal for advanced students or in-depth learning"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://37d7c052-9311-4258-8a46-399ec2886015.lovableproject.com${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gary Crosby",
  "jobTitle": "Professional Guitar Instructor",
  "description": "Over 40 years of guitar playing experience and 25+ years of teaching",
  "knowsAbout": ["Guitar", "Music Theory", "Rock Music", "Jazz", "Blues", "Folk Music"],
  "alumniOf": {
    "@type": "EducationOrganization",
    "name": "Derby College"
  }
};
