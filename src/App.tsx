import React from 'react';
import { Book } from 'lucide-react';
import { EntryForm } from './components/EntryForm';
import { EntryList } from './components/EntryList';
import { useJournalEntries } from './hooks/useJournalEntries';
import { useTagSelection } from './hooks/useTagSelection';
import { Button } from './components/ui/Button';

export function App() {
  const { entries, addEntry } = useJournalEntries();
  const { selectedTag, setSelectedTag, handleSelectTag } = useTagSelection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Book className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 
                           bg-clip-text text-transparent">
                Journal Personnel
              </h1>
            </div>
            {selectedTag && (
              <Button
                onClick={() => setSelectedTag(null)}
                variant="ghost"
                size="sm"
              >
                Voir toutes les entrées
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Nouvelle Entrée</h2>
            <EntryForm onSave={addEntry} />
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {selectedTag ? `Entrées tagged #${selectedTag}` : 'Toutes les entrées'}
            </h2>
            <EntryList
              entries={entries}
              selectedTag={selectedTag}
              onSelectTag={handleSelectTag}
            />
          </div>
        </div>
      </main>
    </div>
  );
}