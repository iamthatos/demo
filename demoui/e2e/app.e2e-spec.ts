import { DemouiPage } from './app.po';

describe('demoui App', () => {
  let page: DemouiPage;

  beforeEach(() => {
    page = new DemouiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
