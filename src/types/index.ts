export interface Entry {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}