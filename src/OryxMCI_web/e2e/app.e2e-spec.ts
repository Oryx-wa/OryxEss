import { OryxMCIWebPage } from './app.po';

describe('oryx-mci-web App', function() {
  let page: OryxMCIWebPage;

  beforeEach(() => {
    page = new OryxMCIWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
