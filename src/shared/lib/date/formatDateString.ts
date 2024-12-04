export function formatDateString(isoString: string | undefined, locale: string = 'en-US'): string {
    if (!isoString) {
        return 'Invalid date';
    }

    try {
        const date = new Date(isoString);

        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string");
        }

        // Форматируем дату в читаемом формате
        return date.toLocaleString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error) {
        return `${error}`;
    }
}