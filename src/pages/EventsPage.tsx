import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { events } from "@/data/events";
import productsGroup from "@/assets/products-group.png";

// Import des images de produits pour la galerie
import menthPlus from "@/assets/menth-plus-new.png";
import menthKids from "@/assets/menth-kids-new.png";
import baumeKineKids from "@/assets/baume-kine-kids-new.png";
import huileKine from "@/assets/huile-kine-new.png";
import gelKine from "@/assets/gel-kine-new.png";
import menthKidsJar from "@/assets/menth-kids-jar.png";

const galleryImages = [
  { src: menthPlus, alt: "Menth Plus - Événement", title: "Présentation Menth Plus" },
  { src: menthKids, alt: "Menth Kids - Événement", title: "Lancement Menth Kids" },
  { src: baumeKineKids, alt: "Baume Kiné Kids - Événement", title: "Atelier Baume Kiné Kids" },
  { src: huileKine, alt: "Huile Kiné - Événement", title: "Formation Huile Kiné" },
  { src: gelKine, alt: "Gel Kiné - Événement", title: "Démonstration Gel Kiné" },
  { src: menthKidsJar, alt: "Menth Kids Jar - Événement", title: "Exposition Menth Kids" },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.85), hsl(var(--primary) / 0.9)), url(${productsGroup})` }}>
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Nos{" "}
            <span className="text-accent">
              Événements
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Galerie des activités phares du Laboratoire AYEL
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium text-center px-4">{image.title}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center font-medium mt-2">{image.title}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Plus de photos à venir lors de nos prochains événements !
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EventsPage;