import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react";

const TerminalExample = () => {
    return (
        <section className="py-24 bg-gradient-glow">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        See it in <span className="text-primary">action</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From the terminal to your chat – fully automated
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Terminal */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
                        <div className="bg-muted/50 px-4 py-2 border-b border-border">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                                <span className="text-sm text-muted-foreground ml-2">terminal</span>
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm space-y-2">
                            <div className="text-muted-foreground">$ npm test</div>
                            <div className="text-primary">Running Jest tests...</div>
                            <div className="text-foreground">✓ user.test.js (3 tests)</div>
                            <div className="text-foreground">✓ api.test.js (5 tests)</div>
                            <div className="text-red-400">✗ payment.test.js (1 test)</div>
                            <div className="text-muted-foreground">
                                <span className="text-primary">15 passed</span>,
                                <span className="text-red-400 ml-1">1 failed</span>,
                                <span className="ml-1">16 total</span>
                            </div>
                            <div className="text-primary animate-pulse">📢 Sending to Google Chat...</div>
                            <div className="text-green-400">✅ Notification sent successfully!</div>
                        </div>
                    </Card>

                    {/* Google Chat Card */}
                    <Card className="bg-card border-border shadow-tech">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-foreground" />
                                </div>
                                <div>
                                    <div className="font-semibold">Chat Test Reporter</div>
                                    <div className="text-sm text-muted-foreground">just now</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-muted/30 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <XCircle className="w-4 h-4 text-red-400" />
                                        <span className="font-medium text-red-400">Failed Tests</span>
                                        <Badge variant="destructive" className="ml-auto">1 failed</Badge>
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-3">
                                        📊 <strong>15 passed</strong> • <strong>1 failed</strong> • 16 total
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex items-center gap-2">
                                            <XCircle className="w-3 h-3 text-red-400" />
                                            <span>payment.test.js – Payment validation failed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    <span>Executed on: feature/payment-fix</span>
                                    <span>•</span>
                                    <span>Commit: a1b2c3d</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default TerminalExample;
