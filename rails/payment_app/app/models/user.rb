class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :groups
  has_many :payments
  validates_presence_of :username
  validates_uniqueness_of :username

  # def total
  #   payments.sum(:total)
  # end
end
