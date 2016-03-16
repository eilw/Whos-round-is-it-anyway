
require 'rails_helper'

feature 'groups', type: :request do

  scenario 'group creation' do
    expect{ add_group }.to change{Group.count}.by 1
    expect(response.status).to eq 201
  end

end
