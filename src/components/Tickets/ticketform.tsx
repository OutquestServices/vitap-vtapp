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
import { CalendarIcon, Ticket } from "lucide-react";
import { format } from "date-fns";
import GeneratedTickets from "@/components/Tickets/generatedtickets";

interface TicketData {
  name: string;
  event: string;
  date: string;
  time: string;
  seat: string;
  qrValue: string;
}

export default function TicketForm() {
  const [date, setDate] = useState<Date | undefined>();
  const [data, setData] = useState<TicketData[]>([]);
  const [applicationNumber, setApplicationNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!applicationNumber || !date) {
      alert("Please fill all the fields!");
      return;
    }

    setData((prevData) => [
      ...prevData,
      {
        name: applicationNumber,
        event: "Tech Conference 2024",
        date: format(date, "yyyy-MM-dd"),
        time: "10:00 AM",
        seat: "A-123",
        qrValue: JSON.stringify({
          name: applicationNumber,
          event: "Tech Conference 2024",
          date: format(date, "yyyy-MM-dd"),
          time: "10:00 AM",
          seat: "A-123",
        }),
      },
    ]);
  };
  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Background animations */}
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

      {/* Form */}
      <div className="w-full max-w-lg space-y-8 p-8 ">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <Ticket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Ticket Generator
            </h1>
          </div>

          {/* Application Number Input */}
          <div className="space-y-2">
            <Label
              className="text-white text-xl block text-center"
              htmlFor="application"
            >
              Application Number
            </Label>
            <Input
              id="application"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              placeholder="VTAP2XXXXX"
              className="bg-white/10 border-white/20 text-white text-center h-12 text-lg placeholder:text-gray-400 w-72 md:w-96"
            />
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <Label className="text-white text-xl block text-center">
              Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-72 md:w-96 h-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-72 md:w-96 h-12 text-lg bg-blue-500 hover:bg-blue-700 text-white mt-8"
          >
            Generate Ticket!
          </Button>
        </form>
      </div>

      {/* Generated Ticket Preview */}
      {data.length > 0 ? (
        <div className="my-8">
          <GeneratedTickets ticketData={data} />
        </div>
      ) : null}
    </div>
  );
}
