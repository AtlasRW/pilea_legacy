source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'mailjet', '~> 1.5'
gem 'mjml-rails', '~> 4.4'

gem 'devise', '~> 4.7'
gem 'cancancan', '~> 3.1'
gem 'rails-i18n', '~> 6.0'

gem 'sidekiq', '~> 6.1'
gem 'rest-client', '~> 2.1'

gem 'rails', '~> 6.0.3'
gem 'pg', '>= 0.18', '< 2.0'
gem 'webpacker', '~> 4.0'

gem 'puma', '~> 4.1'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'redis', '~> 4.0'
# gem 'image_processing', '~> 1.2'

# Dependabot Security Updates
gem "actionview", ">= 5.2.4.4"

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'dotenv-rails', '~> 2.7.6'
  gem 'table_print', '~> 1.5.7'

  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end