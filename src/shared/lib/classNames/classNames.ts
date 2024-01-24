
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value)) // Оставляем все значения true
            .map(([classNames]) => classNames) // Из всех значений получаем только их ключи 
    ]
        .join(' ');
}
