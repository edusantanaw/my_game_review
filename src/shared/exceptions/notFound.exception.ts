import { DefaultException } from './default.exception';

export class NotFoundException extends DefaultException {
  constructor(message: string) {
    super(message);
    this.typeError = 'NotFoundException';
  }
}
