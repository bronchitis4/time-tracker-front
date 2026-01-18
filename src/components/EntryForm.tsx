import { useState } from "react"
import toast from "react-hot-toast";

const PROJECTS = [
    "Viso Internal",
    "Client A",
    "Client B",
    "Personal Development",
];

const todayISO = () => new Date().toISOString().slice(0, 10);

const EntryForm = () => {
    const [date, setDate] = useState(todayISO());
    const [project, setProject] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("SAVED");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3 flex gap-4 w-full border p-2 bg-white">
            <div className="w-[70%] space-y-1">
                <div className="space-y-1">
                    <label className="block text-left">Project</label>
                    <select
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    >
                        {PROJECTS.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="block text-left">Work description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                        rows={4}
                        placeholder="What did you do?"
                    />
                </div>
            </div>
            <div className="w-[30%] space-y-1">
                <div className="space-y-1">
                    <label className="block text-left">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-left">Hours</label>
                    <input
                        type="number"
                        step="0.25"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                        placeholder="e.g. 2.5"
                    />
                </div>
                <button type="submit" className="border rounded px-3 py-1 w-full">
                    Save
                </button>
            </div>
        </form>
    );
}

export default EntryForm;