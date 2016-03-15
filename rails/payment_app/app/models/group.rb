class Group < ActiveRecord::Base

  has_and_belongs_to_many :users

  validates_presence_of :name
  validates_presence_of :users

  # has_many :members, class_name: "User"
  # validates_presence_of :members

end
