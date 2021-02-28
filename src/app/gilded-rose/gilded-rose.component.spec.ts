import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GildedRoseComponent } from './gilded-rose.component';

let gildedRose: GildedRoseComponent;

describe('The Gilded Rose', () => {
  beforeEach(async () => arrange());

  it('should create the gilded rose home page', () => {
    expect(gildedRose).toBeTruthy();
  });
});

async function arrange() {
  gildedRose = await TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],
    declarations: [ GildedRoseComponent ],
  }).createComponent(GildedRoseComponent).componentInstance;
}
