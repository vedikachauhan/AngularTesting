import { configure, getLogger } from 'log4js';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  configure('./test.log');
  const logger = getLogger();
  logger.level = 'debug';
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    logger.debug('Just tested welcome message');
    expect(page.getParagraphText()).toEqual('Welcome to TestApp!');
  });
});
