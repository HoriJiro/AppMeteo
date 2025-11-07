import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true, // oppure '0.0.0.0' per accesso da rete locale
    port: 5173, // opzionale
  },
})
