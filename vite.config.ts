import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'admin-api',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/api/posts' && req.method === 'GET') {
              const filePath = path.resolve(__dirname, 'data', 'posts.json');
              fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: "Error reading data" }));
                } else {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(data);
                }
              });
              return;
            }
            if (req.url === '/api/posts' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', () => {
                const filePath = path.resolve(__dirname, 'data', 'posts.json');
                fs.writeFile(filePath, body, err => {
                  if (err) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: "Error writing data" }));
                  } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: true }));
                  }
                });
              });
              return;
            }
            next();
          });
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
