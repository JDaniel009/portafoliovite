import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {

        javascriptEnabled: true,
        base: "https://JDaniel009/portafolioweb/",
      },
    },
  },
});
