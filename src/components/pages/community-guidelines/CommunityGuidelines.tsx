"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Image,
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List,
  ListOrdered
} from 'lucide-react';

const CommunityGuidelinesEditor = () => {
  const [content, setContent] = useState('');
  const [fontSize, setFontSize] = useState('12');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Guidelines saved:', content);
    setIsLoading(false);
  };

  const toolbarButtons = [
    { icon: Image, label: 'Insert Image', id: 'image' },
    { icon: Bold, label: 'Bold', id: 'bold' },
    { icon: Italic, label: 'Italic', id: 'italic' },
    { icon: Underline, label: 'Underline', id: 'underline' },
    { icon: AlignLeft, label: 'Align Left', id: 'align-left' },
    { icon: AlignCenter, label: 'Align Center', id: 'align-center' },
    { icon: AlignRight, label: 'Align Right', id: 'align-right' },
    { icon: List, label: 'Bullet List', id: 'list' },
    { icon: ListOrdered, label: 'Numbered List', id: 'ordered-list' },
  ];

  return (
    <div className=" p-6">
      <div className=" mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white">Community Guidelines</h1>
          </div>

          {/* Editor Container */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden">
            
            {/* Toolbar */}
            <div className="bg-white/10 border-b border-white/20 p-4">
              <div className="flex items-center gap-4">
                {/* Font Size Selector */}
                <div className="flex items-center gap-2">
                  <select
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="bg-white/20 border border-white/30 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="10" className="bg-slate-800">10</option>
                    <option value="12" className="bg-slate-800">12</option>
                    <option value="14" className="bg-slate-800">14</option>
                    <option value="16" className="bg-slate-800">16</option>
                    <option value="18" className="bg-slate-800">18</option>
                    <option value="20" className="bg-slate-800">20</option>
                  </select>
                </div>

                {/* Formatting Buttons */}
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
            </div>

            {/* Editor Content Area */}
            <div className="relative min-h-[500px] p-6">
              
              {/* Text Area */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your community guidelines here..."
                className="w-full h-full min-h-[450px] bg-transparent text-white placeholder:text-white/60 resize-none focus:outline-none"
                style={{ fontSize: `${fontSize}px` }}
              />
              
              {/* NO DATA Illustration - Only shows when content is empty */}
              {!content && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center opacity-40">
                    
                    {/* Illustration */}
                    <div className="relative w-80 h-64 mx-auto mb-6">
                      
                      {/* Background screens/panels */}
                      <div className="absolute top-8 left-12 w-32 h-24 bg-white/30 rounded-lg border border-white/20"></div>
                      <div className="absolute top-4 right-8 w-28 h-20 bg-white/25 rounded-lg border border-white/15"></div>
                      <div className="absolute bottom-12 left-4 w-24 h-18 bg-white/20 rounded border border-white/15"></div>
                      
                      {/* Main "NO DATA" screen */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-40 h-28 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 rounded-lg border-2 border-cyan-300/60 flex flex-col items-center justify-center">
                        {/* Sad face icon */}
                        <div className="w-8 h-8 mb-2 relative">
                          <div className="w-8 h-8 border-2 border-white/80 rounded-full relative">
                            {/* Eyes */}
                            <div className="absolute top-2 left-1.5 w-1 h-1 bg-white/80 rounded-full"></div>
                            <div className="absolute top-2 right-1.5 w-1 h-1 bg-white/80 rounded-full"></div>
                            {/* Sad mouth */}
                            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-white/80 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-white/90 text-xs font-medium">NO DATA</span>
                      </div>
                      
                      {/* Person silhouette */}
                      <div className="absolute bottom-0 right-16">
                        {/* Body */}
                        <div className="w-6 h-12 bg-slate-700/80 rounded-t-full"></div>
                        {/* Head */}
                        <div className="w-5 h-5 bg-slate-600/80 rounded-full absolute -top-4 left-0.5"></div>
                        {/* Arms */}
                        <div className="w-8 h-6 bg-slate-700/80 rounded-lg absolute top-2 -left-1"></div>
                        {/* Legs */}
                        <div className="absolute bottom-0 left-0 w-3 h-8 bg-slate-700/80 rounded-b"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-8 bg-slate-700/80 rounded-b"></div>
                      </div>
                      
                      {/* Ladder/shelf structure */}
                      <div className="absolute bottom-0 right-4 w-12 h-32">
                        {/* Vertical posts */}
                        <div className="absolute left-0 bottom-0 w-1 h-full bg-white/20"></div>
                        <div className="absolute right-0 bottom-0 w-1 h-full bg-white/20"></div>
                        {/* Horizontal rungs */}
                        <div className="absolute bottom-6 left-0 w-full h-1 bg-white/20"></div>
                        <div className="absolute bottom-12 left-0 w-full h-1 bg-white/20"></div>
                        <div className="absolute bottom-18 left-0 w-full h-1 bg-white/20"></div>
                        <div className="absolute bottom-24 left-0 w-full h-1 bg-white/20"></div>
                      </div>
                      
                      {/* Base platform */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-white/10 rounded-full"></div>
                      
                    </div>
                    
                    <p className="text-white/60 text-lg">Start writing your community guidelines</p>
                    <p className="text-white/40 text-sm mt-2">Use the toolbar above to format your content</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <Button
              onClick={handleSave}
              disabled={!content.trim() || isLoading}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                !content.trim() || isLoading
                  ? 'bg-white/20 text-white/60 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving Guidelines...
                </div>
              ) : (
                'Save Guidelines'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelinesEditor;