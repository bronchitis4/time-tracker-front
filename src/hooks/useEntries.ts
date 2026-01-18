import { useEffect, useState } from "react";
import type { DayGroup } from "../types/entries";

export const useEntries = (api:any, limit = 20) => {
  const [days, setDays] = useState<DayGroup[]>([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchFirst = async () => {
    setLoading(true);
    const res = await api.getEntries({ limit });
    setDays(res.days || []);
    setNextCursor(res.nextCursor ?? null);
    setHasMore((res.days || []).length >= limit);
    setLoading(false);
  };

  const loadMore = async () => {
    if (!nextCursor || !hasMore) return;
    const res = await api.getEntries({ limit, cursor: nextCursor });
    const newDays = res.days || [];
    setDays((prev) => [...prev, ...newDays]);
    setNextCursor(res.nextCursor ?? null);
    setHasMore(newDays.length >= limit);
    console.log(res.days);
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  return { days, nextCursor, loading, loadMore, refetch: fetchFirst, hasMore };
};
