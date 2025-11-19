import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Contactez{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Nous
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Téléphone</div>
                    <div className="text-sm text-muted-foreground">+243 XX XX XX XX</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">contact@ayel.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">Adresse</div>
                    <div className="text-sm text-muted-foreground">Kinshasa, RDC</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Envoyez-nous un message</h3>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire et nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Téléphone</label>
                  <Input type="tel" placeholder="+243 XX XX XX XX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Votre message..." 
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow">
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
