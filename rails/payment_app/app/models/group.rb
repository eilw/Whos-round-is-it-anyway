class Group < ActiveRecord::Base

  has_and_belongs_to_many :users
  has_many :payments, through: :users

  validates_presence_of :name
  validates_presence_of :users

end
