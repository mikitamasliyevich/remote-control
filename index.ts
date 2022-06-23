import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { drawCircle, drawSquare, drawRectangle } from './src/drawing/index'
import { TCoordinates } from './src/types';
import { MOUSE_UP, MOUSE_DOWN, MOUSE_LEFT, 
  MOUSE_RIGHT, MOUSE_POSITION, DRAW_CIRCLE, DRAW_SQUARE, DRAW_RECTANGLE, PRNT_SCRN
} from './src/utils/helpers';
import { mouseUp, mouseDown, mouseLeft, mouseRight } from './src/navigation/index';

const HTTP_PORT: number | string = process.env.PORT || 3000;
const WEB_SOCKET_PORT: number | string = process.env.WEB_SOCKET_PORT || 8080;


console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: +WEB_SOCKET_PORT}, () => console.log(`Server started on ${WEB_SOCKET_PORT}`));

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data: any) {
      const input = data.toString();
      const values: number = parseInt(input.match(/\d+/));
      const { x, y }: TCoordinates= robot.getMousePos();
      
      if(input.includes(MOUSE_UP)) {
        ws.send(MOUSE_UP)
        mouseUp(values)
      } else if(input.includes(MOUSE_DOWN)){
        ws.send(MOUSE_DOWN)
        mouseDown(values)
      } else if( input.includes(MOUSE_LEFT)) {
        ws.send(MOUSE_LEFT)
        mouseLeft(values)
      } else if(input.includes(MOUSE_RIGHT)) {
        ws.send(MOUSE_RIGHT)
        mouseRight(values)
      } else if(input.includes(MOUSE_POSITION)) {
        ws.send(`${MOUSE_POSITION},x=${x}px,y=${y}px`)
      } else if(input.includes(DRAW_CIRCLE)) {
        ws.send(DRAW_CIRCLE);
        drawCircle(values)
      } else if(input.includes(DRAW_SQUARE)) {
        ws.send(DRAW_SQUARE)
        drawSquare(values)
      } else if(input.includes(DRAW_RECTANGLE)) {
        ws.send(DRAW_RECTANGLE)  
        drawRectangle(input)
      } else if(input.includes(PRNT_SCRN)) {
          ws.send(PRNT_SCRN)
      } else {
        console.log('Please check your conditions')
      }
    });
  });

  wss.on('close', () => {
    console.log('disconnected');
  })