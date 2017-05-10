import { CignalApplicationPage } from './app.po';

describe('cignal-application App', function() {
  let page: CignalApplicationPage;

  beforeEach(() => {
    page = new CignalApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
