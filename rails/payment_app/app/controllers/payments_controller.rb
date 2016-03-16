class PaymentsController < ApplicationController

  def payment_params
    params.require(:payment).permit(:amount, :user_id)
  end

  def create
    @group = Group.find(params[:group_id])
    @payment = Payment.create(payment_params)
    @user = @group.current_payer
    render json: @user.as_json(only: [:id, :email, :username])
  end
end
