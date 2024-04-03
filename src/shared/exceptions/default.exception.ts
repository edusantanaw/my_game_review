export class DefaultException extends Error {
  typeError: string = 'DefaultException';
  constructor(message: string) {
    super(message);
  }
}
