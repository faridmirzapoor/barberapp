import React from "react";
import { Card as BaseCard, CardContent } from "@/components/ui/card";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <BaseCard className="flex flex-col h-full">
      <CardContent className="flex h-full items-center justify-center p-6 relative">
        {children}
      </CardContent>
    </BaseCard>
  );
}
