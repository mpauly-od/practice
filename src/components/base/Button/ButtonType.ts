export const buttonTypes = [
    'primary',
    'secondary',
    'surface'
] as const;

export type ButtonType = typeof buttonTypes[number];