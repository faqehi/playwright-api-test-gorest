export function lowercaseKeys(obj: any): any {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key.toLowerCase(), value])
    );
}