class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :tasks_count, :slug
  has_many :tasks
end
