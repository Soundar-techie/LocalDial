export interface Event {
  id: string;
  title: string;
  category: 'exercise' | 'eating' | 'work' | 'relax' | 'family' | 'social';
  start: Date;
  end: Date;
  color?: string;
}

export interface Goal {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  goalId: string;
}