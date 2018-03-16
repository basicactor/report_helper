class RemovePartFromSections < ActiveRecord::Migration[5.1]
  def change
    remove_column :sections, :part, :text
  end
end
