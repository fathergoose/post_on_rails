module ApplicationHelper
  # Inherits all of the Redcarped::Render::HTML and define
  # a new instance method called #block_code which is used
  # to syntax hilight code blocks
  class CodeRayify < Redcarpet::Render::HTML
    # Syntax hihlighting added to redcarped via CodeRay
    def block_code(code, language)
      CodeRay.scan(code, language).div
    end
  end

  # Accept a string of markdown
  # https://daringfireball.net/projects/markdown/
  # and return a string of HTML ready to render
  #
  def markdown(text)
    coderayified = CodeRayify.new(:filter_html => true, 
                                  :hard_wrap => true,
                                  :line_numbers => :table)
    options = {
      :fenced_code_blocks => true,
      :no_intra_emphasis => true,
      :autolink => true,
      :strikethrough => true,
      :lax_html_blocks => true,
      :superscript => true
    }
    markdown_to_html = Redcarpet::Markdown.new(coderayified, options)
    markdown_to_html.render(text).html_safe
  end
end
