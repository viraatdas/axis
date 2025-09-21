import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-primary rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-primary rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Thesis</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-8 leading-relaxed">
              Computer programming is a rare modern skill that can{" "}
              <span className="text-primary font-normal">break cycles of poverty</span>, enabling students from 
              underserved backgrounds to earn six figures before most peers finish college.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed">
              Axis is a selective 8-week program that makes this transformation possible 
              through intensive coding education, mentorship, and lifelong community.
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-8">
              <Countdown />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Link
                href="/apply"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Apply for F25 Cohort
              </Link>
              
              <Link
                href="/program"
                className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            <p className="text-muted mt-8 text-lg">
              <span className="text-primary font-semibold">20 spots available</span> • F25 Cohort
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-lg text-foreground">Weeks</div>
              <div className="text-muted">Intensive program</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1:4</div>
              <div className="text-lg text-foreground">Mentor Ratio</div>
              <div className="text-muted">Personal guidance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-lg text-foreground">Alumni Network</div>
              <div className="text-muted">Lifelong support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            We believe coding is the ladder out of poverty.
          </h2>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Axis exists to make sure every kid has a chance to climb it. 
            Through our selective cohort model, we provide not just education, 
            but a pathway to opportunity and a community for life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">For Students</h3>
              <p className="text-muted">
                Learn from industry professionals, build real projects, 
                and join a network of ambitious peers who will support 
                your journey long after graduation.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">For Mentors</h3>
              <p className="text-muted">
                One hour a week can change a kid&apos;s life. Join our community 
                of engineers and volunteers making a direct impact on the 
                next generation of builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Partner Logos & Alumni Testimonials
          </h2>
          <p className="text-muted">
            Coming soon as we grow our community
          </p>
        </div>
      </section>
    </div>
  );
}