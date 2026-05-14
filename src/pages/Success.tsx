
import { useEffect } from "react";
import { trackLead } from "@/utils/utmify";
import { CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire the lead event when the success page loads
    trackLead();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="flex justify-center">
          <div className="bg-support-green/20 p-4 rounded-full">
            <CheckCircle2 className="w-16 h-16 text-support-green" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-dark">
          Inscrição Confirmada!
        </h1>
        
        <p className="text-muted-foreground text-lg">
          Obrigado por escolher o Kit Grafismo Fonético. Em instantes você receberá um e-mail com as instruções de acesso.
        </p>
        
        <div className="pt-8">
          <Button 
            onClick={() => navigate("/")}
            variant="outline"
            className="rounded-full flex items-center gap-2 mx-auto"
          >
            <Home className="w-4 h-4" />
            Voltar para o Início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
