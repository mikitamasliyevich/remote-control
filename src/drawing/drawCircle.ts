import { TCoordinates } from '../types';
import robot from 'robotjs';


export const drawCircle = (radius: number): void => {
    const coordinates: TCoordinates= robot.getMousePos();

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x: number = coordinates.x + radius * Math.cos(i);
        const y: number = coordinates.y + radius * Math.sin(i);
        robot.dragMouse(x, y);
        robot.mouseClick();
    }
};