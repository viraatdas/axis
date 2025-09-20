import Link from "next/link";

export default function Program() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            8 Weeks That Change Everything
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Our intensive cohort model combines structured learning with real-world projects, 
            mentorship, and career preparation—all designed to launch your coding journey.
          </p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Program Structure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Weeks 1-2 */}
            <div className="bg-background p-6 rounded-lg border border-primary/20">
              <div className="text-primary font-bold text-lg mb-2">Weeks 1–2</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Foundations</h3>
              <ul className="text-muted space-y-2">
                <li>• Programming fundamentals</li>
                <li>• Problem-solving mindset</li>
                <li>• Development environment</li>
                <li>• Version control basics</li>
                <li>• Cohort bonding</li>
              </ul>
            </div>

            {/* Weeks 3-5 */}
            <div className="bg-background p-6 rounded-lg border border-primary/20">
              <div className="text-primary font-bold text-lg mb-2">Weeks 3–5</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Projects</h3>
              <ul className="text-muted space-y-2">
                <li>• Build real applications</li>
                <li>• Team collaboration</li>
                <li>• Code reviews</li>
                <li>• User experience design</li>
                <li>• Technical presentations</li>
              </ul>
            </div>

            {/* Weeks 6-7 */}
            <div className="bg-background p-6 rounded-lg border border-primary/20">
              <div className="text-primary font-bold text-lg mb-2">Weeks 6–7</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Pipeline</h3>
              <ul className="text-muted space-y-2">
                <li>• Resume building</li>
                <li>• Interview preparation</li>
                <li>• Portfolio development</li>
                <li>• Industry connections</li>
                <li>• Internship pathways</li>
              </ul>
            </div>

            {/* Week 8 */}
            <div className="bg-background p-6 rounded-lg border border-primary/20">
              <div className="text-primary font-bold text-lg mb-2">Week 8</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Showcase</h3>
              <ul className="text-muted space-y-2">
                <li>• Final presentations</li>
                <li>• Demo day</li>
                <li>• Alumni induction</li>
                <li>• Celebration</li>
                <li>• Next steps planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Model */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Hybrid Learning Model
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Online-First</h3>
                  <p className="text-muted">
                    Core curriculum delivered through interactive online sessions, 
                    allowing students from anywhere to participate. Flexible scheduling 
                    accommodates school and family commitments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">In-Person Touchpoints</h3>
                  <p className="text-muted">
                    Strategic in-person gatherings for team building, project showcases, 
                    and networking events. These moments create lasting bonds and 
                    memorable experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1:1 Mentorship</h3>
                  <p className="text-muted">
                    Every student is paired with an industry professional who provides 
                    personalized guidance, career advice, and ongoing support throughout 
                    the program and beyond.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Weekly Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-primary/20">
                  <span className="text-foreground">Live Sessions</span>
                  <span className="text-primary">3 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/20">
                  <span className="text-foreground">Project Work</span>
                  <span className="text-primary">5 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/20">
                  <span className="text-foreground">Mentor Sessions</span>
                  <span className="text-primary">1 hour</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Peer Collaboration</span>
                  <span className="text-primary">2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Lifelong Alumni Network
          </h2>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Graduation is just the beginning. Our alumni network provides ongoing support, 
            advanced learning opportunities, job referrals, and a community of peers 
            who understand your journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Tracks</h3>
              <p className="text-muted">
                Specialized courses in AI, web development, mobile apps, and more
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Job Pipeline</h3>
              <p className="text-muted">
                Direct connections to internships and entry-level positions
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Peer Network</h3>
              <p className="text-muted">
                Lifelong connections with ambitious builders and creators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-muted mb-12">
            Join the next cohort of builders, creators, and changemakers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/apply"
              className="bg-primary text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Apply for W25 Cohort
            </Link>
            
            <Link
              href="/about"
              className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-background transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
