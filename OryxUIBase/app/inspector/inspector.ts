export class Inspector {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public current?: boolean
  ) {  }
}