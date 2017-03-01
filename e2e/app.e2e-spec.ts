import { LyricManagerPage } from './app.po';

describe('lyric-manager App', () => {
  let page: LyricManagerPage;

  beforeEach(() => {
    page = new LyricManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
