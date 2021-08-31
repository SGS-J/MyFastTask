import EditUser from "./components/EditUser";
import { useParams } from "react-router-dom";

export default function MePage() {
  const { user } = useParams();

  return (
    <>
      <div>
        <EditUser />
      </div>
    </>
  );
}
