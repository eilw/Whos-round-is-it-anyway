require 'rails_helper'

describe Group, type: :model do
  it { is_expected.to have_and_belong_to_many(:users) }
  it {is_expected.to have_many(:payments).through(:users)}

end
