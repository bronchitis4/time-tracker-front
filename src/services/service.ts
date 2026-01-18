export type Entry = {
  id?: number;
  date: string;
  project: string;
  hours: number;
  description: string;
  createdAt?: string;
};

export default class APIs {
    baseUrl = import.meta.env.VITE_API_BASE_URL;

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

    async getEntries(params?: { limit?: number; cursor?: string | null }) {
        const limit = params?.limit || '';
        const cursor = params?.cursor || '';
        const res = await fetch(`${this.baseUrl}/entries?limit=${limit}&cursor=${cursor}`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message?.[0] || data.message || "Failed to fetch");
        }

        return data;
    }
}
