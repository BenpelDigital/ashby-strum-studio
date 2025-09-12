import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Themis Gikopoulou",
      rating: 5,
      review: "Gary has been a fantastic teacher for my son who is currently in his second year under his tuition and can play beautifully. Gary's tuition is rounded. Theory, reading music, chords and different techniques and styles. His friendly and patient approach helps impatient learners, gently guiding them to perfection. Overall an excellent tutor.",
      relationship: "Parent of student"
    },
    {
      name: "Paula Reeves", 
      rating: 5,
      review: "Gary has taught guitar to my son for a couple of years now and he has progressed to a very competent level. You will rarely find my son without a guitar slung over his shoulder (almost to the point of obsession!) and he can usually replicate a tune heard on the radio within minutes, just by listening by ear. Thanks for your patience, Gary: you instill a love of music in your pupils which should last a lifetime.",
      relationship: "Parent of student"
    },
    {
      name: "Ant Dales",
      rating: 5, 
      review: "Top teacher and guitarist. Gary can teach all different types of playing, whatever type of music you are into. Very patient, excellent value for money, and above all provides enjoyable lessons that help you to learn at your own pace. Can't rate him highly enough.",
      relationship: "Student"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-guitar-amber text-guitar-amber" : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Student Reviews
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Hear what students and parents say about their experience with Gary Crosby
          </p>
          <div className="flex items-center justify-center space-x-2">
            <StarRating rating={5} />
            <span className="text-primary-foreground/90 ml-2">Consistently 5-star rated</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <Quote className="h-8 w-8 text-guitar-wood/30" />
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6 flex-grow">
                  "{review.review}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.relationship}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Over 30 years of teaching has produced many successful musicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-guitar-wood mb-3">
                  Developing Musical Passion
                </h3>
                <p className="text-muted-foreground">
                  Many students develop such a love for music that they rarely put their guitars down. 
                  Gary's approach instills a lifelong passion for music that extends far beyond the lessons.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-guitar-wood mb-3">
                  Rapid Skill Development
                </h3>
                <p className="text-muted-foreground">
                  Students often progress to the point where they can replicate songs by ear within minutes 
                  of hearing them, demonstrating the comprehensive musical education they receive.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-guitar-wood mb-3">
                  Rounded Musical Education
                </h3>
                <p className="text-muted-foreground">
                  Students learn theory, reading music, chords, and various techniques and styles, 
                  creating well-rounded musicians rather than just guitar players.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-guitar-wood mb-3">
                  Patient & Enjoyable Learning
                </h3>
                <p className="text-muted-foreground">
                  Gary's patient approach helps even impatient learners, making the journey enjoyable 
                  while guiding students toward musical excellence at their own pace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Gary Special */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-card bg-gradient-to-r from-guitar-wood to-guitar-amber text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              What Makes Gary Special?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Patience</h3>
                <p className="text-primary-foreground/90">
                  Works with students at their own pace, ensuring comfortable progress
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Versatility</h3>
                <p className="text-primary-foreground/90">
                  Teaches all styles and adapts to each student's musical interests
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Value</h3>
                <p className="text-primary-foreground/90">
                  Excellent value for money with comprehensive, enjoyable lessons
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-guitar-wood text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Start your musical journey with a teacher who truly cares about your progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-warm-white text-guitar-wood hover:bg-warm-white/90">
              <Link to="/contact">Book Your First Lesson</Link>
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