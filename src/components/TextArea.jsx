import { Textarea } from "@/components/ui/textarea";

const TextArea = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      placeholder="Enter SQL-related documentation here..."
      className="w-full h-40 p-2 border rounded-md"
    />
  );
};

export default TextArea;