export type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional?: (string | undefined)[]): string {
   if (additional === undefined) {
       additional = [];
   }

    return [
        cls,
        ...additional.filter(Boolean) ,
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls)
    ]
        .join(' ');
}