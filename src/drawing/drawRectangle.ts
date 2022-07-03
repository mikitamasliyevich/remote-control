import { TCoordinates } from '../types';
import robot from 'robotjs';

export const drawRectangle = (input: string): void  => {
    const coordinates: TCoordinates= robot.getMousePos();

    const rectX: number = parseInt(input.split(" ")[1]);
    const rectY:number = parseInt(input.split(" ")[2]);
    robot.mouseToggle("down");
    robot.moveMouseSmooth(coordinates.x + rectX, coordinates.y);
    robot.moveMouseSmooth(coordinates.x + rectX, coordinates.y + rectY);
    robot.moveMouseSmooth(coordinates.x, coordinates.y + rectY);
    robot.moveMouseSmooth(coordinates.x, coordinates.y);
    robot.mouseToggle("up");
};