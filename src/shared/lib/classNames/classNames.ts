type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional?: (string | undefined)[]): string {
   if (additional === undefined) {
       additional = [];
   }

    return [
        cls,
        ...additional.filter(Boolean) ,
        Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([cls]) => cls)
    ]
        .join(' ');
}