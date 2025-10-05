import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Guitar, Users, Award, Music, Phone, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from "@/utils/seoSchemas";

export default function Home() {
  return (
    <>
      <SEO
        title="Professional Guitar Lessons in Ashby de la Zouch"
        description="Professional guitar lessons in Ashby de la Zouch with Gary Crosby. Expert teaching for all ages and levels, covering rock, jazz, blues, folk. Electric, acoustic, and bass guitar lessons available."
        keywords="guitar lessons Ashby, guitar teacher Ashby de la Zouch, guitar tuition Leicestershire, learn guitar Ashby, electric guitar lessons, acoustic guitar lessons"
        canonical="/"
        schema={[organizationSchema, localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }])]}
      />
      <div className="space-y-8 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Guitar Lessons in Ashby
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
                A talented teacher and musician, Gary Crosby has helped many achieve their 
                dreams through his guitar lessons. Gary has a flexible approach in developing 
                students' individual musical needs and direction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Book a Lesson</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/93596896-3608-495a-ad7e-2a7a9136ebf0.png"
                alt="Gary Crosby teaching guitar lessons in Ashby de la Zouch"
                className="rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md mx-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Experience Professional Guitar Teaching
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Watch Gary in action and see why students love learning with Ashby Guitar Tuition
          </p>
        </div>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/VnP62NH1icA"
            title="Gary Crosby Guitar Teaching"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-accent/50 py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              We've Got You Covered
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive guitar education for all ages and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Guitar className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Electric & Acoustic</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Learn on both electric and acoustic guitars with expert guidance
                  on technique and style.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Music className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">All Styles</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Rock, jazz, folk, blues, improvisation, and music theory - 
                  whatever your passion.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Ages 9 to 90</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  From young beginners to mature students, everyone is welcome
                  to learn and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Teaching</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Over 30 years of teaching experience with a proven track record
                  of student success.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Music className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Bass Guitar</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Bass guitar lessons available for those looking to explore
                  the rhythm section.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Guitar className="h-10 w-10 sm:h-12 sm:w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Setup & Maintenance</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Guitar string changes and setup services to keep your 
                  instrument in perfect condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Hear from some of Gary's successful students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                "Gary has been a fantastic teacher for my son who is currently in his second 
                year under his tuition and can play beautifully. Gary's tuition is rounded. 
                Theory, reading music, chords and different techniques and styles."
              </p>
              <p className="font-semibold text-foreground">— Themis Gikopoulou</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                "Top teacher and guitarist. Gary can teach all different types of playing, 
                whatever type of music you are into. Very patient, excellent value for money, 
                and above all provides enjoyable lessons."
              </p>
              <p className="font-semibold text-foreground">— Ant Dales</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Button asChild variant="outline">
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-guitar-wood text-primary-foreground py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
            Set in the heart of The National Forest, Ashby de la Zouch is a convenient 
            location for people seeking music tuition across Leicestershire and Derbyshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get in Touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}