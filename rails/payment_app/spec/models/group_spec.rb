require 'rails_helper'

describe Group, type: :model do
  it { is_expected.to have_and_belong_to_many(:users) }
  it {is_expected.to have_many(:payments).through(:users)}


  describe '#current_payer' do
    it 'returns the current payer' do
      user1 = User.create(email: 'user1@email.com',
                          password: '12345678',
                          password_confirmation: '12345678',
                          username: 'user1')

    user2 = User.create(email: 'user2@email.com',
                        password: '12345678',
                        password_confirmation: '12345678',
                        username: 'user2')

    user3 = User.create(email: 'user3@email.com',
                        password: '12345678',
                        password_confirmation: '12345678',
                        username: 'user3')

      group = Group.create(name: 'groupname', user_ids: [user1.id, user2.id, user3.id])

      user1.payments.create(amount: 20)
      user2.payments.create(amount: 5)
      user1.payments.create(amount: 10)
      user2.payments.create(amount: 1)
      user2.payments.create(amount: 100)

      expect(group.current_payer.id).to be user3.id
      user3.payments.create(amount: 200)
      expect(group.current_payer.id).to be user1.id

    end
  end
end
