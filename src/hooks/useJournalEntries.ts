import { useState, useEffect } from 'react';
import { Entry } from '../types';

export function useJournalEntries() {
  const [entries, setEntries] = useState<Entry[]>(() => {
    const saved = localStorage.getItem('journal-entries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('journal-entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (title: string, content: string, tags: string[]) => {
    const newEntry: Entry = {
      id: Date.now().toString(),
      title,
      content,
      tags,
      createdAt: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
  };

  return { entries, addEntry };
}