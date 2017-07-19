import { SteamappPage } from './app.po';

describe('steamapp App', () => {
  let page: SteamappPage;

  beforeEach(() => {
    page = new SteamappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
