import { memo, useMemo } from "react";
import { useEntries } from "../../hooks/useEntries";
import DayHistoryItem from "../EntriesListItem";
import APIs from "../../services/service";

type EntryItem = {
  id: string | number;
  project: string;
  hours: number | string;
  description: string;
};

type DayGroup = {
  date: string;
  total: number | string;
  items: EntryItem[];
};

const api = new APIs();

const EntryHistory = () => {
  const { days, loading, loadMore, nextCursor } = useEntries(api, 20);

  const grandTotal = useMemo(() => {
    return days.reduce((sum: number, d: DayGroup) => sum + Number(d.total), 0);
  }, [days]);

  if (loading) return <p>Loading...</p>;

 return (
  <div className="space-y-4 bg-white p-2">
    <h2 className="text-xl font-semibold">History</h2>

    {days.length === 0 ? (
      <p>NULL</p>
    ) : (
      <>
        {days.map((day: DayGroup) => (
          <DayHistoryItem key={day.date} day={day} />
        ))}

        <div className="flex justify-between items-center">
          <div className="font-semibold">Grand total: {grandTotal}h</div>

          <button
            onClick={loadMore}
            disabled={!nextCursor}
            className="border rounded px-3 py-1 disabled:opacity-50"
          >
            Load more
          </button>
        </div>
      </>
    )}
  </div>
);

};

export default EntryHistory;
