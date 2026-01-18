import APIs from "../services/service";
import { useEntries } from "../hooks/useEntries";
import EntryForm from "../components/EntryForm";
import EntryHistory from "../components/layouts/EntryHistory";

const api = new APIs();

const EntriesPage = () => {
  const { days, loading, loadMore, nextCursor, refetch, hasMore } = useEntries(api, 5);

  return (
    <div className="flex flex-col space-y-2">
      <EntryForm days={days} onSuccess={refetch} />
      <EntryHistory days={days} loading={loading} loadMore={loadMore} nextCursor={nextCursor} hasMore={hasMore} />
    </div>
  );
};

export default EntriesPage;
