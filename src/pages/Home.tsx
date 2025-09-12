import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Guitar, Users, Award, Music, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Guitar Lessons in Ashby
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A talented teacher and musician, Gary Crosby has helped many achieve their 
                dreams through his guitar lessons. Gary has a flexible approach in developing 
                students' individual musical needs and direction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Book a Lesson</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/93596896-3608-495a-ad7e-2a7a9136ebf0.png"
                alt="Gary Crosby teaching guitar"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Experience Professional Guitar Teaching
          </h2>
          <p className="text-lg text-muted-foreground">
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
      <section className="bg-accent/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              We've Got You Covered
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive guitar education for all ages and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Guitar className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Electric & Acoustic</h3>
                <p className="text-muted-foreground">
                  Learn on both electric and acoustic guitars with expert guidance
                  on technique and style.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">All Styles</h3>
                <p className="text-muted-foreground">
                  Rock, jazz, folk, blues, improvisation, and music theory - 
                  whatever your passion.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ages 9 to 90</h3>
                <p className="text-muted-foreground">
                  From young beginners to mature students, everyone is welcome
                  to learn and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Teaching</h3>
                <p className="text-muted-foreground">
                  Over 30 years of teaching experience with a proven track record
                  of student success.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bass Guitar</h3>
                <p className="text-muted-foreground">
                  Bass guitar lessons available for those looking to explore
                  the rhythm section.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Guitar className="h-12 w-12 text-guitar-wood mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Setup & Maintenance</h3>
                <p className="text-muted-foreground">
                  Guitar string changes and setup services to keep your 
                  instrument in perfect condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from some of Gary's successful students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 italic">
                "Gary has been a fantastic teacher for my son who is currently in his second 
                year under his tuition and can play beautifully. Gary's tuition is rounded. 
                Theory, reading music, chords and different techniques and styles."
              </p>
              <p className="font-semibold text-foreground">— Themis Gikopoulou</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 italic">
                "Top teacher and guitarist. Gary can teach all different types of playing, 
                whatever type of music you are into. Very patient, excellent value for money, 
                and above all provides enjoyable lessons."
              </p>
              <p className="font-semibold text-foreground">— Ant Dales</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-guitar-wood text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Set in the heart of The National Forest, Ashby de la Zouch is a convenient 
            location for people seeking music tuition across Leicestershire and Derbyshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get in Touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}