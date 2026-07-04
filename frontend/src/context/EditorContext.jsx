import { createContext, useContext, useState } from "react";

const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [aiLoading, setAiLoading] = useState(false);

  const [result, setResult] = useState({
    status: "Waiting",
    execution: "--",
    memory: "--",
    score: "--",
    language: "Java",
  });

  const [aiResponse, setAiResponse] = useState({
    logic: "No feedback yet.",
    complexity: "--",
    optimization: "--",
  });

  const runCode = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "Accepted",
        execution: "42 ms",
        memory: "44.2 MB",
        score: "100",
        language: "Java",
      });

      setLoading(false);
    }, 2000);
  };

  const submitCode = () => {
    setAiLoading(true);

    setTimeout(() => {
      setAiResponse({
        logic:
          "Excellent solution! Your logic correctly solves the problem.",
        complexity: "Time Complexity : O(n)",
        optimization:
          "Use meaningful variable names and add comments for readability.",
      });

      setAiLoading(false);
    }, 2500);
  };

  return (
    <EditorContext.Provider
      value={{
        result,
        loading,
        aiLoading,
        aiResponse,
        runCode,
        submitCode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  return useContext(EditorContext);
}