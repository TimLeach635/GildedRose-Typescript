import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should correspond to the golden record', function() {
        // Arrange
        const inputItems = [
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
        const expectedOutputItems = [
            new Item('Item1', 1, 0),
            new Item('Item2', -4, 0),
            new Item('Item3', -3, 1),
            new Item('Aged Brie', 6, 7),
            new Item('Aged Brie', -3, 15),
            new Item('Aged Brie', 3, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 14),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 19),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', 8, 50),
        ];
        const gildedRose = new GildedRose(inputItems);

        // Act
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();

        // Assert
        expect(gildedRose.items).to.deep.equal(expectedOutputItems);
    });

});
