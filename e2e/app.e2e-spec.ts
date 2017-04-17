import { Angular2AzureAppPage } from './app.po';

describe('angular2-azure-app App', () => {
  let page: Angular2AzureAppPage;

  beforeEach(() => {
    page = new Angular2AzureAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
