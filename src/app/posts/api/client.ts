import { createClient } from '@/prismicio'

export const prismicClient = createClient({
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})
