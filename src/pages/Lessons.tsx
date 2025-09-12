import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Guitar, Music2, Users, BookOpen, Wrench, Headphones } from "lucide-react";

export default function Lessons() {
  const services = [
    {
      icon: Guitar,
      title: "Electric Guitar Lessons",
      description: "Master the electric guitar with lessons covering rock, blues, jazz, and lead techniques. Learn to play with proper amplification and effects.",
      image: "/lovable-uploads/a15e58c6-10ba-4362-b4fc-2e0c8ff95b85.png"
    },
    {
      icon: Music2,
      title: "Acoustic Guitar Lessons", 
      description: "Develop your acoustic guitar skills with fingerpicking, strumming patterns, and chord progressions across folk, pop, and classical styles.",
      image: "/lovable-uploads/a8fd1305-4e24-4e36-9341-53a6e6da862f.png"
    },
    {
      icon: Headphones,
      title: "Bass Guitar Lessons",
      description: "Learn the foundation of rhythm with bass guitar lessons covering techniques, timing, and how to lock in with drums and other instruments.",
      image: "/lovable-uploads/3ac48dff-d99f-4f88-b3c9-3d8b3a7933d7.png"
    },
    {
      icon: BookOpen,
      title: "Music Theory & Chord Construction",
      description: "Understand the language of music with comprehensive theory lessons, chord progressions, scales, and harmonic analysis.",
      image: "/lovable-uploads/b3d3278d-9af5-4369-a651-00b8efd8f295.png"
    },
    {
      icon: Users,
      title: "All Ages Welcome",
      description: "From age 9 to 90, beginners to advanced players. Each lesson is tailored to the individual student's pace and musical interests.",
      image: "/lovable-uploads/9315b045-547d-42fe-8d31-0bfe86809fb3.png"
    },
    {
      icon: Wrench,
      title: "Guitar Setup & Maintenance",
      description: "Professional guitar setup services including string changes, intonation adjustment, and general maintenance to keep your instrument playing perfectly.",
      image: "/lovable-uploads/f0fc6d4f-cec3-4963-a6a1-48740adc5f59.png"
    }
  ];

  const styles = [
    { name: "Rock", description: "Classic and modern rock techniques, power chords, and lead guitar" },
    { name: "Blues", description: "Traditional and modern blues, bending techniques, and improvisation" },
    { name: "Jazz", description: "Jazz chords, scales, improvisation, and complex harmony" },
    { name: "Folk", description: "Fingerpicking patterns, traditional songs, and storytelling through music" },
    { name: "Pop", description: "Contemporary popular music, chord progressions, and modern techniques" },
    { name: "Classical", description: "Classical guitar techniques, reading music, and traditional repertoire" }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guitar Lessons & Services
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Comprehensive guitar education tailored to your individual needs and musical goals
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
            <Link to="/contact">Book Your First Lesson</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            We've Got You Covered
          </h2>
          <p className="text-lg text-muted-foreground">
            From beginner to advanced, acoustic to electric, we offer comprehensive guitar education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-guitar-wood/20"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <service.icon className="h-6 w-6 text-guitar-wood" />
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Styles Covered */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All Styles Covered
            </h2>
            <p className="text-lg text-muted-foreground">
              Whatever your musical preference, we'll help you master your chosen style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-guitar-wood mb-2">{style.name}</h3>
                  <p className="text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Personalized Teaching Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gary has a flexible approach in developing students' individual musical needs and direction, 
                whether it's in folk, lead, jazz, rock, blues, improvisation or theory. The school teaches 
                using electric or acoustic guitars and can give advice and practical help before students 
                purchase instruments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-guitar-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-guitar-wood" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Individual Focus</h3>
                  <p className="text-sm text-muted-foreground">Lessons tailored to your specific goals and learning style</p>
                </div>
                <div className="text-center">
                  <div className="bg-guitar-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-guitar-wood" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Comprehensive</h3>
                  <p className="text-sm text-muted-foreground">Theory, technique, and practical application combined</p>
                </div>
                <div className="text-center">
                  <div className="bg-guitar-wood/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music2 className="h-8 w-8 text-guitar-wood" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Fun & Engaging</h3>
                  <p className="text-sm text-muted-foreground">Motivational and enjoyable learning experience</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-guitar-wood text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact Gary today to discuss your musical goals and book your first lesson
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-guitar-wood">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}