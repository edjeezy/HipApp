import { HipAppPage } from './app.po';

describe('hip-app App', function() {
  let page: HipAppPage;

  beforeEach(() => {
    page = new HipAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
