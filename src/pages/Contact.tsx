import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema, localBusinessSchema } from "@/utils/seoSchemas";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Telephone", value: "01530 457659" },
        { label: "Mobile", value: "07877 606771" }
      ],
      description: "Call during lesson hours for the quickest response"
    },
    {
      icon: Mail,
      title: "Email", 
      details: [
        { label: "Email", value: "garydean777@yahoo.co.uk" }
      ],
      description: "Email for lesson inquiries and scheduling"
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        { label: "Address", value: "Oakham Grove, Ashby de la Zouch, Leicestershire LE65 2QP" }
      ],
      description: "Conveniently located in the heart of The National Forest"
    }
  ];

  const lessonHours = [
    { day: "Monday - Friday", hours: "Flexible scheduling available" },
    { day: "Weekends", hours: "By appointment" },
    { day: "School Holidays", hours: "Extended availability" }
  ];

  return (
    <>
      <SEO
        title="Contact Us - Book Your Guitar Lesson Today"
        description="Contact Gary Crosby to book your guitar lesson in Ashby de la Zouch. Call 01530 457659 or email garydean777@yahoo.co.uk. Flexible scheduling available."
        keywords="contact guitar teacher, book guitar lesson Ashby, guitar lesson booking, contact Gary Crosby"
        canonical="/contact"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])]}
      />
      <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ready to start your musical journey? Contact Gary today to discuss your goals 
            and book your first lesson.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-primary-foreground font-semibold">
              Serving Leicestershire and Derbyshire from Ashby de la Zouch
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple ways to reach Gary for lesson inquiries and bookings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="bg-guitar-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-guitar-wood" />
                </div>
                <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-foreground">{detail.label}</p>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred way to get in touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Now</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with Gary to discuss your musical goals and schedule your first lesson
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full">
                    <a href="tel:01530457659">Call 01530 457659</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:07877606771">Mobile 07877 606771</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Send Email</h3>
                <p className="text-muted-foreground mb-6">
                  Email your questions about lessons, pricing, or scheduling preferences
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:garydean777@yahoo.co.uk?subject=Guitar%20Lesson%20Inquiry">Email Gary</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-guitar-wood" />
                <span>Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Studio Address</h3>
                <p className="text-muted-foreground">
                  Oakham Grove<br />
                  Ashby de la Zouch<br />
                  Leicestershire LE65 2QP
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Convenient Location</h3>
                <p className="text-muted-foreground">
                  Set in the heart of The National Forest, Ashby de la Zouch is easily accessible 
                  for students across Leicestershire and Derbyshire.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-guitar-wood" />
                <span>Lesson Times</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lessonHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-guitar-wood/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Flexible scheduling available to accommodate work, school, and family commitments. 
                  Contact Gary to discuss the best times for your lessons.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-guitar-wood text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Follow on Social Media
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Stay connected for updates, tips, and student showcases
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
              <a href="#" className="flex items-center space-x-2">
                <Facebook className="h-5 w-5" />
                <span>Follow on Facebook</span>
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
            <p className="text-primary-foreground/90 mb-6">
              Don't wait to start your musical journey. Contact Gary today and take the first 
              step toward achieving your guitar playing dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
                <a href="tel:01530457659">Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-guitar-wood">
                <a href="mailto:garydean777@yahoo.co.uk?subject=Guitar%20Lesson%20Inquiry">Email Gary</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}