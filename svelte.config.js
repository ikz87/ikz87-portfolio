import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['*']  // Ensures all pages are prerendered
    }
  },
  preprocess: preprocess()
};

