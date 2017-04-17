import { browser, element, by } from 'protractor';

export class Angular2AzureAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
