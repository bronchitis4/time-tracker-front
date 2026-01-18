import { useMemo } from "react";
import DayHistoryItem from "../DayHistoryItem"
import type { DayGroup } from "../../types/entries";

type Props = {
  days: DayGroup[];
  loading: boolean;
  loadMore: () => void;
  nextCursor: any;
  hasMore: boolean;
};

const EntryHistory = ({ days, loading, loadMore, nextCursor, hasMore }: Props) => {

  const grandTotal = useMemo(() => {
    return days.reduce((sum: number, d: DayGroup) => sum + Number(d.total), 0);
  }, [days]);

  if (loading) return <p>Loading...</p>;

 return (
  <div className="space-y-4 bg-white p-2">
    <h2 className="text-xl font-semibold">History</h2>

    {days.length === 0 ? (
      <p>History is empty</p>
    ) : (
      <>
        {days.map((day: DayGroup) => (
          <DayHistoryItem key={day.date} day={day} />
        ))}

        <div className="flex justify-between items-center">
          <div className="font-semibold">Grand total: {grandTotal}h</div>

          <button
            onClick={loadMore}
            disabled={!nextCursor || !hasMore}
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
