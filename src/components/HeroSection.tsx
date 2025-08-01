import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import bitcoinIcon from "@/assets/btc.png";
import ethereumIcon from "@/assets/eth.png";

// Links e endereços
const kofiUrl = "https://ko-fi.com/W7W61IOL98";
const bitcoinAddress = "bc1q44mwx0q0y0ndecepdmrnqzd4fmr3z358teqyj5";
const ethereumAddress = "0x473B652754C5dEAf4bBa6Fb73282aBd983A70D5e";

const cryptoIcons = {
    BTC: bitcoinIcon,
    ETH: ethereumIcon,
};

const HeroSection = () => {
    const [selectedCrypto, setSelectedCrypto] = useState<"BTC" | "ETH">("BTC");

    const cryptoAddress = selectedCrypto === "BTC" ? bitcoinAddress : ethereumAddress;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background and floating elements */}
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">NPM & Composer Ready</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            📢 Get your test results on{" "}
                            <span className="bg-gradient-primary bg-clip-text text-transparent">Google Chat</span>
                            <br />
                            <span className="text-muted-foreground text-3xl lg:text-4xl">Effortlessly.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-md">
                            Turn your automated tests into useful messages in your team chat.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/how-it-works">
                                <Button variant="hero" size="lg" className="text-lg">
                                    <Terminal className="w-5 h-5" />
                                    How to Install
                                </Button>
                            </Link>
                            <Link
                                to="https://www.npmjs.com/package/@chat-test-reporter/cli"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="tech" size="lg" className="text-lg">
                                    View on NPM
                                </Button>
                            </Link>
                        </div>

                        {/* Donation section */}
                        <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                            <p>If this tool helped you, consider supporting the project 💜</p>
                            {/* Ko-fi */}
                            <a
                                href={kofiUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                            >
                                <img
                                    src="https://ko-fi.com/img/githubbutton_sm.svg"
                                    alt="Support me on Ko-fi"
                                    className="h-8"
                                />
                            </a>

                            {/* Crypto toggle */}
                            <div className="flex items-center gap-3">
                                <span>Donate with crypto:</span>
                                <div className="inline-flex gap-2">
                                    <Button
                                        variant={selectedCrypto === "BTC" ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCrypto("BTC")}
                                    >
                                        <img src={cryptoIcons.BTC} alt="BTC" className="w-4 h-4 mr-1" />
                                        BTC
                                    </Button>
                                    <Button
                                        variant={selectedCrypto === "ETH" ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCrypto("ETH")}
                                    >
                                        <img src={cryptoIcons.ETH} alt="ETH" className="w-4 h-4 mr-1" />
                                        ETH
                                    </Button>
                                </div>
                            </div>

                            {/* Selected address */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
                                <div className="flex items-center gap-2">
                                    <img src={cryptoIcons[selectedCrypto]} alt={selectedCrypto} className="w-5 h-5" />
                                    <span className="text-muted-foreground">{selectedCrypto} Address:</span>
                                </div>
                                <span className="font-mono bg-card border border-border px-2 py-1 rounded text-xs break-all">
                                    {cryptoAddress}
                                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                Jest & Vitest
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-secondary rounded-full" />
                                CI/CD Ready
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                Zero Config
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-glow rounded-2xl blur-3xl opacity-50" />
                        <img
                            src={heroImage}
                            alt="Chat Test Reporter Demo"
                            className="relative rounded-2xl shadow-tech border border-border"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-tech">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-primary" />
                                <div>
                                    <div className="text-sm font-medium">✅ Tests Passed</div>
                                    <div className="text-xs text-muted-foreground">15 tests executed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
