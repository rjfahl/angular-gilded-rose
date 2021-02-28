import { TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';


let inventory: InventoryComponent;

describe('The Gilded Rose', () => {
  beforeEach(async () => arrange());

  it('should create the inventory page', () => {
    expect(inventory).toBeTruthy();
  });

  it("should foo", function() {
    inventory.items = [{name: "", sellIn: 0, quality: 0}];
    inventory.updateQuality();
    expect(inventory.items[0].name).toEqual("fixme");
  });
});

async function arrange() {
  inventory = await TestBed.configureTestingModule({
    declarations: [ InventoryComponent ],
  }).createComponent(InventoryComponent).componentInstance;
}