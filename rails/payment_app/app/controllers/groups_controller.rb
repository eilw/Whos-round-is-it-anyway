class GroupsController < ApplicationController

  def group_params
    params.require(:group).permit(:name, {user_ids: [] })
  end

  def create
    @group = Group.create(group_params)
    redirect_to '/index'
  end

end
