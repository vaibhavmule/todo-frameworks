require "test_helper"

class ProjectsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_response :success
  end

  def test_show
    get :show, id: 'inbox'
    assert_response :success
  end

end
