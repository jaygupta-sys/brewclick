export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeSentence(string: string) {
    const words = string.split(' ');
    words.map(word => capitalize(word));
    return words.join(' ');
}