// src/components/cloud/VisitorCounter.tsx
import React, { useState, useEffect, useRef } from "react";
import { Chip, Spinner } from "@heroui/react";

interface CounterResponse {
  visits: number;
}

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Ref to prevent Strict Mode double-fetching in development
  const hasFetched = useRef<boolean>(false);

  useEffect(() => {
    const fetchAndIncrementCount = async (): Promise<void> => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        // Use Vite environment variable
        const apiUrl = import.meta.env.VITE_COUNTER_API_URL as string;
        
        const response = await fetch(apiUrl, {
          method: "POST", 
        });
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = (await response.json()) as CounterResponse;
        setCount(data.visits);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndIncrementCount();
  }, []);

  return (
    <div className="flex items-center justify-center py-4">
      <Chip 
        variant="flat" 
        color="default" 
        className="bg-slate-800 text-slate-400 border border-slate-700"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Spinner size="sm" color="current" className="text-teal-400" /> Loading views...
          </span>
        ) : (
          <span>
            Profile Views: <strong className="text-teal-400">{count !== null ? count : "-"}</strong>
          </span>
        )}
      </Chip>
    </div>
  );
}

export default VisitorCounter;
