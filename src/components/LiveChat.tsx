import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Headphones } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! Welcome to ScanVX Solutions. How can we help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [unread, setUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: 'user', text },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'bot',
          text: "Thanks for reaching out! One of our IT consultants will get back to you shortly. For urgent matters, please call +6012-4598902.",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-xl shadow-brand-600/40 transition-all duration-300 hover:scale-110 hover:shadow-brand-600/50"
        aria-label="Live chat"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6" />
            {unread && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-500 ring-2 ring-ink-950" />
              </span>
            )}
          </>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-ink-950/50 animate-fade-up sm:w-80">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-brand-600 to-brand-700 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Headphones className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">ScanVX Support</h4>
              <p className="flex items-center gap-1.5 text-xs text-brand-100">
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                Online now
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 space-y-3 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'rounded-br-md bg-brand-600 text-white'
                      : 'rounded-bl-md bg-white/10 text-ink-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-white/10 bg-ink-950/50 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
            <button
              onClick={send}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition-colors hover:bg-brand-700"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
