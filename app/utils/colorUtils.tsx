export const bgColorMap = {
    'background_1': 'dark',
    'background_2': 'light',
  } as const;
  
  export type BgColor = keyof typeof bgColorMap;
  
  export function getTextColor(bgColor: string) {
    return bgColorMap[bgColor as BgColor] === 'dark' ? 'text-light' : 'text-dark';
  }