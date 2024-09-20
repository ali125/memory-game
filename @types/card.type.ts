export type CardType = {
  id: number;
  icon: string;
  key: string;
};

export type BoardItem = {
  id: number;
  label: string;
  duration: number;
  data: CardType[];
};

export type BoardResponse = BoardItem[];
