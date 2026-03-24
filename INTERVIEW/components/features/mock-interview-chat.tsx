'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send, Mic, MicOff } from 'lucide-react'
import { mockChatHistory } from '@/lib/constants'

interface Message {
  id: number
  type: 'user' | 'ai'
  message: string
  timestamp: Date
}

export function MockInterviewChat() {
  const [messages, setMessages] = useState<Message[]>(mockChatHistory)
  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      message: inputValue,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        message: "That's a great answer! Let me provide some feedback: Your explanation was clear and well-structured. However, you could have mentioned the trade-offs between time and space complexity. Let's move to the next question.",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="border border-border overflow-hidden flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-primary/10 border-b border-primary/20 px-6 py-4">
        <h2 className="text-lg font-semibold text-foreground">AI Interview Session</h2>
        <p className="text-sm text-foreground/60">System Design - Live Coding Practice</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-md lg:max-w-lg rounded-lg px-4 py-3 ${
                message.type === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-foreground border border-border'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.message}</p>
              <p className={`text-xs mt-2 ${
                message.type === 'user' ? 'text-primary-foreground/70' : 'text-foreground/50'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary/50 text-foreground border border-border rounded-lg px-4 py-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4 space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Type your answer here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsRecording(!isRecording)}
            className={isRecording ? 'bg-destructive/10 border-destructive text-destructive' : ''}
          >
            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-foreground/50">
          💡 Tip: Explain your thought process out loud as you code. The interviewer wants to understand your approach.
        </p>
      </div>
    </Card>
  )
}
