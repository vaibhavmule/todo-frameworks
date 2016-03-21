require "test_helper"

class TasksControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_response :success
    assert_not_nil assigns(:tasks)
  end

end
