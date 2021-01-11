class HomeController < ApplicationController
  before_action :authenticated_only, :index

  def index
  end
end
