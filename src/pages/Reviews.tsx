import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { SEO } from "@/components/SEO";
import { breadcrumbSchema, faqSchema } from "@/utils/seoSchemas";

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
    },
    {
      name: "Emma Machin",
      rating: 5,
      review: "Can not say anything negative about Gary he is a fantastic instructor. My boys started when they were 14 and 10. They both love working with Gary. I think it is important to note that Gary adapts his approach for each student to support them and proceed at their pace. Over my boy's time, we have had to change days and times as my own commitments kept changing, and Gary always did his 100% best to accommodate. I love the different types and decades of music that Gary has exposed my boys to. My boys describe Gary as fun, exciting, interesting, and knowledgeable. In short Ashby Guitar Tuition is a great place to learn guitar 😀",
      relationship: "Parent of students"
    },
    {
      name: "John Millington",
      rating: 5,
      review: "I have been having lessons with Gary for about 2 years. I was a novice on electric guitar and wanted to learn to play blues. We have covered songs, theory, scales, soloing, 12 bar blues and much more. Gary tailors my lessons to my interests and ability. With me, he does not work from a book, yet he introduces new concepts each lesson by developing what we have previously covered or taking something I have been trying out to the next level - with an emphasis on simplicity, precision and timing. I particularly like the videos he makes of his playing for you to learn from and his use of backing tracks. Gary is patient, fun and thoroughly pleasant. I strongly recommend him.",
      relationship: "Student"
    },
    {
      name: "Ray Moorehead",
      rating: 5,
      review: "Been visiting Gary weekly for a couple of months now. Retired beginner who wants to be better than just be strumming chords. Am really enjoying the coaching and learning from Gary. He's a great listener as well as musicial coach. He allows me to learn at my own pace, has helped me iron out faults and learn the correct technique with the resulting progress being just as I wanted. I have improved from how I was when I started and looking forward to continuing to learn and grow my playing style with his tuition. Highly recommend 😊",
      relationship: "Student"
    },
    {
      name: "Rebecca Poole",
      rating: 5,
      review: "My son who has just turned 10 has been having guitar lessons with Gary for over a year now. He started off having lessons at school but he had reached a point where he wasn't learning anything anymore and was starting to lose a bit of interest. I contacted Gary and it was best decision I made. Since my son has been having lessons with Gary he has come on leaps and bounds and his interest in the guitar has not wavered. Gary trys to find music that interests him while also helping him improve, he also adds in some music theory as my son wants to take his playing seriously. We find Gary to be patient and kind and my son never wants to miss a lesson. Gary pushes just enough and in a gentle way so my son leaves every week feeling positive but his mistakes addressed so he is not learning bad habits. I would highly reccomend Ashby Guitar Tuition to anyone who wants to learn to play guitar, especially to a high standard.",
      relationship: "Parent of student"
    },
    {
      name: "Karen Riley",
      rating: 5,
      review: "My daughter has been having lessons with Gary for 6 months now and has really improved her playing. Gary teaches students practical and theory based skills and knowledge whilst keeping lessons fun. He is friendly and tailors lessons to specific interests/needs and has given great advice on the best value & quality guitars- would highly recommend.",
      relationship: "Parent of student"
    },
    {
      name: "Taylor Innes",
      rating: 5,
      review: "Great teacher and great guy! I've been having lessons with Gary for almost a year now and I've come so far in that short time, he's a great teacher who always makes lessons fun. He even makes music theory fun! I would recommend him to anyone who wants to have lessons!",
      relationship: "Student"
    },
    {
      name: "Andy Hall",
      rating: 5,
      review: "As a begginer with no apparent natural musical ability, I tried to teach myself guitar with guidance from YouTube and other online platforms for a few years. I grew disappointed and frustrated with my lack of progress. I then reached out to Gary at Ashby Guitar Tuition about 9 months ago. Since then I've been really pleased with my progress. He has helped me iron out the bad techniques I arrived with, and has set the foundatins for me to be able to develop my guitar playing. I've found Gary to be a very patient teacher, who adapts his teaching style to suit my pace of learning. He has tailored the lessons to suit the music styles I like, which helps keep me motivated in practicing. I now enjoy practicing and look forward to my lessons with him.",
      relationship: "Student"
    },
    {
      name: "Matthew Munro",
      rating: 5,
      review: "Been playing guitar for over 20 years and have been in a rut for quite some time when I can across Gary on Google. I initially came to focus on finally learning some theory (which I am actually doing!) but I have also started learning proper technique and also expanding into other genres. Gary has helped me fall in love with guitar again and I love working with him. Highly recommended!",
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
    <>
      <SEO
        title="Student Reviews & Testimonials"
        description="Read reviews from satisfied students and parents. Discover why Gary Crosby is a trusted guitar teacher in Ashby de la Zouch with proven results."
        keywords="guitar teacher reviews, guitar lesson testimonials, Ashby guitar tuition reviews, student feedback"
        canonical="/reviews"
        schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Reviews", url: "/reviews" }])}
      />
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
    </>
  );
}