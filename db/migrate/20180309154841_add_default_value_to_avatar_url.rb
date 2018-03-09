class AddDefaultValueToAvatarUrl < ActiveRecord::Migration[5.1]
  def change
    themes = ["sugarsweets", "heatwave", "daisygarden", "seascape",
              "summerwarmth", "bythepool", "duskfalling", "frogideas",
              "berrypie"]
    rand_string = SecureRandom.urlsafe_base64
    random_avatar_url = "http://tinygraphs.com/labs/isogrids/hexa/" +
        "#{rand_string}?theme=#{themes.sample}&numcolors=4&size=180&fmt=svg"

    change_column_null :users, :avatar_url, :string, default: random_avatar_url
  end
end
