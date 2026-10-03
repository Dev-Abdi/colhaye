import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function saveHeroImagePlugin(): Plugin {
  return {
    name: 'save-hero-image-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/save-hero-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { dataUrl } = JSON.parse(body);
              if (dataUrl && typeof dataUrl === 'string') {
                const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targetDir = path.resolve(__dirname, 'public');
                if (!fs.existsSync(targetDir)) {
                  fs.mkdirSync(targetDir, { recursive: true });
                }
                const targetPath = path.resolve(targetDir, 'image.png');
                fs.writeFileSync(targetPath, buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: '/image.png' }));
                return;
              }
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: String(err) }));
              return;
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid payload' }));
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), saveHeroImagePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
