class TasksController < ApplicationController
  before_action :set_project

  def index
    @tasks = @project.tasks
    render json: @tasks
  end

  private
  def set_project
    @project = Project.find(params[:project_id])
  end
end
