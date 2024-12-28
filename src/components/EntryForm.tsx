import React, { useState } from 'react';
import { PlusCircle, Tag as TagIcon } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { TagList } from './TagList';

interface EntryFormProps {
  onSave: (title: string, content: string, tags: string[]) => void;
}

export function EntryForm({ onSave }: EntryFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onSave(title, content, tags);
    setTitle('');
    setContent('');
    setTags([]);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de l'entrée..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200 placeholder:text-gray-400"
        />
        
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            placeholder="Ajouter un tag..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200 placeholder:text-gray-400"
          />
          <Button
            type="button"
            onClick={handleAddTag}
            variant="secondary"
            size="sm"
          >
            <TagIcon size={18} className="mr-1" />
            Ajouter
          </Button>
        </div>

        <TagList tags={tags} onRemoveTag={(tag) => setTags(tags.filter(t => t !== tag))} />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Écrivez vos pensées..."
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200 placeholder:text-gray-400
                   resize-none"
        />

        <Button type="submit" className="w-full">
          <PlusCircle size={20} className="mr-2" />
          Sauvegarder
        </Button>
      </form>
    </Card>
  );
}