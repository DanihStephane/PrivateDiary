import React from 'react';

interface TagListProps {
  tags: string[];
  onRemoveTag: (tag: string) => void;
}

export function TagList({ tags, onRemoveTag }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm
                   flex items-center gap-1 animate-fadeIn"
        >
          #{tag}
          <button
            type="button"
            onClick={() => onRemoveTag(tag)}
            className="hover:text-blue-900 transition-colors"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
}