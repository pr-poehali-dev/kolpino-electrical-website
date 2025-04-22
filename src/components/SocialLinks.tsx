import { Button } from "@/components/ui/button";

export const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      <a 
        href="https://t.me/+79500308830" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Button 
          size="sm" 
          variant="ghost" 
          className="rounded-full p-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        >
          <span className="text-lg">✈️</span>
        </Button>
      </a>
      <a 
        href="https://wa.me/79500308830" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Button 
          size="sm" 
          variant="ghost" 
          className="rounded-full p-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
        >
          <span className="text-lg">📱</span>
        </Button>
      </a>
    </div>
  );
};
