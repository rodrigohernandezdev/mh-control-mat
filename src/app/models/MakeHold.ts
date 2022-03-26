export class MakeHold {
  po: string;
  item: string;
  shipTo: string;
  quantity: number;
  needByDate: Date;
  received: Date;

  constructor(po: string, item: string, shipTo: string, quantity: number, needByDate: Date, received: Date) {
    this.po = po;
    this.item = item;
    this.shipTo = shipTo;
    this.quantity = quantity;
    this.needByDate = needByDate;
    this.received = received;
  }
}
