class Project < ActiveRecord::Base

  has_many :tasks, dependent: :destroy

  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  before_save :update_slug

  private
  def update_slug
    if slug.blank?
      self.slug = (name).to_url
    end
  end
end
