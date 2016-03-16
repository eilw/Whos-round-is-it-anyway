class GroupsController < ApplicationController

  def group_params
    params.require(:group).permit(:name, {user_ids: [] })
  end

  def create
    @group = Group.create(group_params)
    render json: @group.as_json(include: :users), status: 201
  end

end
