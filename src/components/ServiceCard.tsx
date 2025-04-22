import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="bg-black/30 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-electric-blue/50">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white neon-pulse">
          {icon}
        </div>
        <CardTitle className="text-white text-xl neon-glow">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
