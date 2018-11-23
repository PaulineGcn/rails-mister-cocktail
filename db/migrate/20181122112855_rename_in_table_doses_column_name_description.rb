class RenameInTableDosesColumnNameDescription < ActiveRecord::Migration[5.2]
  def change
    rename_column :doses, :decription, :description
  end
end
