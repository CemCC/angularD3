import { AngularD3TestPage } from './app.po';

describe('angular-d3-test App', () => {
  let page: AngularD3TestPage;

  beforeEach(() => {
    page = new AngularD3TestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
