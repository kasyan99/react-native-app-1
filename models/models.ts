export interface ITodo {
  id: number;
  text: string;
}

export interface NavBarProps {
  changeText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  pressedHandler: () => void;
}

export interface TodosListProps {
  todoList: ITodo[];
  removeTask: (task: ITodo) => void;
}
