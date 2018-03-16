class CreateCitations < ActiveRecord::Migration[5.1]
  def change
    create_table :citations do |t|
      t.text :url
      t.text :title
      t.references :paper, foreign_key: true
      t.references :section, foreign_key: true

      t.timestamps
    end
  end
end
