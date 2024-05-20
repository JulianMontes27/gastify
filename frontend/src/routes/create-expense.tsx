import { createFileRoute } from "@tanstack/react-router";
import NewExpense from "@/components/create-expense/new-expense";

export const Route = createFileRoute("/create-expense")({
  component: NewExpense,
});
