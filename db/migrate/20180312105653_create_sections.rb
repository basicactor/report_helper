class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.text :title
      t.text :text
      t.text :part
      t.references :paper, foreign_key: true

      t.timestamps
    end
  end
end
