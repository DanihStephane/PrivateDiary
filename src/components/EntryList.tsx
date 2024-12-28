import React from 'react';
import { Entry } from '../types';
import { EntryCard } from './EntryCard';
import { Card } from './ui/Card';

interface EntryListProps {
  entries: Entry[];
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
}

export function EntryList({ entries = [], selectedTag, onSelectTag }: EntryListProps) {
  const filteredEntries = selectedTag
    ? entries.filter(entry => entry.tags?.includes(selectedTag))
    : entries;

  if (filteredEntries.length === 0) {
    return (
      <Card className="p-6 text-center text-gray-500">
        <p>Aucune entrée à afficher</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {filteredEntries.map((entry, index) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          selectedTag={selectedTag}
          onSelectTag={onSelectTag}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}