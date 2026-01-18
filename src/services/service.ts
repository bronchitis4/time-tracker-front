export type Entry = {
  id?: number;
  date: string;
  project: string;
  hours: number;
  description: string;
  createdAt?: string;
};

export default class APIs {
    baseUrl = "http://localhost:3000";

    async createEntry(entry: Entry ) {
        const res = await fetch(`${this.baseUrl}/entries`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entry),
        });

        const data = await res.json();

        if (!res.ok) {
            const msg = Array.isArray(data.message)
                ? data.message[0]
                : data.message || "Bad Request";

            throw msg;
        }

        return data;
    }

    async getEntries() {
        const res = await fetch(`${this.baseUrl}/entries`);
        const data = await res.json();

        if (!res.ok) {
            const msg = Array.isArray(data.message)
                ? data.message[0]
                : data.message || "Failed to fetch entries";

            throw new Error(msg);
        }

        return data;
    }
}
