import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ana Silva",
        role: "Lead Developer",
        company: "TechCorp",
        avatar: "AS",
        content: "Chat Test Reporter saved our team! Now everyone is instantly aware of the test results. Super easy to implement.",
        rating: 5
    },
    {
        name: "Carlos Mendes",
        role: "DevOps Engineer",
        company: "StartupX",
        avatar: "CM",
        content: "Perfect for our CI/CD pipelines. The Google Chat integration keeps the whole team aligned with build statuses.",
        rating: 5
    },
    {
        name: "Marina Costa",
        role: "QA Manager",
        company: "InnovaTech",
        avatar: "MC",
        content: "Finally a tool that efficiently connects development and QA. The reports are clear and informative.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Developers <span className="text-secondary">love it</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        See what the community is saying
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card/50 border-border p-6 hover:bg-card/70 transition-all duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                                ))}
                            </div>

                            <p className="text-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarFallback className="bg-gradient-primary text-foreground font-semibold">
                                        {testimonial.avatar}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role} • {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
