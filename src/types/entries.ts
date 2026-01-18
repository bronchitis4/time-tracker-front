export type EntryItem = {
  id: string | number;
  project: string;
  hours: number | string;
  description: string;
};

export type DayGroup = {
  date: string;
  total: number | string;
  items: EntryItem[];
};
