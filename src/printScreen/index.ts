import Jimp from 'jimp';
import robot from 'robotjs';

export const imageController = (ws: any): void => {
    const { x, y } = robot.getMousePos();
    new Jimp(
      {
        data: robot.screen.capture(
          x - 100,
          y - 200,
          200,
          200
        ).image,
        width: 200,
        height: 200,
      },
      (err: Error, picture: any) => {
        if (err) {
          throw err;
        } else {
          picture.getBuffer(
            Jimp.PNG_FILTER_AUTO,
            (err: Error, string: string) => {
              if (err) {
                throw err;
              } else {
                ws.send(
                  `prnt_scrn ${Buffer.from(string).toString("base64")}`
                );
                console.log(`message prnt_scrn`);
              }
            }
          );
        }
      }
    );
  };