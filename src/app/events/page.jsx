'use client'
import React, { Suspense } from 'react';
import { Events } from "@/components/events/events";
import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import { useSearchParams } from 'next/navigation'

export default function Page() {
  return (
    <div className="bg-black md:pt-10">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamComponent />
      </Suspense>
      <Footer />
    </div>
  );
}

function SearchParamComponent() {
  const pathname = useSearchParams();
  const eventId = pathname.get('eventId');

  return (
    <div className="h-full bg-none flex items-center justify-center py-20 md:py-28 lg:py-32">
      <Events eventId={eventId} />
    </div>
  );
}
