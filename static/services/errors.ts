export class Errors {
  errors: List<string> = [];

  get latest() {
    return this.errors.length ? this.errors[this.errors.length - 1] : undefined;
  }

  constructor() {
  }

  add(error) {
    this.errors.push(error);
  }

  flush(error?) {
    if(error) {
      let i = this.errors.indexOf(error);
      if(i >= 0) {
        this.errors.splice(i, 1);
      }
    } else {
      this.errors.splice(0, this.errors.length);
    }
  }
}
