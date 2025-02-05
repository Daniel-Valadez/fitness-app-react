import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  server: {
    port: 3000, 

    //This proxy is necessary for API calls when
    //we are no longer in local development. 
    proxy: {
      "/api": {
        //For now, the target will be hard coded at local host
        //but this will need to change depending on the environment later. 
        target: "http://localhost:5000", 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ""), 
      }
    }
  }
})
