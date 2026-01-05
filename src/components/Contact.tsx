import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Contact = () => {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/237699000000", "_blank");
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {t.contact.title}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t.contact.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium">{language === 'fr' ? 'Téléphone' : 'Phone'}</div>
                    <div className="text-sm text-muted-foreground">+237 694153918</div>
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
                    <div className="font-medium">{language === 'fr' ? 'Adresse' : 'Address'}</div>
                    <div className="text-sm text-muted-foreground">Tradex borne 10, Douala Cameroun</div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button onClick={handleWhatsApp} className="gap-2 bg-accent hover:bg-accent/90">
                  <MessageCircle className="h-4 w-4" />
                  {t.contact.whatsapp}
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="tel:+237694153918">
                    <Phone className="h-4 w-4" />
                    {t.contact.call}
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://facebook.com/ayelgroup" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' 
                    ? 'Remplissez le formulaire et nous vous répondrons dans les plus brefs délais'
                    : 'Fill out the form and we will get back to you as soon as possible'}
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.name}</label>
                  <Input placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.email}</label>
                  <Input type="email" placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.phone}</label>
                  <Input type="tel" placeholder="+237 XXX XXX XXX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.message}</label>
                  <Textarea 
                    placeholder={language === 'fr' ? 'Votre message...' : 'Your message...'} 
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow">
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
