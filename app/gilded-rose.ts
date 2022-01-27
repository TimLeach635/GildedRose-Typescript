export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    minQuality: number = 0;
    maxQuality: number = 50;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        // Changes quality by an amount, but doesn't go outside of the quality bounds
        const adjustedQuality = (quality: number, amount: number): number => {
            const newQuality = quality + amount;
            if (newQuality < this.minQuality) {
                return this.minQuality;
            }
            if (newQuality > this.maxQuality) {
                return this.maxQuality;
            }
            return newQuality;
        }

        for (let i = 0; i < this.items.length; i++) {
            // Sulfuras never changes
            if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i].quality = adjustedQuality(this.items[i].quality, -1);
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            this.items[i].quality = adjustedQuality(this.items[i].quality, 1);
                        }
                        if (this.items[i].sellIn < 6) {
                            this.items[i].quality = adjustedQuality(this.items[i].quality, 1);
                        }
                    }
                }
            }
            this.items[i].sellIn = this.items[i].sellIn - 1;
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        this.items[i].quality = adjustedQuality(this.items[i].quality, -1);
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    this.items[i].quality = adjustedQuality(this.items[i].quality, 1);
                }
            }
        }

        return this.items;
    }
}
