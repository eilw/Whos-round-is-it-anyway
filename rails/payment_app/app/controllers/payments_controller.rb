class PaymentsController < ApplicationController

  def payment_params
    params.require(:payment).permit(:amount, :user_id)
  end

  def create
    @payment = Payment.create(payment_params)
    redirect_to '/index'
  end

end
