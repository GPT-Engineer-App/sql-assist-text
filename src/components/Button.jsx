import { Button as ShadcnButton } from "@/components/ui/button";

const Button = ({ onClick, children }) => {
  return (
    <ShadcnButton onClick={onClick} className="mt-4">
      {children}
    </ShadcnButton>
  );
};

export default Button;