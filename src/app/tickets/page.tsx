"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Home/Navbar";

export default function TicketForm() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="bg-black md:py-10">
      <Navbar />
      <div className="min-h-screen bg-[black] flex items-center justify-center bg-dot-white/[0.1]">
        <div className="relative">
          {/* Animated stars background */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute h-2 w-5 rounded-full bg-white/50 animate-pulse"
              style={{ top: "10%", left: "20%" }}
            />
            <div
              className="absolute h-1 w-1 rounded-full bg-white/30 animate-pulse delay-300"
              style={{ top: "30%", right: "10%" }}
            />
            <div
              className="absolute h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse delay-500"
              style={{ bottom: "20%", left: "30%" }}
            />
          </div>

          <div className="w-full max-w-lg space-y-8 p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label
                  className="text-white text-xl block text-center"
                  htmlFor="application"
                >
                  Application number
                </Label>
                <Input
                  id="application"
                  placeholder="VTAP2XXXXX"
                  className="bg-white/10 border-white/20 text-white text-center h-12 text-lg placeholder:text-gray-400 w-96"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white text-xl block text-center">
                  Date of Birth
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-96 h-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      {date ? format(date, "PP") : "Pick a date"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button className="w-96 h-12 text-lg bg-blue-500 hover:bg-blue-900 text-white mt-8">
                Generate ticket!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
