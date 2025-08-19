import { create } from 'zustand';

interface UIState {
  // Theme and preferences
  soundEnabled: boolean;
  motionReduced: boolean;
  isKonamiActivated: boolean;
  
  // UI states
  commandPaletteOpen: boolean;
  currentRoute: string;
  isLoading: boolean;
  
  // Cursor position for magnetic effects
  cursorX: number;
  cursorY: number;
  
  // Actions
  toggleSound: () => void;
  toggleMotion: () => void;
  activateKonami: () => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  setCurrentRoute: (route: string) => void;
  setLoading: (loading: boolean) => void;
  setCursorPosition: (x: number, y: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Initial state
  soundEnabled: false, // Muted by default per requirements
  motionReduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  isKonamiActivated: false,
  commandPaletteOpen: false,
  currentRoute: '/',
  isLoading: false,
  cursorX: 0,
  cursorY: 0,
  
  // Actions
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  toggleMotion: () => set((state) => ({ motionReduced: !state.motionReduced })),
  activateKonami: () => set({ isKonamiActivated: true }),
  openCommandPalette: () => set({ commandPaletteOpen: true }),
  closeCommandPalette: () => set({ commandPaletteOpen: false }),
  setCurrentRoute: (route) => set({ currentRoute: route }),
  setLoading: (loading) => set({ isLoading: loading }),
  setCursorPosition: (x, y) => set({ cursorX: x, cursorY: y }),
}));
