class Group < ActiveRecord::Base

  has_and_belongs_to_many :users
  has_many :payments, through: :users

  validates_presence_of :name
  validates_presence_of :users

  def current_payer
    payer = users.sample
    users.each do |user|
      total = user.payments.sum(:amount)
        payer = user if total < payer.payments.sum(:amount)
    end
    payer
  end
end
