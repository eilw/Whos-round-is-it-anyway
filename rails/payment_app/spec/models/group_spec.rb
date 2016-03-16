require 'rails_helper'

describe Group, type: :model do
  it { is_expected.to have_and_belong_to_many(:users) }
  #.dependent(:destroy)
  #.through(:??).source(:??) }
end
