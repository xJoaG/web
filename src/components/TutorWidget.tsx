import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Sparkles, Send, Minimize2, Maximize2, Zap, BookOpen, Crown, Bot, Cpu, Wifi, Brain, Monitor } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'suggestion' | 'normal';
}

const TutorWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm ARIA, your advanced AI learning companion. I'm equipped with the latest educational algorithms to help you master any subject. What would you like to learn today? 🤖",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [robotMood, setRobotMood] = useState<'idle' | 'thinking' | 'excited' | 'speaking'>('idle');
  const [eyeAnimation, setEyeAnimation] = useState('normal');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Premium AI responses with learning focus
  const aiResponses = [
    "Excellent question! My neural networks are processing the optimal learning path for you. 🧠",
    "I love your curiosity! My algorithms detect high learning potential in this area. ⚡",
    "That's a sophisticated question! Let me access my knowledge database... 🎯",
    "Perfect timing for this question! My AI analysis suggests this is a key concept... 💎",
    "You're thinking like a true learner! My pattern recognition shows this connects to several principles... 🌟",
    "Brilliant question! My learning optimization protocols indicate this is where breakthroughs happen... 💡",
    "I can see you're ready for advanced concepts! Let me compile the best learning strategy... 🚀",
    "This is exactly what separates good learners from exceptional ones! Accessing premium content... 👑"
  ];

  const quickSuggestions = [
    "Explain this concept simply",
    "Show me practical examples",
    "What should I learn next?",
    "Help me practice this skill"
  ];

  // Enhanced robot animations and mood system
  useEffect(() => {
    const moodCycle = setInterval(() => {
      if (robotMood === 'idle') {
        setEyeAnimation(Math.random() > 0.7 ? 'blink' : 'normal');
      }
    }, 2000);

    return () => clearInterval(moodCycle);
  }, [robotMood]);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setRobotMood('thinking');
    setEyeAnimation('processing');

    // Simulate AI processing with realistic delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setRobotMood('excited');
      setEyeAnimation('happy');
      
      // Return to idle after speaking
      setTimeout(() => {
        setRobotMood('idle');
        setEyeAnimation('normal');
      }, 3000);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getRobotAnimation = () => {
    switch (robotMood) {
      case 'thinking':
        return 'animate-pulse';
      case 'excited':
        return 'animate-bounce';
      case 'speaking':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  const getEyeStyle = () => {
    switch (eyeAnimation) {
      case 'blink':
        return 'h-1';
      case 'processing':
        return 'h-2 bg-indigo-400 animate-pulse';
      case 'happy':
        return 'h-2 bg-green-400';
      default:
        return 'h-2 bg-indigo-400';
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Premium Chat Interface */}
      {isOpen && (
        <div className={`absolute bottom-28 right-0 mb-4 transition-all duration-500 ${
          isMinimized ? 'w-80 h-20' : 'w-96 h-[600px]'
        }`}>
          <div className="glass-morphism rounded-3xl shadow-2xl border border-white/30 h-full flex flex-col overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-lg -z-10"></div>
            
            {/* Premium Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <Brain size={24} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
                    <Wifi className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl flex items-center space-x-2">
                    <span>ARIA AI</span>
                    <Cpu className="h-5 w-5 text-indigo-400" />
                  </h3>
                  <p className="text-gray-300 text-sm">Advanced Learning Assistant</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                            : 'glass-morphism-dark text-white border border-white/10 shadow-xl'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="glass-morphism-dark p-4 rounded-2xl border border-white/10">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-gray-300 text-sm">ARIA is processing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestions */}
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(suggestion)}
                        className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Premium Input Area */}
                <div className="p-6 border-t border-white/10 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
                  <div className="flex space-x-3">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask ARIA anything about learning..."
                      className="flex-1 input-field text-sm"
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim()}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Redesigned Robot Avatar - More Cohesive with Site */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-20 h-20 cursor-pointer transition-all duration-500 ${getRobotAnimation()} hover:scale-110`}
      >
        {/* Robot body with site-matching gradient */}
        <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden">
          
          {/* Robot face design */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Eyes */}
            <div className="flex space-x-2 mb-2">
              <div className={`w-3 ${getEyeStyle()} bg-white rounded-full transition-all duration-300`}></div>
              <div className={`w-3 ${getEyeStyle()} bg-white rounded-full transition-all duration-300`}></div>
            </div>
            
            {/* Mouth/Speaker */}
            <div className={`w-4 h-1 rounded-full ${
              robotMood === 'excited' ? 'bg-green-300' : robotMood === 'thinking' ? 'bg-blue-300 animate-pulse' : 'bg-white/80'
            } transition-colors duration-300`}></div>

            {/* Brain icon overlay for thinking */}
            {robotMood === 'thinking' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white/60 animate-pulse" />
              </div>
            )}
          </div>

          {/* Status indicators */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-blue-300 rounded-full"></div>

          {/* Processing indicators */}
          {robotMood === 'thinking' && (
            <>
              <div className="absolute left-0 top-1/2 w-1 h-4 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="absolute right-0 top-1/2 w-1 h-4 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            </>
          )}

          {/* Excitement particles */}
          {robotMood === 'excited' && (
            <>
              <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-yellow-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-cyan-300 animate-bounce" style={{ animationDelay: '200ms' }} />
              <Sparkles className="absolute -bottom-1 left-2 w-2 h-2 text-green-300 animate-bounce" style={{ animationDelay: '400ms' }} />
            </>
          )}

          {/* Glass morphism overlay */}
          <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none"></div>
        </div>

        {/* Notification indicator */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-ping shadow-xl">
            <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <MessageCircle size={10} className="text-red-500" />
            </div>
          </div>
        )}

        {/* Hover glow effect matching site colors */}
        <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400/50 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-2xl bg-indigo-400/20 blur-xl opacity-50 animate-pulse -z-10"></div>
      </div>
    </div>
  );
};

export default TutorWidget;