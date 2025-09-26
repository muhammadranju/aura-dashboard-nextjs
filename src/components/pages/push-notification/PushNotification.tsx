"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Image,
} from "lucide-react";

const PushNotificationForm = () => {
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Push notification sent:", { title, state, body });
    setIsLoading(false);
    // Reset form or show success message
  };

  const handleCancel = () => {
    setTitle("");
    setState("");
    setBody("");
  };

  const toolbarButtons = [
    { icon: Image, label: "Insert Image" },
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: AlignLeft, label: "Align Left" },
    { icon: AlignCenter, label: "Align Center" },
    { icon: AlignRight, label: "Align Right" },
    { icon: List, label: "Bullet List" },
    { icon: ListOrdered, label: "Numbered List" },
  ];

  return (
    <div className=" p-6">
      <div className=" mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white">
              Send Push Notification
            </h1>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white text-sm font-medium">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write your Title here"
                className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
              />
            </div>

            {/* State Field */}
            <div className="space-y-2">
              <Label htmlFor="state" className="text-white text-sm font-medium">
                State
              </Label>
              <Input
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Select State"
                className="h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200/20"
              />
            </div>

            {/* Body Field with Rich Text Editor */}
            <div className="space-y-2">
              <Label htmlFor="body" className="text-white text-sm font-medium">
                Body
              </Label>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden">
                {/* Toolbar */}
                <div className="bg-white/10 border-b border-white/20 p-3">
                  <div className="flex items-center gap-1">
                    {toolbarButtons.map((button, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                        title={button.label}
                      >
                        <button.icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Text Area */}
                <div className="relative min-h-[300px] p-4">
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full h-full min-h-[250px] bg-transparent text-white placeholder:text-white/60 resize-none focus:outline-none"
                  />

                  {/* Illustration Area */}
                  <div className="absolute bottom-8 right-8 opacity-40">
                    <div className="relative w-40 h-32">
                      {/* Person silhouette */}
                      <div className="absolute bottom-0 right-12 w-8 h-16 bg-slate-700 rounded-t-full"></div>
                      <div className="absolute bottom-12 right-10 w-6 h-6 bg-slate-600 rounded-full"></div>
                      <div className="absolute bottom-16 right-8 w-10 h-8 bg-slate-700 rounded-lg"></div>

                      {/* Screens/Panels */}
                      <div className="absolute top-4 left-4 w-16 h-12 bg-white/40 rounded-lg border border-white/20"></div>
                      <div className="absolute top-0 right-0 w-14 h-10 bg-white/30 rounded-lg border border-white/20"></div>
                      <div className="absolute bottom-4 left-0 w-12 h-8 bg-white/35 rounded border border-white/20"></div>

                      {/* Notification bubble */}
                      <div className="absolute top-8 left-8 w-20 h-12 bg-cyan-400/60 rounded-lg border border-cyan-300/40">
                        <div className="p-2">
                          <div className="w-4 h-2 bg-white/80 rounded mb-1"></div>
                          <div className="w-3 h-1 bg-white/60 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <Button
              variant="ghost"
              onClick={handleCancel}
              className="px-8 py-3 text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl transition-all duration-200"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSend}
              disabled={!title.trim() || !body.trim() || isLoading}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                !title.trim() || !body.trim() || isLoading
                  ? "bg-white/20 text-white/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotificationForm;
