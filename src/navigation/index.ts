import robot from 'robotjs';
import { TCoordinates } from '../types/index'


export const mouseUp = (num: number): void => {
    const { x, y }: TCoordinates = robot.getMousePos()
    robot.moveMouse(x, y-num)
};

export const mouseDown = (num: number): void => {
    const { x, y }: TCoordinates = robot.getMousePos()
    robot.moveMouse(x, y+num)
}

export const mouseLeft = (num: number): void => {
    const { x, y }: TCoordinates = robot.getMousePos()
    robot.moveMouse(x-num, y)
}

export const mouseRight = (num: number): void => {
    const { x, y }: TCoordinates = robot.getMousePos()
    robot.moveMouse(x+num, y)
}