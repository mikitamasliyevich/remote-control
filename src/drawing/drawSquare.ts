import robot from 'robotjs';
import { TCoordinates } from '../types';

export const drawSquare = (radius: number): void => {
 const coordinates: TCoordinates= robot.getMousePos();
 
  robot.mouseToggle("down");
  robot.moveMouseSmooth(coordinates.x + radius, coordinates.y);
  robot.moveMouseSmooth(coordinates.x + radius, coordinates.y + radius);
  robot.moveMouseSmooth(coordinates.x, coordinates.y + radius);
  robot.moveMouseSmooth(coordinates.x, coordinates.y);
  robot.mouseToggle("up");
};