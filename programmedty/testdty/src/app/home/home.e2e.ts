import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/');
    await element(by.linkText('Home')).click();
  });


  it('should have `your content here` x-large', async () => {
    const subject = await element(by.css('[x-large]')).getText();
    const result  = 'Bienvenue à la page Home';
    expect(subject).toEqual(result);
  });

});
