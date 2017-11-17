import { TodoAngularjs4Page } from './app.po';

describe('todo-angularjs4 App', () => {
  let page: TodoAngularjs4Page;

  beforeEach(() => {
    page = new TodoAngularjs4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
