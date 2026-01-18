import { memo, useState } from "react";


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

const DayHistoryItem = memo(function DayHistoryItem({ day }: { day: DayGroup }) {
    const [openIds, setOpenIds] = useState<Set<string | number>>(new Set());

    const toggle = (id: string | number) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };


    return (
        <div className="border rounded p-3">
            <div className="flex justify-between font-semibold">
                <span>{day.date}</span>
                <span>Total: {day.total}h</span>
            </div>

            <div className="mt-2 space-y-2">
                {day.items.map((e) => {
                    const isOpen = openIds.has(e.id);
                    return (
                        <div key={e.id} className="grid grid-cols-3 gap-2">
                            <div className="text-left">{e.project}</div>
                            <div>{e.hours}h</div>
                            <button
                                type="button"
                                className="text-right underline"
                                onClick={() => toggle(e.id)}
                            >
                                Check description
                            </button>

                            {isOpen && (
                                <p className="col-span-3 break-words text-left whitespace-pre-wrap">
                                    <i>{e.description}</i>
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
});

export default DayHistoryItem;