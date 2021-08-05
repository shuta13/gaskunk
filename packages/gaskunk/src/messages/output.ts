import chalk from 'chalk';
import { createGaskunkMessage } from './internal';

export const info = (msg: string) => {
  console.log(`${createGaskunkMessage(msg)} \n`);
};

export const error = (msg: string) => {
  console.log(`${chalk.red(createGaskunkMessage(`Error! ${msg}`))} \n`);
};

export const success = (msg: string) => {
  console.log(`${chalk.green(createGaskunkMessage(`Success! ${msg} \n`))}`);
};
