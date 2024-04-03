import { DefaultException } from './default.exception';

export class DomainException extends DefaultException {
  constructor(message: string) {
    super(message);
    this.typeError = 'DomainException';
  }
}
