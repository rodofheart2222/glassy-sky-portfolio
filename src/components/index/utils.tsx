import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const wrapWordsWithHoverCard = (text: string, definitions: Record<string, string>) => {
  return text.split(' ').map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/, '');
    const definition = definitions[cleanWord.toLowerCase()] || `This is the word "${cleanWord}"`;
    return (
      <span key={index} className="inline-block mx-1">
        <HoverCard>
          <HoverCardTrigger className="hover:text-primary/80 transition-colors">
            {word}
          </HoverCardTrigger>
          <HoverCardContent className="glass-card word-hover-card">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white/90">{definition}</p>
              <div className="h-px bg-white/10" />
              <span className="text-xs text-white/60 italic">Hover for more info</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      </span>
    );
  });
};