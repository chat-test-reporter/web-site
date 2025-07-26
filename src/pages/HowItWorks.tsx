import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Settings, Play, Send, CheckCircle } from "lucide-react";

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header with back button */}
            <div className="border-b border-border">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                        How It Works
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Set up Chat Test Reporter in 4 simple steps and start receiving your test reports in Google Chat.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Step 1: Install */}
                    <Card className="relative overflow-hidden">
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="text-lg px-3 py-1">1</Badge>
                        </div>
                        <CardHeader className="pt-16">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Terminal className="h-6 w-6 text-primary" />
                                Install the library
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">For Node.js projects:</p>
                                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                    <span className="text-muted-foreground">$</span> npm install @chat-test-reporter/chat-test-reporter --save-dev
                                </div>
                            </div>
                            {/* <div>
                                <p className="text-sm text-muted-foreground mb-2">For PHP projects:</p>
                                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                    <span className="text-muted-foreground">$</span> composer require chat-test-reporter/chat-test-reporter --dev
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>

                    {/* Step 2: Configure */}
                    <Card className="relative overflow-hidden">
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="text-lg px-3 py-1">2</Badge>
                        </div>
                        <CardHeader className="pt-16">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Settings className="h-6 w-6 text-primary" />
                                Configure your .env file
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Create a <code className="bg-muted px-2 py-1 rounded">.env</code> or <code className="bg-muted px-2 py-1 rounded">.env.testing</code> file at the root of your project:
                            </p>
                            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                <div className="text-accent">GOOGLE_CHAT_WEBHOOK</div>
                                <div>=https://chat.googleapis.com/v1/spaces/XXXX/messages?key=YYY&token=ZZZ</div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 3: Run tests */}
                    <Card className="relative overflow-hidden">
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="text-lg px-3 py-1">3</Badge>
                        </div>
                        <CardHeader className="pt-16">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Play className="h-6 w-6 text-primary" />
                                Run your tests and generate the JSON report
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">For Jest:</p>
                                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                    <span className="text-muted-foreground">$</span> npx jest --ci --json &gt; test-results.json
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">For Vitest:</p>
                                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                    <span className="text-muted-foreground">$</span> vitest run --reporter=json &gt; test-results.json
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 4: Send report */}
                    <Card className="relative overflow-hidden">
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="text-lg px-3 py-1">4</Badge>
                        </div>
                        <CardHeader className="pt-16">
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <Send className="h-6 w-6 text-primary" />
                                Send the report to Google Chat
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                                <span className="text-muted-foreground">$</span> npx chat-test-reporter
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-semibold">Done! Your test summary will be automatically sent to your team in Google Chat.</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link to="/">
                        <Button size="lg" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
