export interface CalligraphyDesign {
  id: string;
  text: string;
  fontFamily: string;
  fontSize: number;
  textColor: string;
  backgroundColor: string;
  textAlign: 'left' | 'center' | 'right';
  letterSpacing: number;
  lineHeight: number;
  createdAt: number;
  name: string;
}

export interface FontOption {
  name: string;
  className: string;
  displayName: string;
}

export const FONT_OPTIONS: FontOption[] = [
  // Elegant Script
  { name: 'Great Vibes', className: 'font-calligraphy-great-vibes', displayName: 'Great Vibes' },
  { name: 'Allura', className: 'font-calligraphy-allura', displayName: 'Allura' },
  { name: 'Alex Brush', className: 'font-calligraphy-alex-brush', displayName: 'Alex Brush' },
  { name: 'Pinyon Script', className: 'font-calligraphy-pinyon', displayName: 'Pinyon Script' },
  { name: 'Sacramento', className: 'font-calligraphy-sacramento', displayName: 'Sacramento' },
  { name: 'Parisienne', className: 'font-calligraphy-parisienne', displayName: 'Parisienne' },
  { name: 'Tangerine', className: 'font-calligraphy-tangerine', displayName: 'Tangerine' },
  
  // Formal Script
  { name: 'Monsieur La Doulaise', className: 'font-calligraphy-monsieur', displayName: 'Monsieur La Doulaise' },
  { name: 'Mrs Saint Delafield', className: 'font-calligraphy-mrs-saint', displayName: 'Mrs Saint Delafield' },
  { name: 'Petit Formal Script', className: 'font-calligraphy-petit', displayName: 'Petit Formal' },
  { name: 'Italianno', className: 'font-calligraphy-italianno', displayName: 'Italianno' },
  
  // Casual Script
  { name: 'Dancing Script', className: 'font-calligraphy-dancing', displayName: 'Dancing Script' },
  { name: 'Satisfy', className: 'font-calligraphy-satisfy', displayName: 'Satisfy' },
  { name: 'Marck Script', className: 'font-calligraphy-marck', displayName: 'Marck Script' },
  { name: 'Clicker Script', className: 'font-calligraphy-clicker', displayName: 'Clicker Script' },
  { name: 'Niconne', className: 'font-calligraphy-niconne', displayName: 'Niconne' },
  { name: 'Euphoria Script', className: 'font-calligraphy-euphoria', displayName: 'Euphoria Script' },
  { name: 'Rouge Script', className: 'font-calligraphy-rouge', displayName: 'Rouge Script' },
  
  // Playful & Bold
  { name: 'Kaushan Script', className: 'font-calligraphy-kaushan', displayName: 'Kaushan Script' },
  { name: 'Yellowtail', className: 'font-calligraphy-yellowtail', displayName: 'Yellowtail' },
  { name: 'Cookie', className: 'font-calligraphy-cookie', displayName: 'Cookie' },
  { name: 'Lobster', className: 'font-calligraphy-lobster', displayName: 'Lobster' },
  { name: 'Courgette', className: 'font-calligraphy-courgette', displayName: 'Courgette' },
  
  // Serif/Display
  { name: 'Playfair Display', className: 'font-calligraphy-playfair', displayName: 'Playfair Display' },
  { name: 'Cormorant Garamond', className: 'font-calligraphy-cormorant', displayName: 'Cormorant Garamond' },
];

export const COLOR_PRESETS = [
  '#1a1a1a', '#2d2d2d', '#4a4a4a',
  '#8b4513', '#654321', '#3d2314',
  '#1e3a5f', '#2c5282', '#1a365d',
  '#2f5d3a', '#276749', '#1c4532',
  '#742a2a', '#9b2c2c', '#c53030',
  '#553c9a', '#6b46c1', '#805ad5',
];

export const BACKGROUND_PRESETS = [
  '#ffffff', '#faf8f5', '#f5f0e8',
  '#fffef0', '#fefce8', '#fef3c7',
  '#f0fdf4', '#ecfdf5', '#d1fae5',
  '#eff6ff', '#dbeafe', '#bfdbfe',
  '#fdf2f8', '#fce7f3', '#fbcfe8',
  '#1a1a1a', '#2d2d2d', '#374151',
];
