import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create a 'vendor' chunk for node_modules
          if (id.includes('node_modules')) {
            // Group major libraries specifically
            if (id.includes('react') || id.includes('redux') || id.includes('axios')) {
              return 'vendor-main';
            }
            
            // Other node_modules dependencies
            return 'vendor-deps';
          }
          
          // Create chunks for different parts of the application
          if (id.includes('/src/components/')) {
            return 'components';
          }
          
          if (id.includes('/src/pages/')) {
            return 'pages';
          }
          
          if (id.includes('/src/hooks/') || id.includes('/src/context/')) {
            return 'app-logic';
          }
          
          if (id.includes('/src/utils/') || id.includes('/src/lib/')) {
            return 'utils';
          }
          
          // Default case - leave other imports in the main chunk
          return undefined;
        }
      }
    }
  },
});
