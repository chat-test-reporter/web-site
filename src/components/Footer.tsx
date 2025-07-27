import { Button } from "@/components/ui/button";
import { Github, Book, MessageCircle, Heart, Lightbulb } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16 border-t border-border bg-card/30">
            <div className="container mx-auto px-6 space-y-8">
                {/* Branding + Ações rápidas */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-foreground">📢</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">Chat Test Reporter</span>
                    </div>

                    {/* Ações rápidas */}
                    {/* <div className="flex items-center gap-4 flex-wrap">
                        <Button variant="tech" size="sm">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Book className="w-4 h-4" />
                            Docs
                        </Button>
                        <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4" />
                            Suporte
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Lightbulb className="w-4 h-4" />
                            Dicas e Exemplos
                        </Button>
                    </div> */}
                </div>

                {/* Mensagem de rodapé */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Made by Julio S</span>
                        <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                    </div>

                    <p className="text-sm text-muted-foreground text-center sm:text-right">
                        &copy; 2024 Chat Test Reporter. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;