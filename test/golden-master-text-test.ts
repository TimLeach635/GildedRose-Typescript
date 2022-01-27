import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item("Item1", 5, 2),
    new Item("Item2", 0, 6),
    new Item("Item3", 1, 8),
    new Item("Aged Brie", 10, 3),
    new Item("Aged Brie", 1, 8),
    new Item("Aged Brie", 7, 48),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11),
    new Item("Backstage passes to a TAFKAL80ETC concert", 7, 40),
    new Item("Backstage passes to a TAFKAL80ETC concert", 2, 40),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", 8, 50),
];

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
console.log(gildedRose.items);
