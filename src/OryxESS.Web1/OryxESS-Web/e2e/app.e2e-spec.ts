import { OryxESSWebPage } from './app.po';

describe('oryx-ess-web App', function() {
  let page: OryxESSWebPage;

  beforeEach(() => {
    page = new OryxESSWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
