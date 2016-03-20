require "test_helper"

class TaskTest < ActiveSupport::TestCase
  def task
    @task ||= Task.new
  end

  def test_should_not_valid_task
    assert_not task.valid?, "Valid task without a name"
  end

  def test_should_not_save_task_without_name
    assert_not task.save, "Saved the task without a name"
  end
end
