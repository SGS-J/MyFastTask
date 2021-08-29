import { useParams } from "react-router-dom";

export default function TasksPage() {
  const { user } = useParams();

  return <h1>{user} your tasks will be here</h1>;
}
