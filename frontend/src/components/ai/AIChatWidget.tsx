// src/AIChatWidget.tsx
import React, { useState, useRef, useEffect } from "react";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button, 
  Input, 
  useDisclosure,
  Spinner
} from "@heroui/react";

interface AIResponse {
  reply: string;
}

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIChatWidget: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Ref to handle auto-scrolling to the latest message
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleAskAI = async (): Promise<void> => {
    if (!query.trim()) return;
    
    // Add user message to UI and clear input
    const userMessage: Message = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    try {
      // Using Vite Environment Variable for the API Gateway endpoint
      const apiUrl = import.meta.env.VITE_AI_API_URL as string;
      
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage.text })
      });
      
      if (!res.ok) throw new Error("Network response was not ok");
      
      const data = (await res.json()) as AIResponse;
      setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "Connection error. Please ensure the backend is running." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !isLoading) {
      handleAskAI();
    }
  };

  return (
    <>
      <Button 
        onPress={onOpen} 
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all"
        radius="full"
        size="lg"
      >
        ✨ Ask AI Assistant
      </Button>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        backdrop="blur" 
        placement="center"
        size="lg"
        className="bg-slate-900/95 border border-slate-700 shadow-2xl text-slate-200"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-slate-800 pb-4">
                <span className="text-xl font-bold text-teal-400 tracking-tight">
                  Portfolio AI Assistant
                </span>
                <span className="text-xs font-normal text-slate-400">
                  Powered by Google AI Studio (Gemini)
                </span>
              </ModalHeader>
              
              <ModalBody className="py-6">
                <div className="flex flex-col h-[350px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  
                  {/* Default Welcome Message */}
                  {messages.length === 0 && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] p-3 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-300 text-sm border border-slate-700">
                        Hi! Ask me anything about Jomarie's cloud architecture projects, certifications, or IT support background.
                      </div>
                    </div>
                  )}

                  {/* Chat History */}
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm border ${
                        msg.role === 'user' 
                          ? 'bg-teal-500/10 text-teal-100 border-teal-500/30 rounded-tr-sm' 
                          : 'bg-slate-800 text-slate-300 border-slate-700 rounded-tl-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="p-4 rounded-2xl rounded-tl-sm bg-slate-800 border border-slate-700 flex items-center gap-2">
                        <Spinner color="current" size="sm" className="text-teal-400" />
                        <span className="text-xs text-slate-400">Gemini is thinking...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <Input
                  autoFocus
                  placeholder="Ask about my AWS projects..."
                  variant="bordered"
                  value={query}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  classNames={{
                    input: "text-slate-200",
                    inputWrapper: "border-slate-700 hover:border-teal-400 focus-within:border-teal-400 bg-slate-900/50",
                  }}
                  endContent={
                    <Button 
                      isIconOnly 
                      size="sm" 
                      className="bg-teal-500 text-slate-900 ml-2" 
                      onPress={handleAskAI}
                      isDisabled={!query.trim() || isLoading}
                    >
                      ↑
                    </Button>
                  }
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AIChatWidget;
