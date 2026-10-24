import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = process.cwd();
http.createServer(async (req,res)=>{
 try { const path = resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url,'http://localhost').pathname)); if (!path.startsWith(root + sep)) {res.writeHead(403).end();return;} const data=await readFile(path);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'})[extname(path)]||'application/octet-stream'}).end(data); }
 catch {res.writeHead(404).end('Not found');}
}).listen(process.env.PORT || 3000,'0.0.0.0');
