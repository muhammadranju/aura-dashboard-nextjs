/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Save,
  Eye,
  FileText,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link,
  Image,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
} from "lucide-react";

interface CommunityGuidelinesEditorProps {}

const CommunityGuidelinesEditor: React.FC<
  CommunityGuidelinesEditorProps
> = () => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [editorRef, setEditorRef] = useState<HTMLDivElement | null>(null);

  const handleSave = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Guidelines saved:", content);
    } catch (error) {
      console.error("Error saving guidelines:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContentChange = useCallback(() => {
    if (editorRef) {
      setContent(editorRef.innerHTML);
    }
  }, [editorRef]);

  const executeCommand = useCallback(
    (command: string, value?: string) => {
      document.execCommand(command, false, value);
      handleContentChange();
      editorRef?.focus();
    },
    [editorRef, handleContentChange]
  );

  const insertLink = useCallback(() => {
    const url = prompt("Enter the URL:");
    if (url) {
      executeCommand("createLink", url);
    }
  }, [executeCommand]);

  const insertImage = useCallback(() => {
    const url = prompt("Enter the image URL:");
    if (url) {
      executeCommand("insertImage", url);
    }
  }, [executeCommand]);

  const formatBlock = useCallback(
    (tag: string) => {
      const selection = window.getSelection();
      if (!selection || !editorRef) return;

      if (selection.rangeCount === 0) {
        // If no selection, create a new heading at the cursor
        const range = document.createRange();
        const textNode = document.createTextNode("New Heading");
        editorRef.appendChild(textNode);
        range.selectNode(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      // Use formatBlock command
      document.execCommand("formatBlock", false, `<${tag}>`);
      handleContentChange();
      editorRef?.focus();
    },
    [executeCommand, editorRef, handleContentChange]
  );

  const insertHeading = useCallback(
    (level: string) => {
      if (!editorRef) return;

      const selection = window.getSelection();
      if (!selection) return;

      let element;
      const selectedText = selection.toString() || "New Heading";

      // Create the heading element
      if (level === "div") {
        element = document.createElement("div");
        element.innerHTML = selectedText;
      } else {
        element = document.createElement(level);
        element.innerHTML = selectedText;
        element.style.margin = "1rem 0";
        element.style.fontWeight = "bold";

        // Apply heading-specific styles
        switch (level) {
          case "h1":
            element.style.fontSize = "2rem";
            element.style.color = "#60a5fa";
            break;
          case "h2":
            element.style.fontSize = "1.75rem";
            element.style.color = "#34d399";
            break;
          case "h3":
            element.style.fontSize = "1.5rem";
            element.style.color = "#fbbf24";
            break;
          case "h4":
            element.style.fontSize = "1.25rem";
            element.style.color = "#f472b6";
            break;
        }
      }

      // Replace selection or insert at cursor
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(element);

        // Position cursor after the heading
        range.setStartAfter(element);
        range.setEndAfter(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      handleContentChange();
      editorRef?.focus();
    },
    [editorRef, handleContentChange]
  );

  const getWordCount = (html: string): number => {
    const text = html.replace(/<[^>]*>/g, "");
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const getCharCount = (html: string): number => {
    return html.replace(/<[^>]*>/g, "").length;
  };

  const toolbarSections = [
    {
      title: "Text Style",
      tools: [
        {
          icon: Bold,
          label: "Bold",
          action: () => executeCommand("bold"),
          shortcut: "Ctrl+B",
        },
        {
          icon: Italic,
          label: "Italic",
          action: () => executeCommand("italic"),
          shortcut: "Ctrl+I",
        },
        {
          icon: Underline,
          label: "Underline",
          action: () => executeCommand("underline"),
          shortcut: "Ctrl+U",
        },
      ],
    },
    {
      title: "Alignment",
      tools: [
        {
          icon: AlignLeft,
          label: "Align Left",
          action: () => executeCommand("justifyLeft"),
        },
        {
          icon: AlignCenter,
          label: "Align Center",
          action: () => executeCommand("justifyCenter"),
        },
        {
          icon: AlignRight,
          label: "Align Right",
          action: () => executeCommand("justifyRight"),
        },
      ],
    },
    {
      title: "Lists",
      tools: [
        {
          icon: List,
          label: "Bullet List",
          action: () => executeCommand("insertUnorderedList"),
        },
        {
          icon: ListOrdered,
          label: "Numbered List",
          action: () => executeCommand("insertOrderedList"),
        },
      ],
    },
    {
      title: "Insert",
      tools: [
        { icon: Link, label: "Insert Link", action: insertLink },
        { icon: Image, label: "Insert Image", action: insertImage },
        {
          icon: Quote,
          label: "Blockquote",
          action: () => formatBlock("blockquote"),
        },
      ],
    },
  ];

  const headingOptions = [
    { value: "h1", label: "📝 Heading 1 (Large)" },
    { value: "h2", label: "📄 Heading 2 (Medium)" },
    { value: "h3", label: "📑 Heading 3 (Small)" },
    { value: "h4", label: "📋 Heading 4 (Mini)" },
  ];

  return (
    <div className="p-6">
      <div className=" mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h1 className="text-3xl font-semibold text-white">
                Community Guidelines Editor
              </h1>
            </div>
            <p className="text-white/70">
              Create and format your community guidelines with our modern rich
              text editor
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="mb-6">
            <div className="flex gap-2">
              <Button
                onClick={() => setShowPreview(false)}
                variant={!showPreview ? "default" : "ghost"}
                className={`px-4 py-2 rounded-lg transition-all ${
                  !showPreview
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button
                onClick={() => setShowPreview(true)}
                variant={showPreview ? "default" : "ghost"}
                disabled={!content.trim()}
                className={`px-4 py-2 rounded-lg transition-all ${
                  showPreview
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50"
                }`}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>

          {/* Editor Container */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
            {showPreview ? (
              /* Preview Mode */
              <div className="p-8">
                <div className="bg-white/10 rounded-lg p-6 min-h-[500px]">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Preview
                  </h3>
                  {content ? (
                    <div
                      className="text-white leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: content }}
                      style={{
                        lineHeight: "1.7",
                        fontSize: "16px",
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <FileText className="w-16 h-16 text-white/20 mb-4" />
                      <p className="text-white/50 text-lg">
                        No content to preview
                      </p>
                      <p className="text-white/30 text-sm mt-2">
                        Switch to edit mode to start writing
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <div>
                {/* Toolbar */}
                <div className="bg-white/10 border-b border-white/20 p-4">
                  <div className="flex flex-wrap gap-6 items-center">
                    {/* Heading Selector */}
                    <div className="flex items-center gap-2">
                      <Type className="w-4 h-4 text-white/70" />
                      <select
                        onChange={(e) => {
                          if (e.target.value !== "default") {
                            insertHeading(e.target.value);
                            e.target.value = "default"; // Reset to default
                          }
                        }}
                        className="bg-white/20 border border-white/30 rounded px-3 py-1.5 text-white text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
                        defaultValue="default"
                      >
                        <option value="default" className="bg-slate-800">
                          Add Heading
                        </option>
                        {headingOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-slate-800"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Toolbar Sections */}
                    {toolbarSections.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="flex items-center gap-1"
                      >
                        {section.tools.map((tool, toolIndex) => (
                          <Button
                            key={toolIndex}
                            variant="ghost"
                            size="sm"
                            onClick={tool.action}
                            className="w-9 h-9 p-0 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                            title={`${tool.label}${
                              "shortcut" in tool && tool.shortcut
                                ? ` (${tool.shortcut})`
                                : ""
                            }`}
                          >
                            <tool.icon className="h-4 w-4" />
                          </Button>
                        ))}
                        {sectionIndex < toolbarSections.length - 1 && (
                          <div className="w-px h-6 bg-white/20 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editor Area */}
                <div className="relative min-h-[500px] p-6">
                  <div
                    ref={setEditorRef}
                    contentEditable
                    onInput={handleContentChange}
                    onBlur={handleContentChange}
                    className="w-full min-h-[450px] bg-transparent text-white focus:outline-none leading-relaxed"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.7",
                    }}
                    suppressContentEditableWarning={true}
                    data-placeholder="Start writing your community guidelines here... Use the toolbar above to format your content with headings, lists, links, and more!"
                  />

                  {/* Custom placeholder styling */}
                  <style jsx>{`
                    [contenteditable]:empty:before {
                      content: attr(data-placeholder);
                      color: rgba(255, 255, 255, 0.4);
                      pointer-events: none;
                      font-style: italic;
                      display: block;
                    }

                    [contenteditable] h1 {
                      font-size: 2rem;
                      font-weight: bold;
                      margin: 1rem 0;
                      color: #60a5fa;
                    }

                    [contenteditable] h2 {
                      font-size: 1.75rem;
                      font-weight: bold;
                      margin: 0.75rem 0;
                      color: #34d399;
                    }

                    [contenteditable] h3 {
                      font-size: 1.5rem;
                      font-weight: bold;
                      margin: 0.5rem 0;
                      color: #fbbf24;
                    }

                    [contenteditable] h4 {
                      font-size: 1.25rem;
                      font-weight: bold;
                      margin: 0.5rem 0;
                      color: #f472b6;
                    }

                    [contenteditable] ul,
                    [contenteditable] ol {
                      margin: 1rem 0;
                      padding-left: 2rem;
                    }

                    [contenteditable] li {
                      margin: 0.5rem 0;
                    }

                    [contenteditable] blockquote {
                      border-left: 4px solid #60a5fa;
                      padding-left: 1rem;
                      margin: 1rem 0;
                      color: #cbd5e1;
                      font-style: italic;
                    }

                    [contenteditable] a {
                      color: #60a5fa;
                      text-decoration: underline;
                    }

                    [contenteditable] img {
                      max-width: 100%;
                      height: auto;
                      border-radius: 0.5rem;
                      margin: 1rem 0;
                    }
                  `}</style>

                  {/* Empty state illustration */}
                  {!content && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center opacity-30">
                        <div className="relative w-80 h-64 mx-auto mb-6">
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-40 h-28 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 rounded-lg border-2 border-cyan-300/40 flex flex-col items-center justify-center">
                            <FileText className="w-8 h-8 mb-2 text-white/80" />
                            <span className="text-white/90 text-xs font-medium">
                              START WRITING
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-white/5 rounded-full"></div>
                        </div>
                        <p className="text-white/40 text-lg mb-2">
                          Your guidelines will appear here
                        </p>
                        <p className="text-white/30 text-sm">
                          Use the toolbar to format your content
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Stats and Actions */}
          <div className="flex justify-between items-center mt-6 p-4 bg-white/5 rounded-lg">
            <div className="flex gap-6 text-sm text-white/60">
              <span>
                Characters:{" "}
                <span className="text-white/80 font-medium">
                  {getCharCount(content)}
                </span>
              </span>
              <span>
                Words:{" "}
                <span className="text-white/80 font-medium">
                  {getWordCount(content)}
                </span>
              </span>
              <span>
                Status:{" "}
                <span
                  className={`font-medium ${
                    content.trim() ? "text-green-400" : "text-orange-400"
                  }`}
                >
                  {content.trim() ? "Draft Ready" : "Empty"}
                </span>
              </span>
            </div>

            <Button
              onClick={handleSave}
              disabled={!content.trim() || isLoading}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                !content.trim() || isLoading
                  ? "bg-white/20 text-white/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Guidelines
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelinesEditor;
