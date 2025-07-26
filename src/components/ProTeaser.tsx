import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, BarChart3, Filter, Users, Bell, Sparkles } from "lucide-react";

const ProTeaser = () => {
    const proFeatures = [
        {
            icon: BarChart3,
            title: "Advanced Dashboards",
            description: "View detailed metrics from your tests"
        },
        {
            icon: Filter,
            title: "Smart Filters",
            description: "Set up custom notifications per project"
        },
        {
            icon: Users,
            title: "Multiple Rooms",
            description: "Send alerts to different channels based on criteria"
        },
        {
            icon: Bell,
            title: "Custom Alerts",
            description: "Control when and how you get notified"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-tech p-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span className="text-secondary font-medium">Coming Soon</span>
                        </div>

                        <h2 className="text-5xl font-bold mb-6">
                            🚀 <span className="bg-gradient-primary bg-clip-text text-transparent">Pro</span> Version
                        </h2>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Take your testing to the next level with advanced monitoring features,
                            detailed dashboards, and multi-room support for Google Chat.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {proFeatures.map((feature, index) => (
                            <div key={index} className="text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                                    <feature.icon className="w-8 h-8 text-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center justify-center gap-4">
                                <Badge variant="outline" className="text-muted-foreground">
                                    Web Dashboard
                                </Badge>
                                <Badge variant="outline" className="text-muted-foreground">
                                    Advanced API
                                </Badge>
                                <Badge variant="outline" className="text-muted-foreground">
                                    Premium Support
                                </Badge>
                            </div>
                        </div>

                        <Button variant="hero" size="lg" className="text-lg">
                            <Rocket className="w-5 h-5" />
                            Get Notified About Launch
                        </Button>

                        <p className="text-sm text-muted-foreground">
                            Sign up to be the first to know when the Pro version is available
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default ProTeaser;
