import { useEffect, useState } from "react";

type DayGroup = { date: string; items: any[]; total: string };

export const useEntries = (api:any, limit = 20) => {
  const [days, setDays] = useState<DayGroup[]>([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFirst = async () => {
    setLoading(true);
    const res = await api.getEntries({ limit });
    setDays(res.days || []);
    setNextCursor(res.nextCursor ?? null);
    setLoading(false);
  };

  const loadMore = async () => {
    if (!nextCursor) return;
    const res = await api.getEntries({ limit, cursor: nextCursor });
    setDays((prev) => [...prev, ...(res.days || [])]);
    setNextCursor(res.nextCursor ?? null);
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  return { days, nextCursor, loading, loadMore, refetch: fetchFirst };
};
