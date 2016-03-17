require 'rails_helper'
include Capybara::Angular::DSL

feature 'user flow test', js:true do
  scenario 'user flow test' do
    visit '/'
    expect(page).not_to have_content('username')
    click_button('choose-signup')
    fill_in('username', with: 'User1')
    fill_in('email', with: 'user1@email.com')
    fill_in('password', with: '12345678')
    fill_in('password_confirmation', with: '12345678')
    click_button('signUp')
    expect(page).to have_button('add-group')
    expect(User.count).to eq 1
    click_button('add-group')
    fill_in('add-group-name', with: 'group1')
    find('.users', match: :first).click
    click_button('create-group')
    expect(page).to have_content('group1')
    expect(Group.count).to eq 1
  end
end
