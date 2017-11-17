class AddTasksCounterCacheToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :tasks_count, :integer, :default => 0

    Project.reset_column_information
    Project.all.each do |p|
      Project.update_counters p.id, tasks_count: p.tasks.length
    end
  end
end
