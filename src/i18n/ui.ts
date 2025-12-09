import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  darkness: string
  emileMoselly: string
  // posts: string
  darknessTags: string
  emileMosellyTags: string
  // tags: string
  about: string
  toc: string
}

export const ui: Record<Language, Translation> = {
  fr: {
    title: 'Darkness',
    subtitle: 'La nuit au coin d\'une table',
    description: '...',
    darkness: 'Darkness',
    emileMoselly: 'Emile Moselly',
    // posts: 'Articles',
    darknessTags: 'Étiquettes de Darkness',
    emileMosellyTags: 'Étiquettes de Emile Moselly',
    // tags: 'Étiquettes',
    about: 'À propos',
    toc: 'Table des matières',
  },
}
