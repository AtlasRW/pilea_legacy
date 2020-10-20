Mjml.setup do |config|
  config.template_language = :erb

  # set to `false` to ignore errors silently
  config.raise_render_exception = true

  # optimize the size of your email
  config.beautify = false
  config.minify = true
end