# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Convert keynames from the standard ruby_format to camelCase
Jbuilder.key_format camelize: :lower
