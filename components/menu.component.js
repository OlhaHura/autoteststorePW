export class MenuComponent {
  constructor(page) {
    this.page = page;

    this.loginOrRegisterButton = page.locator('a', { hasText: 'Login or register' });

    //category
    this.homePageMenuButton = page.getByRole('link', { name: 'Home' });
    this.apparelMenuButton = page.getByRole('link', { name: 'Apparel & accessories' });
    this.makeupMenuButton = page.getByRole('link', { name: 'Makeup' });
    this.skincareMenuButton = page.getByRole('link', { name: 'Skincare' });
    this.fragranceMenuButton = page.getByRole('link', { name: 'Fragrance' });
    this.menMenuButton = page.locator('ul.categorymenu > li > a[href*="path=58"]');
    this.hairCareMenuButton = page.getByRole('link', { name: 'Hair Care' });
    this.booksMenuButton = page.getByRole('link', { name: 'Books' });

    //Apparel & accessories subcategory
    this.shoesSubCategory = page.locator('ul.categorymenu a[href*="path=68_69"]');
    this.tShirtsSubCategory = page.locator('ul.categorymenu a[href*="path=68_70"]');

    //Makeup subcategory
    this.cheeksSubCategory = page.locator('ul.categorymenu a[href*="path=36_40"]');
    this.eyesSubCategory = page.locator('ul.categorymenu a[href*="path=36_39"]');
    this.faceSubCategory = page.locator('ul.categorymenu a[href*="path=36_38"]');
    this.lipsSubCategory = page.locator('ul.categorymenu a[href*="path=36_41"]');
    this.nailsSubCategory = page.locator('ul.categorymenu a[href*="path=36_42"]');
    this.valueSetsSubCategory = page.locator('ul.categorymenu a[href*="path=36_37"]');

    //Skincare subcategory
    this.eyesSkincareSubCategory = page.locator('ul.categorymenu a[href*="path=43_47"]');
    this.faceSkincareSubCategory = page.locator('ul.categorymenu a[href*="path=43_46"]');
    this.giftIdeasSkincareSubCategory = page.locator('ul.categorymenu a[href*="path=43_45"]');
    this.handsNailsSkincareSubCategory = page.locator('ul.categorymenu a[href*="path=43_48"]');

    //Fragrance subcategory
    this.menFragranceSubCategory = page.locator('ul.categorymenu a[href*="path=49_51"]');
    this.womenFragranceSubCategory = page.locator('ul.categorymenu a[href*="path=49_50"]');

    //Men subcategory
    this.bodyShowerMenSubCategory = page.locator('ul.categorymenu a[href*="path=58_63"]');
    this.fragranceSetsMenSubCategory = page.locator('ul.categorymenu a[href*="path=58_59"]');
    this.preShaveShavingMenSubCategory = page.locator('ul.categorymenu a[href*="path=58_61"]');
    this.skincareMenSubCategory = page.locator('ul.categorymenu a[href*="path=58_60"]');

    //Hair Care subcategory
    this.hairCareConditionerSubCategory = page.locator('ul.categorymenu a[href*="path=52_54"]');
    this.hairCareShampooSubCategory = page.locator('ul.categorymenu a[href*="path=52_53"]');

    //Books subcategory
    this.booksAudioCDSubCategory = page.locator('ul.categorymenu a[href*="path=65_66"]');
    this.booksPaperbackSubCategory = page.locator('ul.categorymenu a[href*="path=65_67"]');

  }

}