import { useState } from 'react';

export function useTagSelection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSelectTag = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return { selectedTag, setSelectedTag, handleSelectTag };
}