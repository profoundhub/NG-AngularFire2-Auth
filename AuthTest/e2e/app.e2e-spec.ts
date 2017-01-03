import { AuthTestPage } from './app.po';

describe('auth-test App', function() {
  let page: AuthTestPage;

  beforeEach(() => {
    page = new AuthTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
