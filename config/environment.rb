# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.sendgrid.net',
  :port           => '587',
  :authentication => :plain,
  :user_name      => ENV['basicactor'],
  :password       => ENV['Paper316316Help'],
  :domain         => 'paperhelp.herokuapp.com',
  :enable_starttls_auto => true
}
