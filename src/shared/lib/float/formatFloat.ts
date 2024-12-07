export function formatFloat(value: number | undefined): number {
    if (value) {
        return Math.floor(value * 10) / 10;
    }
    return 0;
}