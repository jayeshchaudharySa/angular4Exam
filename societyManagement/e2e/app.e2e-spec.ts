import { SocietyManagementPage } from './app.po';

describe('society-management App', () => {
  let page: SocietyManagementPage;

  beforeEach(() => {
    page = new SocietyManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
