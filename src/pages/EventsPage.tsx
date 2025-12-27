import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { events } from "@/data/events";

const EventsPage = () => {
  const typeLabels = {
    foire: "Foire",
    formation: "Formation",
    promotion: "Promotion",
    partenariat: "Partenariat"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Nos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Événements
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez-nous lors de nos événements et activités
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <Card key={event.id} className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {typeLabels[event.type]}
                </span>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-primary">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EventsPage;