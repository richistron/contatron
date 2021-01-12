module ApplicationHelper
  def alert_class(name = 'notice')
    name == 'notice' ? 'alert-info' : 'alert-warning'
  end
end
