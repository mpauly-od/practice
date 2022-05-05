export const iconNames = [
    'audiobook',
    'book',
    'dismiss',
    'menu',
    'overflow',
    'search',
    'trashcan',
    'video'
] as const;

export type IconName = typeof iconNames[number];