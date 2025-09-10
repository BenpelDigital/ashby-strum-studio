import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Globe, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet Gary Crosby
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I have been providing guitar lessons for many years. I teach all ages and levels. 
              I teach rhythm and lead styles and also teach, if required, music theory and chord construction.
            </p>
            <p className="text-lg text-muted-foreground">
              I endeavor to make the lessons fun and can help with not just the various techniques 
              that make guitar playing interesting but can help you with your music creation in general.
            </p>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/f0fc6d4f-cec3-4963-a6a1-48740adc5f59.png"
              alt="Gary Crosby with acoustic guitar"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Teaching Philosophy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            All in all I try to make the learning process enjoyable as well as informative. 
            Whether you're new to guitar or have been playing for sometime and want to break 
            out of old molds into something new I'm sure I can come up with something tailor 
            made for your particular level or style.
          </p>
          <div className="bg-card p-8 rounded-lg shadow-card">
            <p className="text-xl text-guitar-wood font-semibold italic">
              "Every student has unique musical needs and direction. My flexible approach 
              helps develop individual potential, whether in folk, lead, jazz, rock, blues, 
              improvisation or theory."
            </p>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="/lovable-uploads/190a836a-6dad-4c40-8e1e-3b415125db79.png"
              alt="Gary Crosby with Stratocaster guitar"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Musical Journey
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Music className="h-6 w-6 text-guitar-wood mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Early Beginnings</h3>
                  <p className="text-muted-foreground">
                    Started off playing brass instruments as a kid studying under a top tutor in Sydney. 
                    Started playing guitar as a young teen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-guitar-wood mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">International Experience</h3>
                  <p className="text-muted-foreground">
                    Followed up with several years of playing acoustic guitar & singing mostly softer 
                    rock, blues & pop abroad, mainly Germany & Austria (professional level).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-guitar-wood mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Formal Training</h3>
                  <p className="text-muted-foreground">
                    Studied jazz guitar for a time under two excellent tutors while also working 
                    on blues and rock styles. Began teaching guitar & music theory in 1993.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-guitar-wood mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Teaching Excellence</h3>
                  <p className="text-muted-foreground">
                    Respected over the Midlands as a one-to-one centre of excellence. 
                    I have played lead to a high standard for decades & teach the same level of expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Songwriting & Performance */}
      <section className="bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Songwriter & Performer
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              I am also a songwriter & have performed original material during gigs finding that 
              my own material often received a very enthusiastic response. As part of lessons, 
              where appropriate, I include tips for songwriting & work with the student to bring 
              his or her ideas to fruition.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
                <Link to="/lessons">Explore Lessons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-card">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Conveniently Located
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I am based in Ashby de la Zouch in the East Midlands and serve Ashby and the surrounding areas. 
              Set in the heart of The National Forest, Ashby de la Zouch is a convenient location for people 
              seeking music tuition across Leicestershire and Derbyshire.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}