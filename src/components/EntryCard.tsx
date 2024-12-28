import React from 'react';
import { Calendar, Tag as TagIcon } from 'lucide-react';
import { Entry } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { formatDate } from '../utils/date';

interface EntryCardProps {
  entry: Entry;
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
  animationDelay: number;
}

export function EntryCard({ entry, selectedTag, onSelectTag, animationDelay }: EntryCardProps) {
  return (
    <Card
      className="p-6 animate-fadeIn"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
        <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
          <Calendar size={16} className="mr-1.5" />
          {formatDate(entry.createdAt)}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 whitespace-pre-wrap leading-relaxed">
        {entry.content}
      </p>
      
      {entry.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <Button
              key={tag}
              onClick={() => onSelectTag(tag)}
              variant={selectedTag === tag ? 'primary' : 'ghost'}
              size="sm"
            >
              <TagIcon size={14} className="mr-1" />
              {tag}
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
}