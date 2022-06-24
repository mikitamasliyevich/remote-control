import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer: http.Server = http.createServer(function (req: http.IncomingMessage, res: http.ServerResponse) {
    let currentData: string = "";
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    const FSstream: fs.ReadStream = fs.createReadStream(file_path);

    FSstream.on("data", (data: string) => {
        currentData += data;
      });

    FSstream.on("end", () => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(currentData);
      });

    FSstream.on("error", (err: Error) => {
        res.writeHead(404);
        res.end(JSON.stringify(err));
      });
});
