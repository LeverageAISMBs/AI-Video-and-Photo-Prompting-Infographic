
export interface ChartDataItem {
  name: string;
  value: number;
  color?: string;
}

export interface RadarDataItem {
  subject: string;
  hero: number;
  victim: number;
  neutral: number;
  fullMark: number;
}

export interface BubbleDataItem {
  x: number;
  y: number;
  z: number;
  name: string;
}

export interface VocabularyItem {
  intent: string;
  term: string;
  spec: string;
  effect: string;
}

export interface ShotSizeItem {
  title: string;
  category: string;
  terms: string;
  borderColor: string;
}
