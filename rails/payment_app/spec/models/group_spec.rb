require 'rails_helper'

describe Group, type: :model do
  it { is_expected.to have_and_belong_to_many(:users) }
  it { is_expected.to have_many(:payments).through(:users) }


  describe '#current_payer' do
    it 'returns the current payer' do
      user1 = create(:user)
      user2 = create(:user, email:'user2@email.com', username:'user2')
      user3 = create(:user, email:'user3@email.com', username:'user3')
      group = create(:group, user_ids: [user1.id, user2.id, user3.id])

      user1.payments.create(amount: 20)
      user2.payments.create(amount: 5)

      expect(group.current_payer.id).to be user3.id
      user3.payments.create(amount: 200)
      expect(group.current_payer.id).to be user2.id
    end
  end
end
