import { Card as ShadcnCard, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Card = ({ query }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(query);
  };

  return (
    <ShadcnCard className="mb-4">
      <CardContent>
        <pre>{query}</pre>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCopy}>Copy</Button>
      </CardFooter>
    </ShadcnCard>
  );
};

export default Card;