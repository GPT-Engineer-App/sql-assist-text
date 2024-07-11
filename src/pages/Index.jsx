import React, { useState } from "react";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Index = () => {
  const [documentation, setDocumentation] = useState("");
  const [queries, setQueries] = useState([]);

  const handleProcessDocumentation = () => {
    // Placeholder function to simulate processing of SQL-related documentation
    const extractedQueries = documentation
      .split("\n")
      .filter((line) => line.trim().toLowerCase().startsWith("select"));

    setQueries(extractedQueries);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Text-to-SQL Assistant</h1>
      <p className="text-center mb-8">
        Input your SQL-related documentation below, and the assistant will extract SQL queries for you.
      </p>
      <TextArea value={documentation} onChange={(e) => setDocumentation(e.target.value)} />
      <Button onClick={handleProcessDocumentation}>Process Documentation</Button>
      <div className="mt-8">
        {queries.map((query, index) => (
          <Card key={index} query={query} />
        ))}
      </div>
    </div>
  );
};

export default Index;