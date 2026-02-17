import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jenny Williams',
    role: 'Salon Owner',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny',
    content:
      'SalonHub has completely transformed how I manage my salon. The scheduling system alone has saved me hours every week. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Johnson',
    role: 'Salon Manager',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    content:
      'The analytics dashboard gives me insights I never had before. I can now make data-driven decisions to grow my business faster.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Beauty Director',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content:
      'Customer support is exceptional. Any time I had a question, the team was there to help. It truly sets them apart.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Success stories from real professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how salon owners are transforming their businesses with SalonHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-border"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 md:p-12 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                Ready to elevate your salon?
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Join thousands of salon owners using SalonHub to grow their business.
              </p>
            </div>
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
