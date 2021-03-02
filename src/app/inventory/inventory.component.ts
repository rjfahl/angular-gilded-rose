import { Component } from '@angular/core';

interface ItemInterface {
  name: string;
  sellIn: number;
  quality: number;
}

class Item implements ItemInterface {
  name: string = '';
  sellIn: number = 0;
  quality: number = 0;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  items: Array<Item> = [
    new Item('Aged Brie', 20, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 20, 15),
    new Item('Sulfuras, Hand of Ragnaros', 30, 48),
    new Item('Soap On A Rope', 30, 25),
    new Item('103 Pound Mightfish', 30, 4),
    new Item("Belbi's Eyesight Enhancing Romance Goggles", 30, 1),
    new Item('Conjured Healthstones', 30, 20), // new conjured item - not updating properly
  ];

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.updateQualityPositiveSellIn(i);

      this.updateSellInNonLegendary(i);

      this.updateQualityNegativeSellIn(i);
    }

    return this.items;
  }

  private updateQualityNegativeSellIn(i: number) {
    if (this.items[i].sellIn < 0) {
      if (this.items[i].name != 'Aged Brie') {
        if (this.isDefaultItem(i)) {
          this.items[i].quality = this.items[i].quality - 1;
        } else {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
    }
  }

  private isDefaultItem(i: number) {
    return this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros';
  }

  private updateSellInNonLegendary(i: number) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }

  private updateQualityPositiveSellIn(i: number) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.decreasingItemQuality(i);
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          this.updateBackstagePasses(i);
        }
      }
    }
  }

  private decreasingItemQuality(i: number) {
    if (this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Conjured Healthstones') {
      this.items[i].quality = this.items[i].quality - 1;
    }
    else if (this.items[i].name == 'Conjured Healthstones') {
      this.items[i].quality = this.items[i].quality - 2;
    }
  }

  private updateBackstagePasses(i: number) {
    if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
    if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }
}
