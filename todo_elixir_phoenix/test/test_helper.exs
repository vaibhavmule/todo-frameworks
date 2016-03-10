ExUnit.start

Mix.Task.run "ecto.create", ~w(-r TodoElixirPhoenix.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r TodoElixirPhoenix.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(TodoElixirPhoenix.Repo)

