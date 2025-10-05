import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema } from "@/utils/seoSchemas";

export default function Pricing() {
  const singleLessons = [
    {
      duration: "1 Hour",
      price: "£24",
      description: "Perfect for comprehensive learning and skill development"
    },
    {
      duration: "30 Minutes", 
      price: "£14",
      description: "Great for focused practice and technique refinement"
    }
  ];


  const policies = [
    {
      icon: AlertCircle,
      title: "24 Hour Cancellation",
      description: "Lessons canceled with less than 24 hour notice are charged at 50%"
    },
    {
      icon: AlertCircle,
      title: "No Show Policy",
      description: "Full amount chargeable for no attendance without prior notification"
    },
  ];

  return (
    <>
      <SEO
        title="Guitar Lesson Pricing & Packages"
        description="Affordable guitar lesson pricing in Ashby de la Zouch. 30-minute and 1-hour lessons available. Professional music education with flexible payment options."
        keywords="guitar lesson prices, guitar tuition cost, affordable guitar lessons, lesson pricing Ashby"
        canonical="/pricing"
        schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Pricing", url: "/pricing" }])}
      />
      <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Pricing
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Affordable, professional guitar lessons with flexible payment options
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-primary-foreground font-semibold">
              Excellent value for professional music education in the East Midlands
            </p>
          </div>
        </div>
      </section>

      {/* Single Lesson Pricing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Individual Lessons
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay as you go with our flexible single lesson pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {singleLessons.map((lesson, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-guitar-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-guitar-wood" />
                </div>
                <CardTitle className="text-2xl text-foreground">{lesson.duration} Lesson</CardTitle>
                <div className="text-4xl font-bold text-guitar-wood">{lesson.price}</div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{lesson.description}</p>
                <Button asChild className="w-full">
                  <Link to="/contact">Book This Lesson</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Policies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Lesson Policies
          </h2>
          <p className="text-lg text-muted-foreground">
            Please review our lesson policies to ensure a smooth learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {policies.map((policy, index) => (
            <Card key={index} className="shadow-card text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  policy.icon === CheckCircle ? "bg-green-100" : "bg-orange-100"
                }`}>
                  <policy.icon className={`h-8 w-8 ${
                    policy.icon === CheckCircle ? "text-green-600" : "text-orange-600"
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{policy.title}</h3>
                <p className="text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-guitar-wood text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Exceptional Value for Professional Teaching
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              With over 30 years of teaching experience, professional performance background, 
              and a commitment to each student's individual progress, Gary Crosby offers 
              exceptional value in music education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Expert Teaching</h3>
                <p className="text-primary-foreground/90">30+ years experience with proven results</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Flexible Approach</h3>
                <p className="text-primary-foreground/90">Lessons tailored to your musical goals</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Comprehensive</h3>
                <p className="text-primary-foreground/90">Theory, technique, and practical skills</p>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
                <Link to="/contact">Book Your First Lesson</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}