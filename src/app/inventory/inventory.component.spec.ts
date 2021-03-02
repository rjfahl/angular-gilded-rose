import { TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';

let inventory: InventoryComponent;

describe('The Gilded Rose', () => {
  beforeEach(async () => arrange());

  it('should create the inventory page', () => {
    expect(inventory).toBeTruthy();
  });

  it('inverntory items should decrease in quality', function () {
    updateItemQuality('', 30, 10);
    expect(inventory.items[0].quality).toEqual(9);
  });

  it('inventory items should decrease in quality twice as fast after sell-in date', function () {
    updateItemQuality('', 0, 10);
    expect(inventory.items[0].quality).toEqual(8);
  });

  it('inventory items should never have a negative quality value', function () {
    updateItemQuality('', 0, 0);
    expect(inventory.items[0].quality).toEqual(0);
  });

  it('Aged Brie should increase in quality over time', function () {
    updateItemQuality('Aged Brie', 1, 10);
    expect(inventory.items[0].quality).toEqual(11);
  });

  it('Aged Brie should increase in quality twice as fast after sell-in date', function () {
    updateItemQuality('Aged Brie', 0, 10);
    expect(inventory.items[0].quality).toEqual(12);
  });


  it('Aged brie quality should not exceed 50', function () {
    updateItemQuality('Aged Brie',1 ,50);
    expect(inventory.items[0].quality).toEqual(50);
  });

  it('Item quality should reduce by one, or continue to degrade if initialized with quality above 50', function () {
    updateItemQuality('',1 ,52);
    expect(inventory.items[0].quality).toEqual(51);
  });
  
  it('Legendary items does not degrade', function () {
    updateItemQuality('Sulfuras, Hand of Ragnaros',1 ,40);
    expect(inventory.items[0].quality).toEqual(40);
  });

  it('Legendary items does not have to be sold', function () {
    updateItemQuality('Sulfuras, Hand of Ragnaros', 1,40);
    expect(inventory.items[0].sellIn).toEqual(1);
  });

  it('Backstage passes value should increase in value as sell-in date approaches', function () {
    updateItemQuality('Backstage passes to a TAFKAL80ETC concert', 15, 10);
    expect(inventory.items[0].quality).toEqual(11);
  });

  it('Backstage passes value should increase in value by 2 if sell-in date is between 10-6', function () {
    updateItemQuality('Backstage passes to a TAFKAL80ETC concert', 10, 10);
    expect(inventory.items[0].quality).toEqual(12);
  });

  it('Backstage passes value should increase in value by 3 if sell-in date is between 5-1', function () {
    updateItemQuality('Backstage passes to a TAFKAL80ETC concert', 1, 10);
    expect(inventory.items[0].quality).toEqual(13);
  });

  it('Backstage passes value should be zero if sell-in date is 0 or less', function () {
    updateItemQuality('Backstage passes to a TAFKAL80ETC concert', 0, 10);
    expect(inventory.items[0].quality).toEqual(0);
  });

  it('Conjured items degrade in Quality twice as fast as normal items', function () {
    updateItemQuality('Conjured Healthstones', 1, 10);
    expect(inventory.items[0].quality).toEqual(8);
  });
});


function updateItemQuality(name: string, sellIn: number, quality: number) {
  inventory.items = [{ name: name, sellIn: sellIn, quality: quality}];
  inventory.updateQuality();
}

async function arrange() {
  inventory = await TestBed.configureTestingModule({
    declarations: [InventoryComponent],
  }).createComponent(InventoryComponent).componentInstance;
}
