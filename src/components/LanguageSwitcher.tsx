import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs rounded-full"
        onClick={() => setLanguage('fr')}
      >
        FR
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs rounded-full"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};
