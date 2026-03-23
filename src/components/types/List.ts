export interface ListProps {
  className?: string;
  options: Options[];
}

export interface Options {
  id: number;
  text: string;
  highlightedText: string;
}
