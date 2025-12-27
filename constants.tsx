
import { 
  ChartDataItem, 
  RadarDataItem, 
  BubbleDataItem, 
  VocabularyItem, 
  ShotSizeItem 
} from './types';

export const PROMPT_COMPOSITION: ChartDataItem[] = [
  { name: 'Subject Description', value: 40, color: '#3b82f6' },
  { name: 'Camera/Shot Type', value: 25, color: '#22d3ee' },
  { name: 'Lighting Terms', value: 20, color: '#f472b6' },
  { name: 'Art Style/Medium', value: 15, color: '#a855f7' },
];

export const RADAR_DATA: RadarDataItem[] = [
  { subject: 'Power', hero: 90, victim: 10, neutral: 50, fullMark: 100 },
  { subject: 'Vulnerability', hero: 10, victim: 90, neutral: 50, fullMark: 100 },
  { subject: 'Detachment', hero: 30, victim: 40, neutral: 20, fullMark: 100 },
  { subject: 'Dynamism', hero: 70, victim: 30, neutral: 20, fullMark: 100 },
  { subject: 'Intimacy', hero: 40, victim: 50, neutral: 80, fullMark: 100 },
];

export const EXPOSURE_BUBBLE_DATA = {
  portrait: [
    { x: 1.8, y: 10, z: 25, name: 'Still' },
    { x: 2.8, y: 20, z: 15, name: 'Med' },
    { x: 1.4, y: 5, z: 20, name: 'Deep' }
  ],
  action: [
    { x: 5.6, y: 90, z: 20, name: 'Fast' },
    { x: 4.0, y: 80, z: 15, name: 'Mid' }
  ],
  landscape: [
    { x: 11, y: 10, z: 20, name: 'Infinite' },
    { x: 8, y: 30, z: 10, name: 'Sharp' }
  ]
};

export const COMPARISON_DATA = [
  { name: 'Visual Consistency', basic: 45, technical: 85 },
  { name: 'Depth/Texture', basic: 30, technical: 90 },
  { name: 'Lighting Realism', basic: 40, technical: 88 },
  { name: 'Composition Control', basic: 35, technical: 92 },
];

export const VOCABULARY_LIST: VocabularyItem[] = [
  { intent: '"Make the background blurry"', term: 'Shallow Focus', spec: 'f/1.4, f/1.8, 85mm lens', effect: 'Subject isolation, professional portrait look.' },
  { intent: '"Make it look scary/dramatic"', term: 'Low Key / Chiaroscuro', spec: 'Underexposed, High Contrast', effect: 'Deep shadows, silhouette, tension.' },
  { intent: '"Show the whole city"', term: 'Extreme Wide Shot (EWS)', spec: '14mm lens, Infinity Focus', effect: 'Epic scale, world-building, small subject.' },
  { intent: '"Make it look like an old movie"', term: 'Film Grain / Technicolor', spec: 'ISO 1600, 35mm film stock', effect: 'Texture, nostalgia, color shifts.' },
  { intent: '"Look down on the character"', term: 'High Angle / Bird\'s Eye', spec: 'Wide Angle (24mm)', effect: 'Subject looks weak, vulnerable, or small.' },
];

export const SHOT_SIZES: ShotSizeItem[] = [
  { title: 'Extreme Wide Shot (EWS)', category: 'Establishing', terms: '"Drone view", "landscape", "panoramic", "scale", "tiny figure"', borderColor: 'border-purple-500' },
  { title: 'Medium Shot (MS)', category: 'Dialogue/Action', terms: '"Waist up", "portrait", "interaction", "character study"', borderColor: 'border-blue-500' },
  { title: 'Extreme Close Up (ECU)', category: 'Detail/Intimacy', terms: '"Macro lens", "iris detail", "pores", "texture", "f/2.8"', borderColor: 'border-pink-500' },
];
