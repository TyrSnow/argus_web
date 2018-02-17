import { ArguswebPage } from './app.po';

describe('argusweb App', () => {
  let page: ArguswebPage;

  beforeEach(() => {
    page = new ArguswebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
