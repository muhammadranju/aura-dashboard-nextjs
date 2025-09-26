"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

export default function VideoCallSettings() {
  const [timerValue, setTimerValue] = useState([60]);
  const [selectedColor, setSelectedColor] = useState("#4F46E5");
  const [freeAddTimeUses, setFreeAddTimeUses] = useState("");
  const [maxCallDuration, setMaxCallDuration] = useState("");

  const savedColors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f43f5e",
    "#a855f7",
    "#6366f1",
    "#0ea5e9",
    "#10b981",
    "#84cc16",
  ];

  return (
    <div className="px-6 py-6 ">
      {/* Header */}

      {/* Video Call Settings Content */}
      <div className="backdrop-blur-md bg-white/20 border rounded-lg p-6 space-y-8">
        {/* Initial Timer Duration */}
        <div>
          <h3 className="text-4xl font-[Bebas_Neue] text-white mb-2">
            INITIAL TIMER DURATION
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Set the initial length of a video call before a user needs to add
            time.
          </p>

          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Slider
                value={timerValue}
                onValueChange={setTimerValue}
                max={300}
                min={30}
                step={30}
                className="w-full"
              />
            </div>
            <div className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg font-semibold min-w-[80px] text-center">
              {timerValue[0]} Sec
            </div>
          </div>
        </div>

        {/* Call Time Restraints */}
        <div>
          <h3 className="text-4xl font-[Bebas_Neue] text-white mb-2  ">
            CALL TIME RESTRAINTS
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Set limits on extending call durations to encourage purchasing time.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Free &quot;Add Time&quot; Uses
              </label>
              <Input
                value={freeAddTimeUses}
                onChange={(e) => setFreeAddTimeUses(e.target.value)}
                placeholder="add value"
                className="bg-white text-gray-800 border-0 h-12"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2 ">
                Max Call Duration (minutes)
              </label>
              <Input
                value={maxCallDuration}
                onChange={(e) => setMaxCallDuration(e.target.value)}
                placeholder="Add Value"
                className="bg-white text-gray-800 border-0 h-12"
              />
            </div>
          </div>
        </div>

        {/* Call Background Theme */}
        <div>
          <h3 className="text-4xl text-white mb-2  font-[Bebas_Neue]">
            CALL BACKGROUND THEME
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Select the default background image for video calls. Users may
            override this.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* Color Picker */}
            <Card className="bg-white rounded-lg p-6">
              <CardContent className="p-0">
                {/* Gradient Preview */}
                <div
                  className="w-full h-32 rounded-lg mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${selectedColor}, #1a1a1a)`,
                  }}
                ></div>

                {/* Color Spectrum */}
                <div className="mb-4">
                  <div
                    className="w-full h-4 rounded-lg mb-2"
                    style={{
                      background:
                        "linear-gradient(to right, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)",
                    }}
                  ></div>
                  <div
                    className="w-full h-4 rounded-lg"
                    style={{
                      background: `linear-gradient(to right, #ffffff, ${selectedColor}, #000000)`,
                    }}
                  ></div>
                </div>

                {/* Hex Input */}
                <div className="flex items-center space-x-2 mb-4">
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-800">
                    <option>Hex</option>
                  </select>
                  <Input
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="flex-1 text-gray-800 border-gray-300"
                  />
                  <span className="text-sm text-gray-600">100%</span>
                </div>

                {/* Saved Colors */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Saved colors:</span>
                    <button className="text-sm text-blue-600">+ Add</button>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {savedColors.map((color, index) => (
                      <button
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-gray-400"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Image */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Upload Image
              </label>
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center bg-transparent">
                <Upload className="w-12 h-12 text-gray-50 mx-auto mb-4" />
                <p className="text-gray-50 text-sm">
                  Upload photo (Max: 2MB, .jpg, .png).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white px-8 py-3 rounded-lg font-semibold">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
