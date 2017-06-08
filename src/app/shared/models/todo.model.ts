export class Todo {
  id: number;
  description: string;
  completed: boolean;
  editing: boolean;

  constructor(description: string) {
    this.id = Date.now();
    this.description = description;
    this.completed = false;
    this.editing = false;
  }
};
